# บทที่ 9: Authentication

## 🎯 สิ่งที่จะได้เรียนรู้

- JWT Authentication
- Protected Routes
- Login/Logout System
- Session Management

## 🔐 Authentication Flow

```
1. User → Login Form → Submit
2. Server → Verify Credentials
3. Server → Generate JWT Token
4. Client → Store Token (localStorage/cookie)
5. Client → Send Token with Requests
6. Server → Verify Token → Allow/Deny
```

## 🎫 JWT (JSON Web Token)

### โครงสร้าง JWT

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYxNjIzOTAyMn0.LfjLgHJhUjL4VSZ4P7k4uP0qP6c
```

แบ่งเป็น 3 ส่วน:
- **Header**: Algorithm และ Type
- **Payload**: User data
- **Signature**: Verify token

## 🚀 สร้างระบบ Authentication

### 1. สร้าง Auth Context

```javascript
// contexts/AuthContext.js
'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  
  useEffect(() => {
    // Check if user is logged in
    checkAuth()
  }, [])
  
  const checkAuth = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const res = await fetch('/api/auth/me', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        if (res.ok) {
          const userData = await res.json()
          setUser(userData)
        } else {
          localStorage.removeItem('token')
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      }
    }
    setLoading(false)
  }
  
  const login = async (email, password) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      
      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.message)
      }
      
      const data = await res.json()
      localStorage.setItem('token', data.token)
      setUser(data.user)
      router.push('/dashboard')
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
  
  const register = async (userData) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })
      
      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.message)
      }
      
      const data = await res.json()
      localStorage.setItem('token', data.token)
      setUser(data.user)
      router.push('/dashboard')
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
  
  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    router.push('/login')
  }
  
  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      register, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
```

### 2. API Routes - Login

```javascript
// app/api/auth/login/route.js
import { SignJWT } from 'jose'

// Mock users database
const users = [
  {
    id: 1,
    email: 'user@example.com',
    password: 'password123', // In real app, use bcrypt hash
    name: 'สมชาย'
  }
]

export async function POST(request) {
  try {
    const { email, password } = await request.json()
    
    // Find user
    const user = users.find(u => u.email === email)
    
    if (!user || user.password !== password) {
      return Response.json(
        { message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' },
        { status: 401 }
      )
    }
    
    // Generate JWT
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'your-secret-key'
    )
    
    const token = await new SignJWT({ userId: user.id })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('7d')
      .sign(secret)
    
    // Return user without password
    const { password: _, ...userWithoutPassword } = user
    
    return Response.json({
      token,
      user: userWithoutPassword
    })
  } catch (error) {
    return Response.json(
      { message: 'เกิดข้อผิดพลาด' },
      { status: 500 }
    )
  }
}
```

### 3. API Routes - Register

```javascript
// app/api/auth/register/route.js
import { SignJWT } from 'jose'

const users = [] // In real app, use database

export async function POST(request) {
  try {
    const { email, password, name } = await request.json()
    
    // Check if user exists
    if (users.find(u => u.email === email)) {
      return Response.json(
        { message: 'อีเมลนี้ถูกใช้งานแล้ว' },
        { status: 400 }
      )
    }
    
    // Create user
    const newUser = {
      id: users.length + 1,
      email,
      password, // In real app, hash with bcrypt
      name
    }
    
    users.push(newUser)
    
    // Generate JWT
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'your-secret-key'
    )
    
    const token = await new SignJWT({ userId: newUser.id })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('7d')
      .sign(secret)
    
    const { password: _, ...userWithoutPassword } = newUser
    
    return Response.json({
      token,
      user: userWithoutPassword
    })
  } catch (error) {
    return Response.json(
      { message: 'เกิดข้อผิดพลาด' },
      { status: 500 }
    )
  }
}
```

### 4. API Routes - Get Current User

```javascript
// app/api/auth/me/route.js
import { jwtVerify } from 'jose'

const users = [] // Same array from register

export async function GET(request) {
  try {
    const token = request.headers.get('authorization')?.split(' ')[1]
    
    if (!token) {
      return Response.json(
        { message: 'ไม่ได้รับอนุญาต' },
        { status: 401 }
      )
    }
    
    // Verify JWT
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'your-secret-key'
    )
    
    const { payload } = await jwtVerify(token, secret)
    const user = users.find(u => u.id === payload.userId)
    
    if (!user) {
      return Response.json(
        { message: 'ไม่พบผู้ใช้' },
        { status: 404 }
      )
    }
    
    const { password: _, ...userWithoutPassword } = user
    return Response.json(userWithoutPassword)
  } catch (error) {
    return Response.json(
      { message: 'Token ไม่ถูกต้อง' },
      { status: 401 }
    )
  }
}
```

### 5. Login Page

```javascript
// app/login/page.js
'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    const result = await login(email, password)
    
    if (!result.success) {
      setError(result.error)
    }
    
    setLoading(false)
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          เข้าสู่ระบบ
        </h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              อีเมล
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              รหัสผ่าน
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </button>
        </form>
        
        <p className="mt-4 text-center text-sm">
          ยังไม่มีบัญชี?{' '}
          <Link href="/register" className="text-blue-600 hover:underline">
            ลงทะเบียน
          </Link>
        </p>
      </div>
    </div>
  )
}
```

### 6. Protected Route Component

```javascript
// components/ProtectedRoute.js
'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  const router = useRouter()
  
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">กำลังโหลด...</div>
      </div>
    )
  }
  
  if (!user) {
    return null
  }
  
  return <>{children}</>
}
```

### 7. Dashboard (Protected)

```javascript
// app/dashboard/page.js
'use client'

import { useAuth } from '@/contexts/AuthContext'
import ProtectedRoute from '@/components/ProtectedRoute'

function DashboardContent() {
  const { user, logout } = useAuth()
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">แดชบอร์ด</h1>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              ออกจากระบบ
            </button>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg font-semibold">ยินดีต้อนรับ, {user?.name}!</h2>
            <p className="text-gray-600">อีเมล: {user?.email}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-100 p-4 rounded">
              <h3 className="font-semibold">โปรเจค</h3>
              <p className="text-2xl">0</p>
            </div>
            <div className="bg-green-100 p-4 rounded">
              <h3 className="font-semibold">งาน</h3>
              <p className="text-2xl">0</p>
            </div>
            <div className="bg-purple-100 p-4 rounded">
              <h3 className="font-semibold">ข้อความ</h3>
              <p className="text-2xl">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}
```

## ✅ สรุป

ในบทนี้เราได้เรียนรู้:
- ✅ JWT Authentication
- ✅ Login/Register System
- ✅ Protected Routes
- ✅ Session Management

## 🔗 Lab

ไปทำ Lab: [ระบบ Login/Logout](../../labs/09-auth-system/README.md)

## 📝 แบบฝึกหัด

1. เพิ่มฟีเจอร์ "จำฉันไว้"
2. เพิ่ม Forgot Password
3. เพิ่ม Email Verification
4. เพิ่ม Role-based Access
5. เพิ่ม OAuth (Google, Facebook)

## 🎯 เป้าหมายต่อไป

ในบทสุดท้าย เราจะเรียนรู้เรื่อง **Deployment**!

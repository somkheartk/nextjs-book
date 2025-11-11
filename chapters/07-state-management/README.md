# บทที่ 7: State Management

## 🎯 สิ่งที่จะได้เรียนรู้

- useState และ useEffect
- Context API
- Custom Hooks
- State Management Libraries (Zustand)

## 📊 State คืออะไร

State คือข้อมูลที่เปลี่ยนแปลงได้และส่งผลต่อ UI

### Local State vs Global State

- **Local State**: ใช้เฉพาะใน Component เดียว
- **Global State**: แชร์ข้อมูลระหว่างหลาย Components

## 🎨 useState - Local State

### Basic Usage

```javascript
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        เพิ่ม
      </button>
      <button onClick={() => setCount(count - 1)}>
        ลด
      </button>
      <button onClick={() => setCount(0)}>
        รีเซ็ต
      </button>
    </div>
  )
}
```

### Multiple States

```javascript
'use client'

import { useState } from 'react'

export default function UserForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(0)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, email, age })
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="ชื่อ"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="อีเมล"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="อายุ"
      />
      <button type="submit">บันทึก</button>
    </form>
  )
}
```

### Object State

```javascript
'use client'

import { useState } from 'react'

export default function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    bio: ''
  })
  
  const handleChange = (field, value) => {
    setUser(prev => ({
      ...prev,
      [field]: value
    }))
  }
  
  return (
    <div>
      <input
        value={user.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <input
        value={user.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      <textarea
        value={user.bio}
        onChange={(e) => handleChange('bio', e.target.value)}
      />
    </div>
  )
}
```

## ⚡ useEffect - Side Effects

### Basic Usage

```javascript
'use client'

import { useState, useEffect } from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1)
    }, 1000)
    
    // Cleanup
    return () => clearInterval(interval)
  }, []) // [] = run once on mount
  
  return <p>Seconds: {seconds}</p>
}
```

### Fetch Data

```javascript
'use client'

import { useState, useEffect } from 'react'

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])
  
  if (loading) return <p>Loading...</p>
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

### Dependencies

```javascript
'use client'

import { useState, useEffect } from 'react'

export default function SearchResults({ query }) {
  const [results, setResults] = useState([])
  
  useEffect(() => {
    if (query) {
      fetch(`/api/search?q=${query}`)
        .then(res => res.json())
        .then(setResults)
    }
  }, [query]) // Re-run when query changes
  
  return (
    <div>
      {results.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}
```

## 🌍 Context API - Global State

### สร้าง Context

```javascript
// contexts/ThemeContext.js
'use client'

import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
```

### ใช้งาน Provider

```javascript
// app/layout.js
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### ใช้งาน Context

```javascript
// components/ThemeToggle.js
'use client'

import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  )
}
```

### Auth Context

```javascript
// contexts/AuthContext.js
'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token')
    if (token) {
      fetch('/api/auth/me', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(setUser)
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])
  
  const login = async (email, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await res.json()
    localStorage.setItem('token', data.token)
    setUser(data.user)
  }
  
  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }
  
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
```

## 🎣 Custom Hooks

### useLocalStorage

```javascript
// hooks/useLocalStorage.js
'use client'

import { useState, useEffect } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue
    
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  
  return [value, setValue]
}

// Usage
function Component() {
  const [name, setName] = useLocalStorage('name', '')
  return <input value={name} onChange={e => setName(e.target.value)} />
}
```

### useFetch

```javascript
// hooks/useFetch.js
'use client'

import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])
  
  return { data, loading, error }
}

// Usage
function Component() {
  const { data, loading, error } = useFetch('/api/users')
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  
  return <div>{JSON.stringify(data)}</div>
}
```

## 📦 Zustand - State Management Library

### ติดตั้ง

```bash
npm install zustand
```

### สร้าง Store

```javascript
// store/useStore.js
import { create } from 'zustand'

export const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}))
```

### ใช้งาน

```javascript
'use client'

import { useStore } from '@/store/useStore'

export default function Counter() {
  const { count, increment, decrement, reset } = useStore()
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
```

### Cart Store

```javascript
// store/useCartStore.js
import { create } from 'zustand'

export const useCartStore = create((set) => ({
  items: [],
  
  addItem: (product) => set((state) => ({
    items: [...state.items, { ...product, quantity: 1 }]
  })),
  
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
  
  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.id === id ? { ...item, quantity } : item
    )
  })),
  
  clearCart: () => set({ items: [] }),
  
  total: () => {
    const state = useCartStore.getState()
    return state.items.reduce((sum, item) => 
      sum + (item.price * item.quantity), 0
    )
  }
}))
```

## ✅ สรุป

ในบทนี้เราได้เรียนรู้:
- ✅ useState และ useEffect
- ✅ Context API สำหรับ Global State
- ✅ Custom Hooks
- ✅ Zustand State Management

## 🔗 Lab

ไปทำ Lab: [จัดการ State แบบ Global](../../labs/07-global-state/README.md)

## 📝 แบบฝึกหัด

1. สร้าง Counter ด้วย useState
2. สร้าง Theme Context (Light/Dark)
3. สร้าง Custom Hook สำหรับ Fetch Data
4. สร้าง Cart Store ด้วย Zustand
5. สร้าง Auth Context

## 🎯 เป้าหมายต่อไป

ในบทถัดไป เราจะเรียนรู้เรื่อง **Forms และ Validation**!

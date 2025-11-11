# บทที่ 6: API Routes

## 🎯 สิ่งที่จะได้เรียนรู้

- สร้าง API Routes ใน Next.js
- HTTP Methods (GET, POST, PUT, DELETE)
- Request และ Response
- Error Handling
- การเชื่อมต่อ Database (Mock)

## 🌐 API Routes คือ อะไร

API Routes ใน Next.js ช่วยให้คุณสร้าง API endpoints ได้โดยไม่ต้องตั้ง Backend แยก

### ข้อดี
- ✅ ไม่ต้องสร้าง Server แยก
- ✅ Deploy พร้อมกับ Frontend
- ✅ ใช้งานง่าย
- ✅ Type-safe (ถ้าใช้ TypeScript)

## 📁 โครงสร้าง API Routes

```
app/
└── api/
    ├── hello/
    │   └── route.js          → /api/hello
    ├── users/
    │   ├── route.js          → /api/users
    │   └── [id]/
    │       └── route.js      → /api/users/:id
    └── products/
        └── route.js          → /api/products
```

## 🚀 สร้าง API Route แรก

### Simple GET Request

```javascript
// app/api/hello/route.js
export async function GET() {
  return Response.json({
    message: 'Hello from Next.js API!'
  })
}
```

เรียกใช้: `http://localhost:3000/api/hello`

Response:
```json
{
  "message": "Hello from Next.js API!"
}
```

## 📝 HTTP Methods

### GET - ดึงข้อมูล

```javascript
// app/api/users/route.js
const users = [
  { id: 1, name: 'สมชาย', email: 'somchai@example.com' },
  { id: 2, name: 'สมหญิง', email: 'somying@example.com' },
  { id: 3, name: 'สมศักดิ์', email: 'somsak@example.com' }
]

export async function GET(request) {
  // Query parameters
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  
  if (name) {
    const filtered = users.filter(u => 
      u.name.includes(name)
    )
    return Response.json(filtered)
  }
  
  return Response.json(users)
}
```

### POST - สร้างข้อมูล

```javascript
// app/api/users/route.js
export async function POST(request) {
  const body = await request.json()
  
  // Validation
  if (!body.name || !body.email) {
    return Response.json(
      { error: 'Name and email are required' },
      { status: 400 }
    )
  }
  
  const newUser = {
    id: users.length + 1,
    name: body.name,
    email: body.email
  }
  
  users.push(newUser)
  
  return Response.json(newUser, { status: 201 })
}
```

### Dynamic Routes - GET Single Item

```javascript
// app/api/users/[id]/route.js
export async function GET(request, { params }) {
  const id = parseInt(params.id)
  const user = users.find(u => u.id === id)
  
  if (!user) {
    return Response.json(
      { error: 'User not found' },
      { status: 404 }
    )
  }
  
  return Response.json(user)
}
```

### PUT - อัปเดตข้อมูล

```javascript
// app/api/users/[id]/route.js
export async function PUT(request, { params }) {
  const id = parseInt(params.id)
  const body = await request.json()
  
  const index = users.findIndex(u => u.id === id)
  
  if (index === -1) {
    return Response.json(
      { error: 'User not found' },
      { status: 404 }
    )
  }
  
  users[index] = {
    ...users[index],
    ...body
  }
  
  return Response.json(users[index])
}
```

### DELETE - ลบข้อมูล

```javascript
// app/api/users/[id]/route.js
export async function DELETE(request, { params }) {
  const id = parseInt(params.id)
  const index = users.findIndex(u => u.id === id)
  
  if (index === -1) {
    return Response.json(
      { error: 'User not found' },
      { status: 404 }
    )
  }
  
  users.splice(index, 1)
  
  return Response.json({ message: 'User deleted' })
}
```

## 🔐 Headers และ CORS

```javascript
// app/api/data/route.js
export async function GET() {
  return Response.json(
    { data: 'some data' },
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': '*',
      },
    }
  )
}
```

## ⚠️ Error Handling

```javascript
// app/api/posts/route.js
export async function GET() {
  try {
    // Simulate database call
    const posts = await fetchPosts()
    return Response.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return Response.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
```

## 🔍 Query Parameters

```javascript
// app/api/products/route.js
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  
  const category = searchParams.get('category')
  const minPrice = searchParams.get('minPrice')
  const maxPrice = searchParams.get('maxPrice')
  const sort = searchParams.get('sort')
  
  let products = getAllProducts()
  
  // Filter by category
  if (category) {
    products = products.filter(p => p.category === category)
  }
  
  // Filter by price range
  if (minPrice) {
    products = products.filter(p => p.price >= parseFloat(minPrice))
  }
  if (maxPrice) {
    products = products.filter(p => p.price <= parseFloat(maxPrice))
  }
  
  // Sort
  if (sort === 'price-asc') {
    products.sort((a, b) => a.price - b.price)
  } else if (sort === 'price-desc') {
    products.sort((a, b) => b.price - a.price)
  }
  
  return Response.json(products)
}
```

URL: `/api/products?category=electronics&minPrice=1000&maxPrice=5000&sort=price-asc`

## 📤 File Upload

```javascript
// app/api/upload/route.js
export async function POST(request) {
  const formData = await request.formData()
  const file = formData.get('file')
  
  if (!file) {
    return Response.json(
      { error: 'No file uploaded' },
      { status: 400 }
    )
  }
  
  // Process file
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  
  // Save file or upload to cloud storage
  // ...
  
  return Response.json({
    message: 'File uploaded successfully',
    filename: file.name,
    size: file.size
  })
}
```

## 💾 Mock Database

```javascript
// lib/db.js - Simple in-memory database
let data = {
  users: [
    { id: 1, name: 'สมชาย', email: 'somchai@example.com' }
  ],
  posts: [
    { id: 1, userId: 1, title: 'บทความแรก', content: '...' }
  ]
}

export const db = {
  users: {
    getAll: () => data.users,
    getById: (id) => data.users.find(u => u.id === id),
    create: (user) => {
      const newUser = { id: data.users.length + 1, ...user }
      data.users.push(newUser)
      return newUser
    },
    update: (id, updates) => {
      const index = data.users.findIndex(u => u.id === id)
      if (index === -1) return null
      data.users[index] = { ...data.users[index], ...updates }
      return data.users[index]
    },
    delete: (id) => {
      const index = data.users.findIndex(u => u.id === id)
      if (index === -1) return false
      data.users.splice(index, 1)
      return true
    }
  },
  posts: {
    // Similar CRUD operations
  }
}
```

### ใช้งาน Mock DB

```javascript
// app/api/users/route.js
import { db } from '@/lib/db'

export async function GET() {
  const users = db.users.getAll()
  return Response.json(users)
}

export async function POST(request) {
  const body = await request.json()
  const newUser = db.users.create(body)
  return Response.json(newUser, { status: 201 })
}
```

## 🔄 Middleware Pattern

```javascript
// lib/middleware.js
export function withAuth(handler) {
  return async (request, context) => {
    const token = request.headers.get('authorization')
    
    if (!token) {
      return Response.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    // Verify token
    // ...
    
    return handler(request, context)
  }
}

// Usage
// app/api/protected/route.js
import { withAuth } from '@/lib/middleware'

async function handler(request) {
  return Response.json({ message: 'Protected data' })
}

export const GET = withAuth(handler)
```

## ✅ สรุป

ในบทนี้เราได้เรียนรู้:
- ✅ สร้าง API Routes
- ✅ HTTP Methods (GET, POST, PUT, DELETE)
- ✅ Query Parameters
- ✅ Dynamic Routes
- ✅ Error Handling
- ✅ Mock Database

## 🔗 Lab

ไปทำ Lab: [สร้าง REST API](../../labs/06-rest-api/README.md)

## 📝 แบบฝึกหัด

1. สร้าง API สำหรับจัดการ Products (CRUD)
2. เพิ่ม Validation สำหรับ POST/PUT
3. เพิ่ม Pagination สำหรับ GET
4. สร้าง API สำหรับ Search
5. เพิ่ม Rate Limiting

## 🎯 เป้าหมายต่อไป

ในบทถัดไป เราจะเรียนรู้เรื่อง **State Management** กันต่อ!

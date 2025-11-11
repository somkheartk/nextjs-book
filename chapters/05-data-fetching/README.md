# บทที่ 5: Data Fetching

## 🎯 สิ่งที่จะได้เรียนรู้

- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Client-Side Rendering (CSR)
- การใช้งาน fetch API

## 📊 รูปแบบการ Render

Next.js มี 4 รูปแบบหลักในการ fetch ข้อมูล:

| รูปแบบ | เวลา Render | ข้อดี | ข้อเสีย |
|--------|------------|-------|---------|
| SSR | ทุกครั้งที่ request | ข้อมูลใหม่ทุกครั้ง | ช้ากว่า SSG |
| SSG | Build time | เร็วมาก | ข้อมูลไม่ real-time |
| ISR | Build + revalidate | เร็ว + ข้อมูลใหม่ | Complex |
| CSR | Client-side | Interactive | SEO ไม่ดี |

## 🖥️ Server-Side Rendering (SSR)

Render หน้าเว็บทุกครั้งที่มี request ใหม่

### ใช้งาน SSR

```javascript
// app/posts/page.js
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    cache: 'no-store' // ไม่ cache
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  
  return res.json()
}

export default async function PostsPage() {
  const posts = await getPosts()
  
  return (
    <div>
      <h1>บทความทั้งหมด</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts.map(post => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
```

### เมื่อใช้ SSR
- ✅ ข้อมูลต้องเป็น real-time
- ✅ ข้อมูลแตกต่างกันในแต่ละ user
- ✅ ต้องการ SEO

## 📄 Static Site Generation (SSG)

Generate หน้าเว็บตอน build time

### ใช้งาน SSG

```javascript
// app/blog/page.js
async function getBlogPosts() {
  const res = await fetch('https://api.example.com/posts', {
    cache: 'force-cache' // cache ตลอดไป
  })
  
  return res.json()
}

export default async function BlogPage() {
  const posts = await getBlogPosts()
  
  return (
    <div>
      <h1>Blog</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  )
}
```

### เมื่อใช้ SSG
- ✅ ข้อมูลไม่เปลี่ยนบ่อย
- ✅ ต้องการ Performance สูง
- ✅ เนื้อหาเหมือนกันทุก user

## 🔄 Incremental Static Regeneration (ISR)

Generate หน้าเว็บตอน build time แต่ revalidate ทุกๆ X วินาที

### ใช้งาน ISR

```javascript
// app/products/page.js
async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 60 } // revalidate ทุก 60 วินาที
  })
  
  return res.json()
}

export default async function ProductsPage() {
  const products = await getProducts()
  
  return (
    <div>
      <h1>สินค้าทั้งหมด</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>฿{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```

### เมื่อใช้ ISR
- ✅ ข้อมูลเปลี่ยนบ้าง แต่ไม่บ่อย
- ✅ ต้องการทั้ง Performance และความใหม่
- ✅ มีข้อมูลเยอะมาก

## 💻 Client-Side Rendering (CSR)

Fetch ข้อมูลฝั่ง Client หลังจาก component mount

### ใช้งาน CSR

```javascript
// components/Comments.js
'use client'

import { useState, useEffect } from 'react'

export default function Comments({ postId }) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.example.com/posts/${postId}/comments`)
      .then(res => res.json())
      .then(data => {
        setComments(data)
        setLoading(false)
      })
  }, [postId])

  if (loading) return <div>กำลังโหลด...</div>

  return (
    <div>
      <h3>ความคิดเห็น ({comments.length})</h3>
      {comments.map(comment => (
        <div key={comment.id}>
          <p><strong>{comment.author}</strong></p>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  )
}
```

### เมื่อใช้ CSR
- ✅ ข้อมูลเฉพาะ user
- ✅ ข้อมูลต้อง interactive
- ✅ ไม่สำคัญกับ SEO

## 🎯 Dynamic Routes with Data

### Generate Static Params

```javascript
// app/blog/[slug]/page.js

// บอก Next.js ว่ามี slug อะไรบ้าง
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json())
  
  return posts.map(post => ({
    slug: post.slug
  }))
}

// Fetch ข้อมูลสำหรับแต่ละ slug
async function getPost(slug) {
  const res = await fetch(`https://api.example.com/posts/${slug}`)
  return res.json()
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug)
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
```

## 🔍 Error Handling

### Try-Catch

```javascript
async function getData() {
  try {
    const res = await fetch('https://api.example.com/data')
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    
    return res.json()
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

export default async function Page() {
  const data = await getData()
  
  if (data.length === 0) {
    return <div>ไม่พบข้อมูล</div>
  }
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
```

### Error Boundary

```javascript
// app/posts/error.js
'use client'

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>เกิดข้อผิดพลาด!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>
        ลองอีกครั้ง
      </button>
    </div>
  )
}
```

## ⏳ Loading States

### loading.js

```javascript
// app/posts/loading.js
export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
    </div>
  )
}
```

### Suspense

```javascript
import { Suspense } from 'react'

async function Posts() {
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json())
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>{post.title}</article>
      ))}
    </div>
  )
}

export default function Page() {
  return (
    <div>
      <h1>Blog</h1>
      <Suspense fallback={<div>กำลังโหลดบทความ...</div>}>
        <Posts />
      </Suspense>
    </div>
  )
}
```

## 🔄 Parallel Data Fetching

```javascript
async function getUser(id) {
  const res = await fetch(`https://api.example.com/users/${id}`)
  return res.json()
}

async function getPosts(userId) {
  const res = await fetch(`https://api.example.com/users/${userId}/posts`)
  return res.json()
}

export default async function UserProfile({ params }) {
  // Fetch แบบ parallel
  const [user, posts] = await Promise.all([
    getUser(params.id),
    getPosts(params.id)
  ])
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      
      <h2>บทความ</h2>
      {posts.map(post => (
        <article key={post.id}>
          <h3>{post.title}</h3>
        </article>
      ))}
    </div>
  )
}
```

## 🎨 ตัวอย่างจริง

### Product List with Filters

```javascript
// app/products/page.js
async function getProducts(searchParams) {
  const { category, sort } = searchParams
  
  let url = 'https://api.example.com/products'
  const params = new URLSearchParams()
  
  if (category) params.append('category', category)
  if (sort) params.append('sort', sort)
  
  const res = await fetch(`${url}?${params}`, {
    next: { revalidate: 300 } // ISR: 5 นาที
  })
  
  return res.json()
}

export default async function ProductsPage({ searchParams }) {
  const products = await getProducts(searchParams)
  
  return (
    <div>
      <h1>สินค้าทั้งหมด</h1>
      
      <div className="filters">
        <a href="?category=electronics">Electronics</a>
        <a href="?category=clothing">Clothing</a>
        <a href="?sort=price">เรียงตามราคา</a>
      </div>
      
      <div className="grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
```

## ✅ สรุป

ในบทนี้เราได้เรียนรู้:
- ✅ SSR, SSG, ISR, และ CSR
- ✅ การเลือกใช้แต่ละแบบให้เหมาะสม
- ✅ Error Handling และ Loading States
- ✅ Parallel Data Fetching
- ✅ Dynamic Routes with Data

## 🔗 Lab

ไปทำ Lab: [ดึงข้อมูลจาก API](../../labs/05-api-data/README.md)

## 📝 แบบฝึกหัด

1. สร้างหน้า Posts ด้วย SSR
2. สร้างหน้า About ด้วย SSG
3. สร้างหน้า Products ด้วย ISR (revalidate 60s)
4. สร้าง Comments component ด้วย CSR
5. เพิ่ม Error Handling และ Loading States

## 🎯 เป้าหมายต่อไป

ในบทถัดไป เราจะเรียนรู้เรื่อง **API Routes** กันต่อ!

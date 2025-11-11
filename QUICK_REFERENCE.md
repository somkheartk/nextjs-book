# Quick Reference - Next.js

คู่มือสรุปคำสั่งและแนวคิดสำคัญใน Next.js

## 📦 การติดตั้ง

```bash
# สร้างโปรเจคใหม่
npx create-next-app@latest my-app

# เข้าสู่โปรเจค
cd my-app

# รัน development
npm run dev

# Build production
npm run build

# รัน production
npm start
```

## 📁 โครงสร้างโปรเจค

```
my-app/
├── app/                    # App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # หน้าแรก
│   ├── about/
│   │   └── page.js        # /about
│   └── api/
│       └── route.js       # API route
├── components/            # React components
├── public/               # Static files
├── styles/               # CSS files
└── package.json
```

## 🗺️ Routing

```javascript
// app/page.js → /
// app/about/page.js → /about
// app/blog/[slug]/page.js → /blog/:slug
// app/shop/[...slug]/page.js → /shop/* (catch-all)
```

## 🔗 Navigation

```javascript
import Link from 'next/link'

<Link href="/about">เกี่ยวกับ</Link>

// Programmatic navigation
import { useRouter } from 'next/navigation'
const router = useRouter()
router.push('/about')
```

## 🧩 Components

```javascript
// Server Component (default)
export default function ServerComp() {
  return <div>Server Component</div>
}

// Client Component
'use client'
import { useState } from 'react'

export default function ClientComp() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

## 📊 Data Fetching

```javascript
// SSR - Server-Side Rendering
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'no-store'
  })
  return res.json()
}

// SSG - Static Site Generation
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'force-cache'
  })
  return res.json()
}

// ISR - Incremental Static Regeneration
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    next: { revalidate: 60 }
  })
  return res.json()
}

// CSR - Client-Side Rendering
'use client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData)
  }, [])
}
```

## 🌐 API Routes

```javascript
// app/api/users/route.js

// GET
export async function GET(request) {
  return Response.json({ users: [] })
}

// POST
export async function POST(request) {
  const body = await request.json()
  return Response.json({ success: true })
}

// Dynamic route: app/api/users/[id]/route.js
export async function GET(request, { params }) {
  const id = params.id
  return Response.json({ user: { id } })
}
```

## 🎨 Styling

```javascript
// Tailwind CSS
<div className="bg-blue-500 text-white p-4">Hello</div>

// CSS Modules
import styles from './Button.module.css'
<button className={styles.button}>Click</button>

// Global CSS (app/globals.css)
// Import in app/layout.js
import './globals.css'
```

## 🖼️ Images

```javascript
import Image from 'next/image'

// Local image
<Image src="/logo.png" alt="Logo" width={200} height={100} />

// Remote image (config required)
<Image 
  src="https://example.com/image.jpg" 
  alt="Image"
  width={500} 
  height={300}
/>

// Responsive
<Image 
  src="/hero.jpg" 
  alt="Hero"
  fill
  style={{ objectFit: 'cover' }}
/>
```

## 📝 Metadata

```javascript
// Static metadata
export const metadata = {
  title: 'หน้าแรก',
  description: 'คำอธิบาย',
}

// Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: `Post ${params.id}`,
  }
}
```

## 🔐 Environment Variables

```bash
# .env.local
DATABASE_URL=...
JWT_SECRET=...
NEXT_PUBLIC_API_URL=http://localhost:3000
```

```javascript
// Server-side only
const dbUrl = process.env.DATABASE_URL

// Client-side (NEXT_PUBLIC_ prefix required)
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

## 🎯 Useful Hooks

```javascript
'use client'

// Routing
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
const router = useRouter()
const pathname = usePathname()
const searchParams = useSearchParams()

// State
import { useState, useEffect } from 'react'
const [state, setState] = useState(initialValue)

useEffect(() => {
  // Side effects
  return () => {
    // Cleanup
  }
}, [dependencies])
```

## 🚀 Deployment

```bash
# Vercel (recommended)
npm install -g vercel
vercel
vercel --prod

# Build locally
npm run build
npm start
```

## ⚡ Performance Tips

```javascript
// 1. Use Next.js Image
import Image from 'next/image'

// 2. Dynamic imports
import dynamic from 'next/dynamic'
const Heavy = dynamic(() => import('./Heavy'), { ssr: false })

// 3. Font optimization
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// 4. Caching
fetch(url, { next: { revalidate: 3600 } })
```

## 🔍 Common Patterns

```javascript
// Loading state
export default function Loading() {
  return <div>Loading...</div>
}

// Error boundary
'use client'
export default function Error({ error, reset }) {
  return (
    <div>
      <p>Error: {error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  )
}

// Not found
export default function NotFound() {
  return <div>404 - Page Not Found</div>
}
```

## 📚 เอกสารเพิ่มเติม

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Vercel Docs](https://vercel.com/docs)

---

**Keep this handy! 📖**

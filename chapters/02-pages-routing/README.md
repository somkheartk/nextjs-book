# บทที่ 2: Pages และ Routing

## 🎯 สิ่งที่จะได้เรียนรู้

- File-based Routing ใน Next.js
- การสร้าง Pages และ Layouts
- Dynamic Routes
- Link Component และ Navigation
- Route Groups และ Nested Routes

## 📁 File-based Routing

Next.js ใช้ระบบ File-based Routing คือการสร้าง Route โดยอิงจากโครงสร้างไฟล์ใน `app` directory

### โครงสร้างพื้นฐาน

```
app/
├── page.js              → / (หน้าแรก)
├── about/
│   └── page.js         → /about
├── blog/
│   ├── page.js         → /blog
│   └── [slug]/
│       └── page.js     → /blog/:slug
└── dashboard/
    ├── page.js         → /dashboard
    └── settings/
        └── page.js     → /dashboard/settings
```

## 🏗️ สร้าง Pages

### หน้าแรก (app/page.js)

```javascript
export default function Home() {
  return (
    <div>
      <h1>หน้าแรก</h1>
      <p>ยินดีต้อนรับสู่เว็บไซต์</p>
    </div>
  )
}
```

### หน้า About (app/about/page.js)

```javascript
export default function About() {
  return (
    <div>
      <h1>เกี่ยวกับเรา</h1>
      <p>เราคือบริษัทที่...</p>
    </div>
  )
}
```

### หน้า Blog (app/blog/page.js)

```javascript
export default function Blog() {
  const posts = [
    { id: 1, title: 'บทความที่ 1' },
    { id: 2, title: 'บทความที่ 2' },
    { id: 3, title: 'บทความที่ 3' }
  ]

  return (
    <div>
      <h1>บล็อก</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
```

## 🔗 Link Component

ใช้ `Link` component สำหรับการนำทางภายในเว็บ (จะ prefetch และรวดเร็วกว่า `<a>` tag)

```javascript
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <Link href="/">หน้าแรก</Link>
      <Link href="/about">เกี่ยวกับเรา</Link>
      <Link href="/blog">บล็อก</Link>
      <Link href="/contact">ติดต่อเรา</Link>
    </nav>
  )
}
```

### Style สำหรับ Active Link

```javascript
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav>
      <Link 
        href="/" 
        className={pathname === '/' ? 'active' : ''}
      >
        หน้าแรก
      </Link>
      <Link 
        href="/about"
        className={pathname === '/about' ? 'active' : ''}
      >
        เกี่ยวกับเรา
      </Link>
    </nav>
  )
}
```

## 🎯 Dynamic Routes

Dynamic Routes ใช้สำหรับสร้างหน้าที่มี URL แบบไดนามิก เช่น `/blog/post-1`, `/blog/post-2`

### สร้าง Dynamic Route (app/blog/[slug]/page.js)

```javascript
export default function BlogPost({ params }) {
  return (
    <div>
      <h1>บทความ: {params.slug}</h1>
      <p>เนื้อหาของบทความ...</p>
    </div>
  )
}
```

URL ที่ได้:
- `/blog/hello-world` → params.slug = "hello-world"
- `/blog/nextjs-tutorial` → params.slug = "nextjs-tutorial"

### Dynamic Route หลายระดับ

```
app/
└── shop/
    └── [category]/
        └── [product]/
            └── page.js
```

```javascript
// app/shop/[category]/[product]/page.js
export default function Product({ params }) {
  return (
    <div>
      <h1>หมวด: {params.category}</h1>
      <h2>สินค้า: {params.product}</h2>
    </div>
  )
}
```

URL: `/shop/electronics/laptop` → 
- params.category = "electronics"
- params.product = "laptop"

### Catch-all Routes

ใช้ `[...slug]` สำหรับจับทุก path ที่เหลือ

```javascript
// app/docs/[...slug]/page.js
export default function Docs({ params }) {
  // /docs/a/b/c → params.slug = ['a', 'b', 'c']
  return (
    <div>
      <h1>Documentation</h1>
      <p>Path: {params.slug.join('/')}</p>
    </div>
  )
}
```

## 📐 Layouts

Layout เป็นส่วนที่แชร์ระหว่างหลายหน้า เช่น Navbar, Footer

### Root Layout (app/layout.js)

```javascript
export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <header>
          <nav>
            <Link href="/">หน้าแรก</Link>
            <Link href="/about">เกี่ยวกับ</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 My Website</p>
        </footer>
      </body>
    </html>
  )
}
```

### Nested Layout (app/blog/layout.js)

```javascript
export default function BlogLayout({ children }) {
  return (
    <div className="blog-container">
      <aside>
        <h3>หมวดหมู่</h3>
        <ul>
          <li>Technology</li>
          <li>Lifestyle</li>
          <li>Travel</li>
        </ul>
      </aside>
      <div className="blog-content">
        {children}
      </div>
    </div>
  )
}
```

## 🚀 Navigation (useRouter)

ใช้ `useRouter` สำหรับการนำทางแบบ Programmatic

```javascript
'use client'

import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Login logic...
    router.push('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">เข้าสู่ระบบ</button>
    </form>
  )
}
```

### Router Methods

```javascript
'use client'

import { useRouter } from 'next/navigation'

export default function NavigationExample() {
  const router = useRouter()

  return (
    <div>
      {/* ไปหน้าใหม่ */}
      <button onClick={() => router.push('/about')}>
        Go to About
      </button>

      {/* แทนที่ history */}
      <button onClick={() => router.replace('/login')}>
        Replace with Login
      </button>

      {/* กลับหน้าก่อนหน้า */}
      <button onClick={() => router.back()}>
        Go Back
      </button>

      {/* ไปหน้าถัดไป */}
      <button onClick={() => router.forward()}>
        Go Forward
      </button>

      {/* Refresh */}
      <button onClick={() => router.refresh()}>
        Refresh
      </button>
    </div>
  )
}
```

## 📊 Metadata

กำหนด Title และ Meta tags สำหรับแต่ละหน้า

### Static Metadata

```javascript
// app/about/page.js
export const metadata = {
  title: 'เกี่ยวกับเรา',
  description: 'ข้อมูลเกี่ยวกับบริษัทของเรา',
}

export default function About() {
  return <h1>เกี่ยวกับเรา</h1>
}
```

### Dynamic Metadata

```javascript
// app/blog/[slug]/page.js
export async function generateMetadata({ params }) {
  return {
    title: `บทความ: ${params.slug}`,
    description: `อ่านบทความเรื่อง ${params.slug}`,
  }
}

export default function BlogPost({ params }) {
  return <h1>บทความ: {params.slug}</h1>
}
```

## 🎨 Route Groups

ใช้ `(folder)` สำหรับจัดกลุ่ม Routes โดยไม่เพิ่ม path

```
app/
├── (marketing)/
│   ├── about/
│   │   └── page.js     → /about
│   └── contact/
│       └── page.js     → /contact
└── (shop)/
    ├── products/
    │   └── page.js     → /products
    └── cart/
        └── page.js     → /cart
```

## ✅ สรุป

ในบทนี้เราได้เรียนรู้:
- ✅ File-based Routing และการสร้าง Pages
- ✅ Link Component สำหรับ Navigation
- ✅ Dynamic Routes และ Catch-all Routes
- ✅ Layouts และ Nested Layouts
- ✅ useRouter สำหรับ Programmatic Navigation
- ✅ Metadata สำหรับ SEO

## 🔗 Lab

ไปทำ Lab: [สร้างระบบ Navigation พื้นฐาน](../../labs/02-navigation/README.md)

## 📝 แบบฝึกหัด

1. สร้างหน้า Contact (/contact)
2. สร้างหน้า Products พร้อม Dynamic Route (/products/[id])
3. สร้าง Navigation Bar พร้อม Active Link
4. เพิ่ม Layout สำหรับหน้า Blog
5. ใช้ useRouter สร้างปุ่ม "กลับหน้าแรก"

## 🎯 เป้าหมายต่อไป

ในบทถัดไป เราจะเรียนรู้เรื่อง **Components และ Props** กันต่อ!

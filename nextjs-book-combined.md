# หนังสือสอนเขียน Front-end ด้วย Next.js

---

# หนังสือสอนเขียน Front-end ด้วย Next.js

## 📚 เกี่ยวกับหนังสือเล่มนี้

หนังสือเล่มนี้จะพาคุณเรียนรู้การพัฒนา Front-end ด้วย Next.js ตั้งแต่พื้นฐานจนสามารถนำไปใช้งานจริงได้ พร้อมตัวอย่างโค้ดและแบบฝึกหัดในทุกบท

## 🎯 เหมาะสำหรับใคร

- ผู้ที่มีพื้นฐาน HTML, CSS และ JavaScript
- ผู้ที่เคยเขียน React มาบ้างแล้ว (ไม่จำเป็นต้องมาก)
- ผู้ที่ต้องการเรียนรู้การสร้าง Web Application ที่ทันสมัย
- ผู้ที่ต้องการพัฒนาเว็บที่มี SEO และ Performance ที่ดี



---

## 📖 สารบัญ

- [บทที่ 1: รู้จักกับ Next.js](#บทที่-1-รู้จักกับ-next.js)
- [บทที่ 2: Pages และ Routing](#บทที่-2-pages-และ-routing)
- [บทที่ 3: Components และ Props](#บทที่-3-components-และ-props)
- [บทที่ 4: Styling](#บทที่-4-styling)
- [บทที่ 5: Data Fetching](#บทที่-5-data-fetching)
- [บทที่ 6: API Routes](#บทที่-6-api-routes)
- [บทที่ 7: State Management](#บทที่-7-state-management)
- [บทที่ 8: Forms และ Validation](#บทที่-8-forms-และ-validation)
- [บทที่ 9: Authentication](#บทที่-9-authentication)
- [บทที่ 10: Deployment และ Production](#บทที่-10-deployment-และ-production)

---

# บทที่ 1: รู้จักกับ Next.js

## 🎯 สิ่งที่จะได้เรียนรู้

- Next.js คืออะไร และทำไมต้องใช้
- ความแตกต่างระหว่าง Next.js กับ React
- ติดตั้งและสร้างโปรเจค Next.js แรก
- ทำความเข้าใจโครงสร้างโปรเจค

## 📚 Next.js คืออะไร

Next.js คือ React Framework ที่ช่วยให้การพัฒนา Web Application ง่ายและรวดเร็วขึ้น โดยมีฟีเจอร์สำคัญที่ช่วยแก้ปัญหาต่างๆ ของ React แบบดั้งเดิม

### คุณสมบัติเด่นของ Next.js

1. **Server-Side Rendering (SSR)** - เรนเดอร์หน้าเว็บฝั่ง Server ทำให้ SEO ดีขึ้น
2. **Static Site Generation (SSG)** - สร้างหน้าเว็บแบบ Static สำหรับ Performance สูง
3. **File-based Routing** - ไม่ต้องตั้งค่า Route ด้วยตัวเอง
4. **API Routes** - สร้าง API ได้ใน Project เดียวกัน
5. **Image Optimization** - ปรับขนาดรูปภาพอัตโนมัติ
6. **TypeScript Support** - รองรับ TypeScript โดยไม่ต้องตั้งค่า
7. **Fast Refresh** - Hot reload ที่รวดเร็ว

## 🆚 Next.js vs React

| ฟีเจอร์ | React | Next.js |
|---------|-------|---------|
| Routing | ต้องใช้ React Router | File-based routing ในตัว |
| SSR | ต้องตั้งค่าเอง | มีในตัว |
| SEO | ยาก | ง่าย |
| Performance | ต้องปรับแต่งเอง | Optimized โดยอัตโนมัติ |
| API | ต้องสร้าง Backend แยก | API Routes ในตัว |
| Configuration | ต้องตั้งค่าเยอะ | Zero config |

## 💡 ทำไมต้องใช้ Next.js

### 1. SEO-Friendly
React แบบดั้งเดิมเป็น Client-Side Rendering ทำให้ Search Engine ไม่สามารถอ่านเนื้อหาได้ดี Next.js ใช้ SSR/SSG ทำให้ SEO ดีขึ้นมาก

### 2. Performance
- Image Optimization อัตโนมัติ
- Code Splitting
- Lazy Loading
- Prefetching

### 3. Developer Experience
- Fast Refresh
- TypeScript Support
- Built-in CSS Support
- API Routes

## 🚀 ติดตั้ง Next.js

### ข้อกำหนดเบื้องต้น

ต้องติดตั้ง Node.js เวอร์ชัน 18.17 ขึ้นไป

ตรวจสอบเวอร์ชัน:
```bash
node --version
npm --version
```

### สร้างโปรเจค Next.js

#### วิธีที่ 1: ใช้ create-next-app (แนะนำ)

```bash
npx create-next-app@latest my-nextjs-app
```

ตอบคำถาม:
- ✅ Would you like to use TypeScript? → No (หรือ Yes ถ้าต้องการ)
- ✅ Would you like to use ESLint? → Yes
- ✅ Would you like to use Tailwind CSS? → Yes (แนะนำ)
- ✅ Would you like to use `src/` directory? → No
- ✅ Would you like to use App Router? → Yes (แนะนำ)
- ✅ Would you like to customize the default import alias? → No

#### วิธีที่ 2: ติดตั้งด้วยตัวเอง

```bash
mkdir my-nextjs-app
cd my-nextjs-app
npm init -y
npm install next@latest react@latest react-dom@latest
```

แก้ไข `package.json`:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## 📁 โครงสร้างโปรเจค

```
my-nextjs-app/
├── app/                    # App Router (Next.js 13+)
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── public/                # Static files
│   ├── images/
│   └── favicon.ico
├── node_modules/          # Dependencies
├── .gitignore
├── next.config.js         # Next.js configuration
├── package.json
└── README.md
```

### ไฟล์สำคัญ

#### `app/page.js` - หน้าแรก
```javascript
export default function Home() {
  return (
    <main>
      <h1>Welcome to Next.js!</h1>
    </main>
  )
}
```

#### `app/layout.js` - Layout หลัก
```javascript
export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
```

#### `next.config.js` - การตั้งค่า
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
```

## 🏃 รันโปรเจค

```bash
cd my-nextjs-app
npm run dev
```

เปิดเบราว์เซอร์ที่ http://localhost:3000

คำสั่งอื่นๆ:
- `npm run build` - Build สำหรับ Production
- `npm start` - รัน Production build
- `npm run lint` - ตรวจสอบโค้ด

## 🎨 แก้ไขหน้าแรก

เปิดไฟล์ `app/page.js` และแก้ไข:

```javascript
export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>สวัสดี Next.js! 🎉</h1>
      <p>นี่คือหน้าแรกของฉัน</p>
      <button onClick={() => alert('Hello!')}>
        คลิกที่นี่
      </button>
    </main>
  )
}
```

บันทึกไฟล์และดูการเปลี่ยนแปลงทันทีในเบราว์เซอร์ (Fast Refresh)

## ✅ สรุป

ในบทนี้เราได้เรียนรู้:
- ✅ Next.js คืออะไรและทำไมต้องใช้
- ✅ ความแตกต่างระหว่าง Next.js กับ React
- ✅ วิธีติดตั้งและสร้างโปรเจค Next.js
- ✅ โครงสร้างโปรเจคและไฟล์สำคัญ
- ✅ วิธีรันและแก้ไขโปรเจค

## 🔗 Lab

ไปทำ Lab: [สร้างโปรเจค Next.js แรก](../../labs/01-first-nextjs/README.md)

## 📝 แบบฝึกหัด

1. สร้างโปรเจค Next.js ใหม่ด้วย `create-next-app`
2. แก้ไขหน้าแรกให้แสดงชื่อของคุณ
3. เพิ่มรูปภาพลงใน public folder และแสดงในหน้าแรก
4. ลองเปลี่ยน title ของเว็บใน `app/layout.js`

## 🎯 เป้าหมายต่อไป

ในบทถัดไป เราจะเรียนรู้เรื่อง **Pages และ Routing** ซึ่งเป็นหัวใจสำคัญของ Next.js!


---

\newpage

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


---

\newpage

# บทที่ 3: Components และ Props

## 🎯 สิ่งที่จะได้เรียนรู้

- React Components ใน Next.js
- Props และการส่งข้อมูล
- Component Composition
- การสร้าง Reusable Components
- Client Components vs Server Components

## 🧩 React Components

Component คือส่วนประกอบของ UI ที่สามารถนำกลับมาใช้ซ้ำได้

### Function Component

```javascript
// components/Button.js
export default function Button() {
  return (
    <button className="btn">
      คลิกที่นี่
    </button>
  )
}
```

### ใช้งาน Component

```javascript
// app/page.js
import Button from '@/components/Button'

export default function Home() {
  return (
    <div>
      <h1>หน้าแรก</h1>
      <Button />
    </div>
  )
}
```

## 📦 Props

Props (Properties) คือข้อมูลที่ส่งให้ Component

### ส่ง Props

```javascript
// components/Button.js
export default function Button({ text, color, onClick }) {
  return (
    <button 
      className={`btn btn-${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
```

### ใช้งาน Props

```javascript
// app/page.js
import Button from '@/components/Button'

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <div>
      <Button text="บันทึก" color="primary" onClick={handleClick} />
      <Button text="ยกเลิก" color="secondary" onClick={handleClick} />
    </div>
  )
}
```

### Default Props

```javascript
export default function Button({ 
  text = "คลิก", 
  color = "primary",
  size = "medium"
}) {
  return (
    <button className={`btn btn-${color} btn-${size}`}>
      {text}
    </button>
  )
}
```

### Props Destructuring

```javascript
// แบบที่ 1: Destructure ใน parameter
export default function Card({ title, content, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

// แบบที่ 2: Destructure ภายใน function
export default function Card(props) {
  const { title, content, image } = props
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}
```

## 👶 Children Props

Children props ใช้สำหรับส่ง content ที่อยู่ระหว่าง tag

```javascript
// components/Container.js
export default function Container({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  )
}

// app/page.js
import Container from '@/components/Container'

export default function Home() {
  return (
    <Container>
      <h1>สวัสดี</h1>
      <p>นี่คือเนื้อหาภายใน Container</p>
    </Container>
  )
}
```

## 🎨 Component Composition

การประกอบ Components เข้าด้วยกัน

### Card Component

```javascript
// components/Card.js
export default function Card({ children, title, footer }) {
  return (
    <div className="card">
      {title && (
        <div className="card-header">
          <h3>{title}</h3>
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  )
}
```

### ใช้งาน

```javascript
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function Home() {
  return (
    <Card 
      title="ยินดีต้อนรับ"
      footer={<Button text="อ่านเพิ่มเติม" />}
    >
      <p>นี่คือเนื้อหาของการ์ด</p>
    </Card>
  )
}
```

## 🔄 Reusable Components

### Product Card Component

```javascript
// components/ProductCard.js
import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ 
  id,
  name, 
  price, 
  image,
  description 
}) {
  return (
    <div className="product-card">
      <Image 
        src={image} 
        alt={name}
        width={300}
        height={200}
      />
      <h3>{name}</h3>
      <p className="description">{description}</p>
      <div className="price">฿{price.toLocaleString()}</div>
      <Link href={`/products/${id}`}>
        <button>ดูรายละเอียด</button>
      </Link>
    </div>
  )
}
```

### Product List Component

```javascript
// components/ProductList.js
import ProductCard from './ProductCard'

export default function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
```

### ใช้งาน

```javascript
// app/products/page.js
import ProductList from '@/components/ProductList'

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 35000,
      image: '/images/laptop.jpg',
      description: 'Laptop สเปคสูง'
    },
    {
      id: 2,
      name: 'Mouse',
      price: 500,
      image: '/images/mouse.jpg',
      description: 'Mouse ไร้สาย'
    }
  ]

  return (
    <div>
      <h1>สินค้าทั้งหมด</h1>
      <ProductList products={products} />
    </div>
  )
}
```

## 🖥️ Server Components vs Client Components

Next.js 13+ ใช้ React Server Components เป็นค่าเริ่มต้น

### Server Component (ค่าเริ่มต้น)

```javascript
// components/ServerComponent.js
export default function ServerComponent() {
  // ทำงานฝั่ง Server
  // ไม่สามารถใช้ useState, useEffect, onClick ได้
  return <div>Server Component</div>
}
```

ข้อดี:
- ✅ ไฟล์ JavaScript เล็กลง
- ✅ เข้าถึง Database ได้โดยตรง
- ✅ ปลอดภัยกว่า (ซ่อน API keys)

### Client Component

ใช้ `'use client'` ที่บรรทัดแรก

```javascript
// components/ClientComponent.js
'use client'

import { useState } from 'react'

export default function ClientComponent() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        เพิ่ม
      </button>
    </div>
  )
}
```

ใช้เมื่อต้องการ:
- ✅ State (useState)
- ✅ Effects (useEffect)
- ✅ Event Handlers (onClick, onChange)
- ✅ Browser APIs

## 🎯 Component ตัวอย่าง

### Navigation Component

```javascript
// components/Navigation.js
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'หน้าแรก' },
    { href: '/about', label: 'เกี่ยวกับ' },
    { href: '/products', label: 'สินค้า' },
    { href: '/contact', label: 'ติดต่อ' }
  ]

  return (
    <nav className="navbar">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? 'active' : ''}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
```

### Modal Component

```javascript
// components/Modal.js
'use client'

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}
```

### Loading Component

```javascript
// components/Loading.js
export default function Loading({ text = 'กำลังโหลด...' }) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  )
}
```

## ✅ สรุป

ในบทนี้เราได้เรียนรู้:
- ✅ การสร้าง React Components
- ✅ Props และการส่งข้อมูล
- ✅ Children Props
- ✅ Component Composition
- ✅ Reusable Components
- ✅ Server vs Client Components

## 🔗 Lab

ไปทำ Lab: [สร้าง Reusable Components](../../labs/03-reusable-components/README.md)

## 📝 แบบฝึกหัด

1. สร้าง Avatar Component ที่รับ image และ name
2. สร้าง Badge Component ที่มี color และ text
3. สร้าง Alert Component (success, warning, error)
4. สร้าง Pagination Component
5. สร้าง Breadcrumb Component

## 🎯 เป้าหมายต่อไป

ในบทถัดไป เราจะเรียนรู้เรื่อง **Styling** กันต่อ!


---

\newpage

# บทที่ 4: Styling

## 🎯 สิ่งที่จะได้เรียนรู้

- CSS Modules
- Global Styles
- Tailwind CSS
- CSS-in-JS
- Image Optimization

## 🎨 วิธีการ Styling ใน Next.js

Next.js รองรับหลายวิธีในการเขียน CSS:

1. **CSS Modules** - Scoped CSS
2. **Global CSS** - CSS ทั้งหมด
3. **Tailwind CSS** - Utility-first framework
4. **CSS-in-JS** - Styled Components, Emotion

## 📦 CSS Modules

CSS Modules ทำให้ CSS เป็น local scope ป้องกัน class name ชนกัน

### สร้าง CSS Module

```css
/* components/Button.module.css */
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.primary {
  background-color: #0070f3;
  color: white;
}

.secondary {
  background-color: #6c757d;
  color: white;
}

.large {
  padding: 15px 30px;
  font-size: 18px;
}
```

### ใช้งาน CSS Module

```javascript
// components/Button.js
import styles from './Button.module.css'

export default function Button({ text, variant = 'primary', size }) {
  return (
    <button 
      className={`
        ${styles.button} 
        ${styles[variant]}
        ${size ? styles[size] : ''}
      `}
    >
      {text}
    </button>
  )
}
```

### Compose Classes

```javascript
import styles from './Card.module.css'

export default function Card({ featured, children }) {
  const cardClass = `${styles.card} ${featured ? styles.featured : ''}`
  
  return (
    <div className={cardClass}>
      {children}
    </div>
  )
}
```

## 🌐 Global Styles

### app/globals.css

```css
/* app/globals.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;
  line-height: 1.6;
  color: #333;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font-family: inherit;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

### Import Global CSS

```javascript
// app/layout.js
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
```

## 🎨 Tailwind CSS

Tailwind CSS เป็น utility-first framework ที่นิยมมากใน Next.js

### ติดตั้ง Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### ตั้งค่า tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### เพิ่ม Tailwind directives

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### ใช้งาน Tailwind

```javascript
// components/Card.js
export default function Card({ title, content, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {content}
        </p>
      </div>
    </div>
  )
}
```

### Button Component with Tailwind

```javascript
// components/Button.js
export default function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  onClick 
}) {
  const baseClasses = 'font-semibold rounded transition-colors'
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button 
      onClick={onClick}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
      `}
    >
      {children}
    </button>
  )
}
```

### Layout with Tailwind

```javascript
// app/layout.js
import Navigation from '@/components/Navigation'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="bg-gray-50 min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 My Website</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
```

## 🖼️ Image Optimization

Next.js มี Image component สำหรับปรับขนาดรูปอัตโนมัติ

### ใช้งาน Image Component

```javascript
import Image from 'next/image'

export default function Profile() {
  return (
    <div>
      <Image
        src="/images/profile.jpg"
        alt="Profile Picture"
        width={500}
        height={500}
        priority
      />
    </div>
  )
}
```

### Responsive Image

```javascript
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative w-full h-96">
      <Image
        src="/images/hero.jpg"
        alt="Hero Image"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
  )
}
```

### External Images

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['example.com', 'cdn.example.com'],
  },
}
```

```javascript
import Image from 'next/image'

export default function Avatar({ url, name }) {
  return (
    <Image
      src={url}
      alt={name}
      width={100}
      height={100}
      className="rounded-full"
    />
  )
}
```

## 🎭 Responsive Design

### Tailwind Breakpoints

```javascript
export default function ResponsiveCard() {
  return (
    <div className="
      w-full 
      sm:w-1/2 
      md:w-1/3 
      lg:w-1/4
      p-4
    ">
      <div className="
        bg-white 
        rounded-lg 
        shadow-md
        p-4
        sm:p-6
        md:p-8
      ">
        <h3 className="text-lg sm:text-xl md:text-2xl">
          Responsive Card
        </h3>
      </div>
    </div>
  )
}
```

### Grid Layout

```javascript
export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
```

## 🎨 Custom Styles

### Extend Tailwind Theme

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        'thai': ['Sarabun', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
}
```

### ใช้งาน Custom Theme

```javascript
export default function CustomButton() {
  return (
    <button className="
      bg-brand-500 
      hover:bg-brand-600 
      text-white 
      font-thai 
      px-6 
      py-3 
      rounded-lg
    ">
      ปุ่มแบบกำหนดเอง
    </button>
  )
}
```

## ✅ สรุป

ในบทนี้เราได้เรียนรู้:
- ✅ CSS Modules สำหรับ Scoped CSS
- ✅ Global Styles
- ✅ Tailwind CSS และการใช้งาน
- ✅ Image Optimization
- ✅ Responsive Design

## 🔗 Lab

ไปทำ Lab: [ออกแบบ UI ด้วย Tailwind CSS](../../labs/04-tailwind-ui/README.md)

## 📝 แบบฝึกหัด

1. สร้าง Card Component ด้วย CSS Modules
2. สร้าง Navigation Bar ด้วย Tailwind CSS
3. สร้าง Product Grid ที่ Responsive
4. เพิ่ม Custom Colors ใน Tailwind Config
5. ใช้ Image Component แสดงรูปภาพ

## 🎯 เป้าหมายต่อไป

ในบทถัดไป เราจะเรียนรู้เรื่อง **Data Fetching** กันต่อ!


---

\newpage

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


---

\newpage

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


---

\newpage

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


---

\newpage

# บทที่ 8: Forms และ Validation

## 🎯 สิ่งที่จะได้เรียนรู้

- Controlled Components
- Form Validation
- React Hook Form
- Form Handling Best Practices

## 📝 Controlled Components

Component ที่ควบคุม input ด้วย state

### Basic Form

```javascript
'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="ชื่อ"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="อีเมล"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="ข้อความ"
      />
      <button type="submit">ส่ง</button>
    </form>
  )
}
```

## ✅ Form Validation

### Manual Validation

```javascript
'use client'

import { useState } from 'react'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const [errors, setErrors] = useState({})
  
  const validate = () => {
    const newErrors = {}
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'กรุณากรอกอีเมล'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'รูปแบบอีเมลไม่ถูกต้อง'
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'กรุณากรอกรหัสผ่าน'
    } else if (formData.password.length < 8) {
      newErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร'
    }
    
    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'รหัสผ่านไม่ตรงกัน'
    }
    
    return newErrors
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    // Submit form
    console.log('Form is valid:', formData)
    setErrors({})
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="อีเมล"
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email}</p>
        )}
      </div>
      
      <div>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="รหัสผ่าน"
          className={errors.password ? 'border-red-500' : ''}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>
      
      <div>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="ยืนยันรหัสผ่าน"
          className={errors.confirmPassword ? 'border-red-500' : ''}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </div>
      
      <button type="submit">ลงทะเบียน</button>
    </form>
  )
}
```

## 🎯 React Hook Form

### ติดตั้ง

```bash
npm install react-hook-form
```

### Basic Usage

```javascript
'use client'

import { useForm } from 'react-hook-form'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('email', {
            required: 'กรุณากรอกอีเมล',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'รูปแบบอีเมลไม่ถูกต้อง'
            }
          })}
          placeholder="อีเมล"
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <input
          type="password"
          {...register('password', {
            required: 'กรุณากรอกรหัสผ่าน',
            minLength: {
              value: 8,
              message: 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร'
            }
          })}
          placeholder="รหัสผ่าน"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      
      <button type="submit">เข้าสู่ระบบ</button>
    </form>
  )
}
```

### Advanced Validation

```javascript
'use client'

import { useForm } from 'react-hook-form'

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm()
  
  const password = watch('password')
  
  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (res.ok) {
        alert('ลงทะเบียนสำเร็จ!')
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('username', {
            required: 'กรุณากรอกชื่อผู้ใช้',
            minLength: {
              value: 3,
              message: 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร'
            }
          })}
          placeholder="ชื่อผู้ใช้"
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>
      
      <div>
        <input
          {...register('email', {
            required: 'กรุณากรอกอีเมล',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'รูปแบบอีเมลไม่ถูกต้อง'
            }
          })}
          placeholder="อีเมล"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <input
          type="password"
          {...register('password', {
            required: 'กรุณากรอกรหัสผ่าน',
            minLength: {
              value: 8,
              message: 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร'
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
              message: 'รหัสผ่านต้องมีตัวพิมพ์เล็ก พิมพ์ใหญ่ และตัวเลข'
            }
          })}
          placeholder="รหัสผ่าน"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      
      <div>
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'กรุณายืนยันรหัสผ่าน',
            validate: value =>
              value === password || 'รหัสผ่านไม่ตรงกัน'
          })}
          placeholder="ยืนยันรหัสผ่าน"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded disabled:bg-gray-400"
      >
        {isSubmitting ? 'กำลังลงทะเบียน...' : 'ลงทะเบียน'}
      </button>
    </form>
  )
}
```

## 🎨 Form Components

### Input Component

```javascript
// components/Input.js
export default function Input({ 
  label, 
  error, 
  register, 
  ...props 
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        {...register}
        {...props}
        className={`
          w-full px-3 py-2 border rounded
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}

// Usage
<Input
  label="อีเมล"
  register={register('email', { required: true })}
  error={errors.email?.message}
  type="email"
  placeholder="your@email.com"
/>
```

### Select Component

```javascript
export default function Select({ 
  label, 
  options, 
  error, 
  register,
  ...props 
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <select
        {...register}
        {...props}
        className={`
          w-full px-3 py-2 border rounded
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
      >
        <option value="">เลือก...</option>
        {options.map(option => (
          <key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  )
}
```

## 📤 File Upload

```javascript
'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function FileUploadForm() {
  const { register, handleSubmit } = useForm()
  const [preview, setPreview] = useState(null)
  
  const onSubmit = async (data) => {
    const formData = new FormData()
    formData.append('file', data.file[0])
    
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
    
    const result = await res.json()
    console.log(result)
  }
  
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="file"
        {...register('file')}
        onChange={handleFileChange}
        accept="image/*"
      />
      
      {preview && (
        <img src={preview} alt="Preview" className="mt-4 w-64" />
      )}
      
      <button type="submit">อัปโหลด</button>
    </form>
  )
}
```

## ✅ สรุป

ในบทนี้เราได้เรียนรู้:
- ✅ Controlled Components
- ✅ Form Validation
- ✅ React Hook Form
- ✅ Form Components
- ✅ File Upload

## 🔗 Lab

ไปทำ Lab: [สร้างฟอร์มลงทะเบียน](../../labs/08-registration-form/README.md)

## 📝 แบบฝึกหัด

1. สร้างฟอร์ม Login
2. สร้างฟอร์มลงทะเบียนพร้อม Validation
3. สร้าง Contact Form
4. เพิ่ม File Upload
5. สร้าง Multi-step Form

## 🎯 เป้าหมายต่อไป

ในบทถัดไป เราจะเรียนรู้เรื่อง **Authentication**!


---

\newpage

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


---

\newpage

# บทที่ 10: Deployment และ Production

## 🎯 สิ่งที่จะได้เรียนรู้

- การ Build สำหรับ Production
- Environment Variables
- Deploy บน Vercel
- Deploy บน Netlify
- Performance Optimization
- Monitoring และ Analytics

## 🏗️ Build สำหรับ Production

### Build Commands

```bash
# Build โปรเจค
npm run build

# รัน Production server
npm start

# ดูขนาดไฟล์ Build
npm run build --analyze
```

### Build Output

```
.next/
├── cache/              # Build cache
├── server/            # Server-side code
├── static/            # Static assets
└── standalone/        # Standalone build (optional)
```

## 🔐 Environment Variables

### Local Development

สร้างไฟล์ `.env.local`:

```bash
# .env.local
DATABASE_URL=mongodb://localhost:27017/mydb
JWT_SECRET=your-super-secret-key
API_URL=http://localhost:3000/api
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### ใช้งาน Environment Variables

```javascript
// Server-side only
const dbUrl = process.env.DATABASE_URL
const jwtSecret = process.env.JWT_SECRET

// Client-side (ต้องมี NEXT_PUBLIC_ prefix)
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

### Environment Files

```
.env                # Default
.env.local         # Local override (ไม่ควร commit)
.env.development   # Development
.env.production    # Production
```

## 🚀 Deploy บน Vercel

Vercel เป็น Platform ที่สร้างโดย Next.js team (แนะนำที่สุด)

### วิธีที่ 1: Deploy ผ่าน GitHub

1. Push โค้ดขึ้น GitHub
2. ไปที่ [vercel.com](https://vercel.com)
3. Sign up / Login
4. คลิก "New Project"
5. Import GitHub repository
6. กด "Deploy"

เสร็จแล้ว! 🎉

### วิธีที่ 2: Deploy ผ่าน CLI

```bash
# ติดตั้ง Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy เป็น Production
vercel --prod
```

### ตั้งค่า Environment Variables บน Vercel

1. ไปที่ Project Settings
2. เลือก Environment Variables
3. เพิ่มตัวแปร:
   - Name: `DATABASE_URL`
   - Value: `your-database-url`
   - Environment: Production

### Custom Domain

1. ไปที่ Project Settings → Domains
2. เพิ่ม Domain ของคุณ
3. ตั้งค่า DNS ตามที่แสดง
4. รอ SSL Certificate (อัตโนมัติ)

## 🌐 Deploy บน Netlify

### Deploy ผ่าน GitHub

1. ไปที่ [netlify.com](https://netlify.com)
2. คลิก "Add new site" → "Import an existing project"
3. เลือก GitHub repository
4. ตั้งค่า Build:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. คลิก "Deploy"

### netlify.toml

สร้างไฟล์ `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## 🐳 Deploy ด้วย Docker

### Dockerfile

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  nextjs:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=mongodb://mongo:27017/mydb
    depends_on:
      - mongo

  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

### รัน Docker

```bash
# Build image
docker build -t my-nextjs-app .

# Run container
docker run -p 3000:3000 my-nextjs-app

# หรือใช้ docker-compose
docker-compose up
```

## ⚡ Performance Optimization

### 1. Image Optimization

```javascript
import Image from 'next/image'

// ใช้ Next.js Image component
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority // สำหรับรูปสำคัญ
  placeholder="blur" // Lazy loading with blur
/>
```

### 2. Font Optimization

```javascript
// app/layout.js
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

### 3. Code Splitting

```javascript
// Dynamic import
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/Heavy'), {
  loading: () => <p>Loading...</p>,
  ssr: false // ไม่ render ฝั่ง server
})

export default function Page() {
  return <DynamicComponent />
}
```

### 4. Caching

```javascript
// ISR - Incremental Static Regeneration
export const revalidate = 60 // revalidate ทุก 60 วินาที

// หรือใน fetch
fetch('https://api.example.com/data', {
  next: { revalidate: 3600 } // 1 ชั่วโมง
})
```

### 5. Bundle Analysis

```bash
# ติดตั้ง
npm install @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // your config
})

# รัน
ANALYZE=true npm run build
```

## 📊 Monitoring และ Analytics

### Google Analytics

```javascript
// app/layout.js
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  )
}
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```javascript
// app/layout.js
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🔒 Security Best Practices

### 1. Environment Variables

```bash
# ✅ ถูกต้อง - Server-side only
DATABASE_URL=...
JWT_SECRET=...

# ❌ ผิด - ไม่ควร expose ใน client
NEXT_PUBLIC_JWT_SECRET=...
```

### 2. CORS

```javascript
// app/api/data/route.js
export async function GET(request) {
  return Response.json(data, {
    headers: {
      'Access-Control-Allow-Origin': 'https://your-domain.com',
      'Access-Control-Allow-Methods': 'GET, POST',
    },
  })
}
```

### 3. Rate Limiting

```javascript
// middleware.js
import { NextResponse } from 'next/server'

const rateLimit = new Map()

export function middleware(request) {
  const ip = request.ip ?? '127.0.0.1'
  const limit = rateLimit.get(ip) ?? { count: 0, resetTime: Date.now() }

  if (Date.now() > limit.resetTime) {
    limit.count = 0
    limit.resetTime = Date.now() + 60000 // 1 minute
  }

  limit.count++

  if (limit.count > 100) {
    return new NextResponse('Too Many Requests', { status: 429 })
  }

  rateLimit.set(ip, limit)
  return NextResponse.next()
}
```

## ✅ Checklist ก่อน Deploy

- [ ] ลบ console.log ทั้งหมด
- [ ] ตั้งค่า Environment Variables
- [ ] เพิ่ม Error Handling
- [ ] ทดสอบบน Mobile
- [ ] ตรวจสอบ SEO (meta tags)
- [ ] เพิ่ม Loading states
- [ ] Optimize รูปภาพ
- [ ] ทดสอบ Build locally
- [ ] เพิ่ม Analytics
- [ ] Setup Monitoring

## 📱 PWA (Progressive Web App)

### ติดตั้ง next-pwa

```bash
npm install next-pwa
```

### ตั้งค่า

```javascript
// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // your config
})
```

### สร้าง manifest.json

```json
{
  "name": "My Next.js App",
  "short_name": "NextApp",
  "description": "My awesome Next.js application",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## ✅ สรุป

ในบทนี้เราได้เรียนรู้:
- ✅ การ Build และ Deploy
- ✅ Environment Variables
- ✅ Deploy บน Vercel, Netlify, Docker
- ✅ Performance Optimization
- ✅ Monitoring และ Analytics
- ✅ Security Best Practices

## 🎉 ยินดีด้วย!

คุณได้เรียนรู้ Next.js ครบทุกบทแล้ว! 

### 🚀 ขั้นตอนต่อไป

1. ฝึกทำโปรเจคจริง
2. อ่าน Next.js Documentation
3. เข้าร่วม Community
4. สร้าง Portfolio
5. แชร์ความรู้กับผู้อื่น

**Happy Coding! 💻✨**


---

\newpage

# 📚 แหล่งข้อมูลเพิ่มเติม

# อภิธานศัพท์ (Glossary)

คำศัพท์และคำจำกัดความที่ใช้ในหนังสือเล่มนี้

## A

**API (Application Programming Interface)**
- ส่วนติดต่อระหว่างโปรแกรม ใช้สำหรับส่งและรับข้อมูล

**API Routes**
- Endpoints สำหรับสร้าง API ใน Next.js โดยไม่ต้องตั้ง Backend แยก

**Authentication (การยืนยันตัวตน)**
- กระบวนการตรวจสอบว่าผู้ใช้เป็นใคร

**Authorization (การอนุญาต)**
- การกำหนดว่าผู้ใช้สามารถทำอะไรได้บ้าง

## C

**Client Component**
- Component ที่รันฝั่ง Browser สามารถใช้ State และ Event handlers ได้

**Client-Side Rendering (CSR)**
- การ Render หน้าเว็บฝั่ง Browser

**Component**
- ส่วนประกอบของ UI ที่สามารถนำกลับมาใช้ซ้ำได้

**Context API**
- วิธีการแชร์ State ระหว่าง Components โดยไม่ต้องส่ง Props

**CORS (Cross-Origin Resource Sharing)**
- กลไกความปลอดภัยที่ควบคุมการเข้าถึงข้อมูลจากต่าง Domain

**CSS Modules**
- วิธีการเขียน CSS ที่ทำให้ class name เป็น local scope

## D

**Deploy (การ Deploy)**
- กระบวนการนำเว็บไซต์ขึ้นไปบน Server เพื่อให้คนอื่นเข้าถึงได้

**Dynamic Routes**
- Route ที่มี parameter แบบไดนามิก เช่น /blog/[slug]

## E

**Environment Variables**
- ตัวแปรที่เก็บค่าคอนฟิกต่างๆ เช่น API keys

## F

**Fetch**
- ฟังก์ชันสำหรับดึงข้อมูลจาก API

**File-based Routing**
- ระบบ Routing ที่อิงจากโครงสร้างไฟล์

## H

**Hook**
- ฟังก์ชันพิเศษใน React ที่ขึ้นต้นด้วย `use` เช่น useState, useEffect

**Hot Reload / Fast Refresh**
- การอัปเดตหน้าเว็บทันทีเมื่อแก้ไขโค้ด โดยไม่ต้อง refresh

## I

**ISR (Incremental Static Regeneration)**
- การ Generate หน้าเว็บแบบ Static แต่สามารถ Update ได้ตามเวลาที่กำหนด

## J

**JWT (JSON Web Token)**
- รูปแบบ Token สำหรับ Authentication

## L

**Layout**
- ส่วนที่แชร์ระหว่างหลายหน้า เช่น Navbar, Footer

## M

**Metadata**
- ข้อมูลเกี่ยวกับหน้าเว็บ เช่น Title, Description สำหรับ SEO

**Middleware**
- โค้ดที่รันก่อนหรือหลังการประมวลผล Request

## N

**Nested Routes**
- Route ที่ซ้อนกัน เช่น /dashboard/settings

**Next.js**
- React Framework สำหรับสร้าง Web Application

## P

**Props (Properties)**
- ข้อมูลที่ส่งให้ Component

**PWA (Progressive Web App)**
- เว็บแอพที่ทำงานเหมือนแอพมือถือ

## R

**React**
- JavaScript Library สำหรับสร้าง UI

**Rendering**
- กระบวนการแสดงผล UI

**REST API**
- รูปแบบ API ที่ใช้ HTTP Methods (GET, POST, PUT, DELETE)

**Route**
- เส้นทาง URL ของเว็บไซต์

**Router**
- ระบบจัดการ Routes

## S

**SEO (Search Engine Optimization)**
- การปรับแต่งเว็บให้ติดอันดับการค้นหา

**Server Component**
- Component ที่รันฝั่ง Server (ค่าเริ่มต้นใน Next.js 13+)

**Server-Side Rendering (SSR)**
- การ Render หน้าเว็บฝั่ง Server

**State**
- ข้อมูลที่เปลี่ยนแปลงได้และส่งผลต่อ UI

**Static Site Generation (SSG)**
- การ Generate หน้าเว็บแบบ Static ตอน Build time

## T

**Tailwind CSS**
- CSS Framework แบบ Utility-first

**TypeScript**
- JavaScript ที่เพิ่ม Type system

## V

**Vercel**
- Platform สำหรับ Deploy Next.js (สร้างโดย Next.js team)

**Validation**
- การตรวจสอบความถูกต้องของข้อมูล

## W

**Webhook**
- การส่งข้อมูลอัตโนมัติเมื่อมีเหตุการณ์เกิดขึ้น

---

## คำศัพท์ภาษาไทย

**การแสดงผลฝั่งเซิร์ฟเวอร์** - Server-Side Rendering (SSR)

**การแสดงผลฝั่งไคลเอนต์** - Client-Side Rendering (CSR)

**การสร้างเว็บไซต์แบบคงที่** - Static Site Generation (SSG)

**คอมโพเนนต์** - Component (ส่วนประกอบ)

**สเตต** - State (สถานะ)

**พรอพส์** - Props (คุณสมบัติ)

**รูท** - Route (เส้นทาง)

**เลย์เอาต์** - Layout (โครงสร้างหน้าเว็บ)

**ดีพลอย** - Deploy (นำขึ้นเซิร์ฟเวอร์)

**บิลด์** - Build (สร้างเว็บไซต์)

---

💡 **หมายเหตุ:** ศัพท์เทคนิคส่วนใหญ่ในหนังสือเล่มนี้จะใช้ทั้งภาษาไทยและภาษาอังกฤษควบคู่กัน เพื่อให้เข้าใจง่ายและสามารถค้นหาข้อมูลเพิ่มเติมได้


---

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



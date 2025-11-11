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

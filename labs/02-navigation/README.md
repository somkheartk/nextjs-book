# Lab 2: สร้างระบบ Navigation พื้นฐาน

## 🎯 วัตถุประสงค์

- สร้างหน้าเว็บหลายหน้า
- ใช้ Link component สำหรับ Navigation
- สร้าง Navbar และ Footer
- ทำ Active Link highlighting

## 📋 ขั้นตอนการทำ Lab

### 1. สร้างโปรเจค

```bash
npx create-next-app@latest navigation-lab --no-git
cd navigation-lab
```

### 2. สร้าง Navbar Component

```bash
mkdir components
```

สร้างไฟล์ `components/Navbar.js`:

```javascript
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  
  const links = [
    { href: '/', label: 'หน้าแรก' },
    { href: '/about', label: 'เกี่ยวกับ' },
    { href: '/services', label: 'บริการ' },
    { href: '/portfolio', label: 'ผลงาน' },
    { href: '/contact', label: 'ติดต่อ' },
  ]
  
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            My Website
          </Link>
          
          <div className="flex space-x-4">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md transition-colors ${
                  pathname === link.href
                    ? 'bg-blue-700 font-semibold'
                    : 'hover:bg-blue-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
```

### 3. สร้าง Footer Component

สร้างไฟล์ `components/Footer.js`:

```javascript
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">เกี่ยวกับเรา</h3>
            <p className="text-gray-400">
              เราคือบริษัทที่มุ่งมั่นพัฒนาเว็บไซต์คุณภาพสูง
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white">หน้าแรก</a></li>
              <li><a href="/about" className="hover:text-white">เกี่ยวกับ</a></li>
              <li><a href="/services" className="hover:text-white">บริการ</a></li>
              <li><a href="/contact" className="hover:text-white">ติดต่อ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">ติดตามเรา</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 My Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
```

### 4. แก้ไข Layout

แก้ไข `app/layout.js`:

```javascript
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'My Website',
  description: 'เว็บไซต์ตัวอย่าง Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

### 5. สร้างหน้าต่างๆ

สร้าง `app/page.js`:

```javascript
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">ยินดีต้อนรับสู่เว็บไซต์ของเรา</h1>
      <p className="text-lg text-gray-600 mb-8">
        เราให้บริการพัฒนาเว็บไซต์คุณภาพสูง
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">🚀 รวดเร็ว</h3>
          <p>เว็บไซต์โหลดเร็วและมีประสิทธิภาพ</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">🎨 สวยงาม</h3>
          <p>ดีไซน์ทันสมัยและใช้งานง่าย</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">🔒 ปลอดภัย</h3>
          <p>ระบบรักษาความปลอดภัยสูง</p>
        </div>
      </div>
    </div>
  )
}
```

สร้าง `app/about/page.js`:

```javascript
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">เกี่ยวกับเรา</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          เราคือทีมนักพัฒนาที่มีประสบการณ์มากกว่า 10 ปี
        </p>
        <p className="text-lg mb-4">
          เชี่ยวชาญในการสร้างเว็บแอพพลิเคชันด้วยเทคโนโลยีล่าสุด
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">วิสัยทัศน์</h3>
            <p>มุ่งมั่นสร้างเว็บไซต์ที่ดีที่สุดให้ลูกค้า</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">พันธกิจ</h3>
            <p>พัฒนาเทคโนโลยีเพื่อความก้าวหน้าของธุรกิจ</p>
          </div>
        </div>
      </div>
    </div>
  )
}
```

สร้าง `app/services/page.js`:

```javascript
export default function ServicesPage() {
  const services = [
    {
      title: 'Web Development',
      description: 'พัฒนาเว็บไซต์ด้วย Next.js, React',
      icon: '💻'
    },
    {
      title: 'Mobile App',
      description: 'สร้างแอพมือถือ iOS และ Android',
      icon: '📱'
    },
    {
      title: 'UI/UX Design',
      description: 'ออกแบบส่วนติดต่อผู้ใช้',
      icon: '🎨'
    },
    {
      title: 'SEO Optimization',
      description: 'ปรับแต่งเว็บให้ติดอันดับ Google',
      icon: '🔍'
    }
  ]
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">บริการของเรา</h1>
      <p className="text-lg text-gray-600 mb-8">
        เราให้บริการครบวงจร ตั้งแต่ออกแบบจนถึง Deploy
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```

สร้าง `app/portfolio/page.js`:

```javascript
export default function PortfolioPage() {
  const projects = [
    { id: 1, title: 'E-commerce Website', category: 'Web' },
    { id: 2, title: 'Mobile Banking App', category: 'Mobile' },
    { id: 3, title: 'Dashboard Analytics', category: 'Web' },
  ]
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">ผลงานของเรา</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500"></div>
            <div className="p-4">
              <h3 className="font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

สร้าง `app/contact/page.js`:

```javascript
export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">ติดต่อเรา</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">ส่งข้อความถึงเรา</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="ชื่อ"
              className="w-full px-4 py-2 border rounded"
            />
            <input
              type="email"
              placeholder="อีเมล"
              className="w-full px-4 py-2 border rounded"
            />
            <textarea
              placeholder="ข้อความ"
              rows="5"
              className="w-full px-4 py-2 border rounded"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              ส่งข้อความ
            </button>
          </form>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">ข้อมูลติดต่อ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">ที่อยู่</h3>
              <p className="text-gray-600">123 ถนนสุขุมวิท กรุงเทพฯ 10110</p>
            </div>
            <div>
              <h3 className="font-bold">โทรศัพท์</h3>
              <p className="text-gray-600">02-123-4567</p>
            </div>
            <div>
              <h3 className="font-bold">อีเมล</h3>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## ✅ ทดสอบ

รันโปรเจค:
```bash
npm run dev
```

ทดสอบ:
- ✅ คลิกเมนูแต่ละตัว
- ✅ ดู Active state เปลี่ยน
- ✅ ทดสอบบน Mobile (Responsive)
- ✅ ตรวจสอบ Footer

## 🎯 Challenge

1. เพิ่ม Mobile menu (Hamburger)
2. เพิ่ม Dropdown menu
3. เพิ่ม Breadcrumb
4. เพิ่ม Scroll to top button
5. เพิ่ม Dark mode toggle

## 📚 สิ่งที่ได้เรียนรู้

- ✅ File-based Routing
- ✅ Link Component
- ✅ usePathname Hook
- ✅ Layout และ Nested Layouts
- ✅ Active Link styling

---

เมื่อทำเสร็จแล้ว ไปต่อที่ [Lab 3: Reusable Components](../03-reusable-components/README.md)

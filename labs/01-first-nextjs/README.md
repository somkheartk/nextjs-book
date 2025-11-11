# Lab 1: สร้างโปรเจค Next.js แรก

## 🎯 วัตถุประสงค์

- สร้างโปรเจค Next.js
- ทำความเข้าใจโครงสร้างโปรเจค
- แก้ไขหน้าเว็บพื้นฐาน
- เรียนรู้การใช้ Components

## 📋 ขั้นตอนการทำ Lab

### 1. สร้างโปรเจค

```bash
npx create-next-app@latest my-first-nextjs --no-git
```

เลือกตัวเลือกดังนี้:
- TypeScript? → **No**
- ESLint? → **Yes**
- Tailwind CSS? → **Yes**
- `src/` directory? → **No**
- App Router? → **Yes**
- Import alias? → **No**

### 2. เข้าสู่โปรเจคและรัน

```bash
cd my-first-nextjs
npm run dev
```

เปิดเบราว์เซอร์ที่ http://localhost:3000

## 🎨 แก้ไขหน้าเว็บ

### ขั้นตอนที่ 1: แก้ไข app/page.js

ลบโค้ดเดิมทั้งหมดและเขียนใหม่:

```javascript
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          สวัสดี! ยินดีต้อนรับสู่ Next.js
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          นี่คือโปรเจค Next.js แรกของคุณ
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">📚 เรียนรู้</h2>
            <p>ศึกษา Next.js จากเอกสารอย่างเป็นทางการ</p>
          </div>

          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">🚀 สร้าง</h2>
            <p>พัฒนา Web Application ที่ทันสมัย</p>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">🎯 Deploy</h2>
            <p>นำขึ้น Production ได้ง่ายดาย</p>
          </div>
        </div>
      </div>
    </main>
  )
}
```

### ขั้นตอนที่ 2: สร้าง Component

สร้างโฟลเดอร์และไฟล์:

```bash
mkdir components
```

สร้างไฟล์ `components/Card.js`:

```javascript
export default function Card({ icon, title, description, color }) {
  return (
    <div className={`${color} p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow`}>
      <div className="text-3xl mb-2">{icon}</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
```

### ขั้นตอนที่ 3: ใช้ Component

แก้ไข `app/page.js`:

```javascript
import Card from '@/components/Card'

export default function Home() {
  const features = [
    {
      icon: '📚',
      title: 'เรียนรู้',
      description: 'ศึกษา Next.js จากเอกสารอย่างเป็นทางการ',
      color: 'bg-blue-100'
    },
    {
      icon: '🚀',
      title: 'สร้าง',
      description: 'พัฒนา Web Application ที่ทันสมัย',
      color: 'bg-green-100'
    },
    {
      icon: '🎯',
      title: 'Deploy',
      description: 'นำขึ้น Production ได้ง่ายดาย',
      color: 'bg-purple-100'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'เว็บไซต์เร็วและมีประสิทธิภาพ',
      color: 'bg-yellow-100'
    },
    {
      icon: '🔍',
      title: 'SEO',
      description: 'เพิ่มโอกาสให้ติดอันดับการค้นหา',
      color: 'bg-red-100'
    },
    {
      icon: '💡',
      title: 'Developer Experience',
      description: 'ประสบการณ์การพัฒนาที่ยอดเยี่ยม',
      color: 'bg-indigo-100'
    }
  ]

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">
            ยินดีต้อนรับสู่ Next.js
          </h1>
          <p className="text-xl text-gray-600">
            Framework ที่ทรงพลังสำหรับการสร้าง React Applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} {...feature} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            เริ่มต้นเรียนรู้
          </button>
        </div>
      </div>
    </main>
  )
}
```

### ขั้นตอนที่ 4: เพิ่ม Metadata

แก้ไข `app/layout.js`:

```javascript
import './globals.css'

export const metadata = {
  title: 'My First Next.js App',
  description: 'เรียนรู้ Next.js จากพื้นฐาน',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
```

## ✅ ตรวจสอบผลลัพธ์

เปิดเบราว์เซอร์ที่ http://localhost:3000 คุณควรเห็น:

- ✅ หน้าเว็บที่สวยงาม
- ✅ Cards แสดงคุณสมบัติต่างๆ
- ✅ Responsive Design
- ✅ Hover effects

## 🎯 Challenge (ถ้าทำได้)

1. เพิ่ม Card อีก 3 อัน
2. เปลี่ยนสีของ Cards
3. เพิ่ม Footer Component
4. เพิ่มรูปภาพใน public/images
5. เปลี่ยน Font ใน `layout.js`

## 📚 สิ่งที่ได้เรียนรู้

- ✅ วิธีสร้างโปรเจค Next.js
- ✅ โครงสร้างโปรเจคพื้นฐาน
- ✅ การสร้างและใช้ Components
- ✅ Tailwind CSS basics
- ✅ Props และการส่งข้อมูล

## 🔗 แหล่งข้อมูลเพิ่มเติม

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

เมื่อทำเสร็จแล้ว ไปต่อที่ [Lab 2: สร้างระบบ Navigation](../02-navigation/README.md)

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

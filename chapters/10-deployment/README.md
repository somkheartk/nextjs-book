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

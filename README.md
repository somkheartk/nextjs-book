# หนังสือสอนเขียน Front-end ด้วย Next.js

## 📚 เกี่ยวกับหนังสือเล่มนี้

หนังสือเล่มนี้จะพาคุณเรียนรู้การพัฒนา Front-end ด้วย Next.js ตั้งแต่พื้นฐานจนสามารถนำไปใช้งานจริงได้ พร้อมตัวอย่างโค้ดและแบบฝึกหัดในทุกบท

## 🎯 เหมาะสำหรับใคร

- ผู้ที่มีพื้นฐาน HTML, CSS และ JavaScript
- ผู้ที่เคยเขียน React มาบ้างแล้ว (ไม่จำเป็นต้องมาก)
- ผู้ที่ต้องการเรียนรู้การสร้าง Web Application ที่ทันสมัย
- ผู้ที่ต้องการพัฒนาเว็บที่มี SEO และ Performance ที่ดี

## 📖 สารบัญ

### [บทที่ 1: รู้จักกับ Next.js](./chapters/01-introduction/README.md)
- Next.js คืออะไร
- ทำไมต้องใช้ Next.js
- ความแตกต่างระหว่าง Next.js กับ React
- ติดตั้ง Next.js และเริ่มต้นโปรเจค
- โครงสร้างโปรเจค Next.js
- **Lab**: สร้างโปรเจค Next.js แรก

### [บทที่ 2: Pages และ Routing](./chapters/02-pages-routing/README.md)
- File-based Routing
- Dynamic Routes
- Link Component
- Navigation
- Nested Routes
- **Lab**: สร้างระบบ Navigation พื้นฐาน

### [บทที่ 3: Components และ Props](./chapters/03-components/README.md)
- React Components ใน Next.js
- Props และ State
- Component Composition
- Reusable Components
- **Lab**: สร้าง Reusable Components

### [บทที่ 4: Styling](./chapters/04-styling/README.md)
- CSS Modules
- Global Styles
- Tailwind CSS
- Styled Components
- **Lab**: ออกแบบ UI ด้วย Tailwind CSS

### [บทที่ 5: Data Fetching](./chapters/05-data-fetching/README.md)
- SSR (Server-Side Rendering)
- SSG (Static Site Generation)
- ISR (Incremental Static Regeneration)
- CSR (Client-Side Rendering)
- getServerSideProps
- getStaticProps
- getStaticPaths
- **Lab**: ดึงข้อมูลจาก API

### [บทที่ 6: API Routes](./chapters/06-api-routes/README.md)
- สร้าง API Routes
- HTTP Methods
- Request และ Response
- การเชื่อมต่อ Database
- **Lab**: สร้าง REST API

### [บทที่ 7: State Management](./chapters/07-state-management/README.md)
- useState และ useEffect
- Context API
- React Query
- Zustand
- **Lab**: จัดการ State แบบ Global

### [บทที่ 8: Forms และ Validation](./chapters/08-forms/README.md)
- Controlled Components
- Form Validation
- React Hook Form
- **Lab**: สร้างฟอร์มลงทะเบียน

### [บทที่ 9: Authentication](./chapters/09-authentication/README.md)
- JWT Authentication
- NextAuth.js
- Protected Routes
- **Lab**: ระบบ Login/Logout

### [บทที่ 10: Deployment และ Production](./chapters/10-deployment/README.md)
- การ Build สำหรับ Production
- Environment Variables
- Deploy บน Vercel
- Deploy บน Netlify
- Performance Optimization
- **Lab**: Deploy โปรเจคขึ้น Production

## 🚀 โปรเจคตัวอย่าง

ในหนังสือเล่มนี้จะมีโปรเจคตัวอย่างที่สามารถนำไปใช้งานจริงได้:

1. **Blog System** - ระบบบล็อกพื้นฐาน
2. **E-commerce Store** - ร้านค้าออนไลน์
3. **Dashboard** - ระบบแดชบอร์ด
4. **Todo App** - แอพจัดการงาน

## 💻 การใช้งาน Lab Code

### ติดตั้ง Dependencies

```bash
cd labs/[lab-name]
npm install
```

### รัน Development Server

```bash
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

### Build Production

```bash
npm run build
npm start
```

## 📋 สิ่งที่ต้องเตรียม

- Node.js เวอร์ชัน 18.17 ขึ้นไป
- npm หรือ yarn
- Text Editor (แนะนำ VS Code)
- Terminal/Command Line

## 🔗 แหล่งข้อมูลเพิ่มเติม

- [Next.js Official Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Vercel Documentation](https://vercel.com/docs)

## 📝 License

MIT License - สามารถนำไปใช้งานได้อย่างอิสระ

## 🤝 การมีส่วนร่วม

หากพบข้อผิดพลาดหรือต้องการปรับปรุง สามารถ:
- เปิด Issue
- ส่ง Pull Request
- ติดต่อผู้เขียนโดยตรง

---

สนุกกับการเรียนรู้ Next.js! 🎉
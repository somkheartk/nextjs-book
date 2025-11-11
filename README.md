# หนังสือสอนเขียน Front-end ด้วย Next.js

## 📚 เกี่ยวกับหนังสือเล่มนี้

หนังสือเล่มนี้จะพาคุณเรียนรู้การพัฒนา Front-end ด้วย Next.js ตั้งแต่พื้นฐานจนสามารถนำไปใช้งานจริงได้ พร้อมตัวอย่างโค้ดและแบบฝึกหัดในทุกบท

## 🎯 เหมาะสำหรับใคร

- ผู้ที่มีพื้นฐาน HTML, CSS และ JavaScript
- ผู้ที่เคยเขียน React มาบ้างแล้ว (ไม่จำเป็นต้องมาก)
- ผู้ที่ต้องการเรียนรู้การสร้าง Web Application ที่ทันสมัย
- ผู้ที่ต้องการพัฒนาเว็บที่มี SEO และ Performance ที่ดี

## 📖 สารบัญ

> 💡 **เคล็ดลับการอ่าน**: 
> - 📱 **อ่านออนไลน์**: คลิกที่ชื่อบทเพื่ออ่านเนื้อหาทั้งหมด
> - 📄 **อ่านแบบเอกสารเดียว**: ดาวน์โหลด [nextjs-book-combined.md](./nextjs-book-combined.md) เพื่ออ่านทุกบทในไฟล์เดียว
> - 📕 **แปลงเป็น PDF**: ใช้ไฟล์ `nextjs-book-combined.md` แปลงเป็น PDF ได้ด้วย [pandoc](https://pandoc.org/), [mdToPDF](https://www.markdowntopdf.com/), หรือเครื่องมือออนไลน์

### 📘 [บทที่ 1: รู้จักกับ Next.js](./chapters/01-introduction/README.md)
เรียนรู้พื้นฐาน Next.js และเริ่มต้นโปรเจคแรก
- 📌 [Next.js คืออะไร](./chapters/01-introduction/README.md#-nextjs-คืออะไร)
- 📌 [ทำไมต้องใช้ Next.js](./chapters/01-introduction/README.md#-ทำไมต้องใช้-nextjs)
- 📌 [Next.js vs React](./chapters/01-introduction/README.md#-nextjs-vs-react)
- 📌 [ติดตั้งและเริ่มต้นโปรเจค](./chapters/01-introduction/README.md#-การติดตั้ง-nextjs)
- 📌 [โครงสร้างโปรเจค](./chapters/01-introduction/README.md#-โครงสร้างโปรเจค)
- 🧪 [Lab: สร้างโปรเจค Next.js แรก](./labs/01-first-nextjs/README.md)

### 📘 [บทที่ 2: Pages และ Routing](./chapters/02-pages-routing/README.md)
เข้าใจระบบ routing และการสร้างหน้าเว็บใน Next.js
- 📌 [File-based Routing](./chapters/02-pages-routing/README.md#-file-based-routing)
- 📌 [สร้าง Pages](./chapters/02-pages-routing/README.md#️-สร้าง-pages)
- 📌 [Dynamic Routes](./chapters/02-pages-routing/README.md#-dynamic-routes)
- 📌 [Link Component และ Navigation](./chapters/02-pages-routing/README.md#-link-component)
- 📌 [Nested Routes](./chapters/02-pages-routing/README.md#-nested-routes)
- 🧪 [Lab: สร้างระบบ Navigation พื้นฐาน](./labs/02-navigation/README.md)

### 📘 [บทที่ 3: Components และ Props](./chapters/03-components/README.md)
สร้าง React components ที่นำกลับมาใช้ซ้ำได้
- 📌 [React Components](./chapters/03-components/README.md#-react-components)
- 📌 [Props และการส่งข้อมูล](./chapters/03-components/README.md#-props)
- 📌 [Component Composition](./chapters/03-components/README.md#-component-composition)
- 📌 [Client vs Server Components](./chapters/03-components/README.md#️-client-components-vs-server-components)
- 📌 [Reusable Components](./chapters/03-components/README.md#-best-practices)

### 📘 [บทที่ 4: Styling](./chapters/04-styling/README.md)
จัดการ CSS และออกแบบ UI ด้วยวิธีต่างๆ
- 📌 [CSS Modules](./chapters/04-styling/README.md#-css-modules)
- 📌 [Global Styles](./chapters/04-styling/README.md#-global-styles)
- 📌 [Tailwind CSS](./chapters/04-styling/README.md#-tailwind-css)
- 📌 [Styled Components](./chapters/04-styling/README.md#-styled-components)
- 🧪 [Lab: ออกแบบ UI ด้วย Tailwind CSS](./chapters/04-styling/README.md#-lab)

### 📘 [บทที่ 5: Data Fetching](./chapters/05-data-fetching/README.md)
เทคนิคการดึงข้อมูลแบบต่างๆ ใน Next.js
- 📌 [SSR (Server-Side Rendering)](./chapters/05-data-fetching/README.md#-server-side-rendering-ssr)
- 📌 [SSG (Static Site Generation)](./chapters/05-data-fetching/README.md#️-static-site-generation-ssg)
- 📌 [ISR (Incremental Static Regeneration)](./chapters/05-data-fetching/README.md#-incremental-static-regeneration-isr)
- 📌 [CSR (Client-Side Rendering)](./chapters/05-data-fetching/README.md#️-client-side-rendering-csr)
- 📌 [getServerSideProps, getStaticProps, getStaticPaths](./chapters/05-data-fetching/README.md#-data-fetching-methods)
- 🧪 [Lab: ดึงข้อมูลจาก API](./chapters/05-data-fetching/README.md#-lab)

### 📘 [บทที่ 6: API Routes](./chapters/06-api-routes/README.md)
สร้าง API backend ภายในโปรเจค Next.js
- 📌 [สร้าง API Routes](./chapters/06-api-routes/README.md#-api-routes-คืออะไร)
- 📌 [HTTP Methods (GET, POST, PUT, DELETE)](./chapters/06-api-routes/README.md#-http-methods)
- 📌 [Request และ Response](./chapters/06-api-routes/README.md#-request-และ-response)
- 📌 [การเชื่อมต่อ Database](./chapters/06-api-routes/README.md#️-การเชื่อมต่อ-database)
- 🧪 [Lab: สร้าง REST API](./chapters/06-api-routes/README.md#-lab)

### 📘 [บทที่ 7: State Management](./chapters/07-state-management/README.md)
จัดการ state ในแอปพลิเคชัน
- 📌 [useState และ useEffect](./chapters/07-state-management/README.md#-usestate-และ-useeffect)
- 📌 [Context API](./chapters/07-state-management/README.md#-context-api)
- 📌 [React Query](./chapters/07-state-management/README.md#-react-query)
- 📌 [Zustand](./chapters/07-state-management/README.md#-zustand)
- 🧪 [Lab: จัดการ State แบบ Global](./chapters/07-state-management/README.md#-lab)

### 📘 [บทที่ 8: Forms และ Validation](./chapters/08-forms/README.md)
สร้างและจัดการฟอร์มอย่างมีประสิทธิภาพ
- 📌 [Controlled Components](./chapters/08-forms/README.md#️-controlled-components)
- 📌 [Form Validation](./chapters/08-forms/README.md#-form-validation)
- 📌 [React Hook Form](./chapters/08-forms/README.md#-react-hook-form)
- 📌 [Error Handling](./chapters/08-forms/README.md#-error-handling)
- 🧪 [Lab: สร้างฟอร์มลงทะเบียน](./chapters/08-forms/README.md#-lab)

### 📘 [บทที่ 9: Authentication](./chapters/09-authentication/README.md)
สร้างระบบ authentication และ authorization
- 📌 [JWT Authentication](./chapters/09-authentication/README.md#-jwt-authentication)
- 📌 [NextAuth.js](./chapters/09-authentication/README.md#-nextauthjs)
- 📌 [Protected Routes](./chapters/09-authentication/README.md#️-protected-routes)
- 📌 [Session Management](./chapters/09-authentication/README.md#-session-management)
- 🧪 [Lab: ระบบ Login/Logout](./labs/09-authentication/README.md)

### 📘 [บทที่ 10: Deployment และ Production](./chapters/10-deployment/README.md)
เตรียม deploy และ optimize โปรเจคสำหรับ production
- 📌 [การ Build สำหรับ Production](./chapters/10-deployment/README.md#️-การ-build-สำหรับ-production)
- 📌 [Environment Variables](./chapters/10-deployment/README.md#-environment-variables)
- 📌 [Deploy บน Vercel](./chapters/10-deployment/README.md#-deploy-บน-vercel)
- 📌 [Deploy บน Netlify](./chapters/10-deployment/README.md#-deploy-บน-netlify)
- 📌 [Performance Optimization](./chapters/10-deployment/README.md#-performance-optimization)
- 🧪 [Lab: Deploy โปรเจคขึ้น Production](./chapters/10-deployment/README.md#-lab)

---

## 📚 เอกสารเพิ่มเติม

- 📖 [คำศัพท์และความหมาย (Glossary)](./GLOSSARY.md)
- 🚀 [Quick Reference Guide](./QUICK_REFERENCE.md)
- 🤝 [แนวทางการมีส่วนร่วม](./CONTRIBUTING.md)

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

## 📄 วิธีสร้าง PDF จากหนังสือ

หนังสือเล่มนี้มีไฟล์ `nextjs-book-combined.md` ที่รวมเนื้อหาทุกบทไว้ในไฟล์เดียว สามารถแปลงเป็น PDF ได้ด้วยวิธีต่างๆ:

### วิธีที่ 1: ใช้ Pandoc (แนะนำ)

```bash
# ติดตั้ง Pandoc
# Ubuntu/Debian
sudo apt-get install pandoc texlive-xetex

# macOS
brew install pandoc basictex

# สร้าง PDF
pandoc nextjs-book-combined.md -o nextjs-book-th.pdf --pdf-engine=xelatex -V mainfont="Sarabun" -V geometry:margin=2cm
```

### วิธีที่ 2: ใช้เว็บไซต์ออนไลน์

- [Markdown to PDF](https://www.markdowntopdf.com/)
- [CloudConvert](https://cloudconvert.com/md-to-pdf)
- [PDF Candy](https://pdfcandy.com/md-to-pdf.html)

เพียงอัปโหลดไฟล์ `nextjs-book-combined.md` และดาวน์โหลด PDF ที่ได้

### วิธีที่ 3: ใช้ VS Code Extension

1. ติดตั้ง Extension: "Markdown PDF" by yzane
2. เปิดไฟล์ `nextjs-book-combined.md`
3. กด `Ctrl+Shift+P` (Windows/Linux) หรือ `Cmd+Shift+P` (macOS)
4. พิมพ์ "Markdown PDF: Export (pdf)" และกด Enter

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
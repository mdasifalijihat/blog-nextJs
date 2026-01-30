# 📝 Full Stack Blog Application

A modern full-stack blog platform built with **Next.js**, **Express**, **Prisma**, and **PostgreSQL**.  
This project supports user authentication, post management, comments & replies, and admin moderation.

---

## 🚀 Features

### 👤 Authentication & Users
- Secure authentication using **better-auth**
- User roles (Admin & User)
- Admin user seeding script

### 📝 Posts
- Create, read, update, delete posts
- Search & filter posts
- Pagination & sorting
- Featured posts support

### 💬 Comments System
- Add comments on posts
- Reply to comments
- Delete comments (admin moderation)
- Comment count per post

### 🛡️ Admin Controls
- Highlight / moderate comments
- Manage users & posts
- Admin-only actions

---

## 🧱 Tech Stack

### 🖥️ Frontend
- **Next.js 16 (App Router)**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Radix UI**
- **Zod** (validation)
- **Lucide Icons**
- **Next Themes**

### ⚙️ Backend
- **Node.js**
- **Express**
- **Prisma ORM**
- **PostgreSQL**
- **better-auth**
- **Nodemailer**
- **CORS**

---

## 📦 Backend Packages

- express
- prisma & @prisma/client
- @prisma/adapter-pg
- better-auth
- pg
- cors
- nodemailer
- dotenv
- tsx
- typescript

---

## 📦 Frontend Packages

- next
- react & react-dom
- better-auth
- tailwindcss
- radix-ui components
- zod
- lucide-react
- next-themes
- class-variance-authority
- clsx

---

## 🗂️ Project Structure

```txt
backend/
 ├─ src/
 │  ├─ modules/
 │  ├─ routes/
 │  ├─ services/
 │  ├─ scripts/
 │  └─ server.ts
 ├─ prisma/
 │  └─ schema.prisma

frontend/
 ├─ app/
 ├─ components/
 ├─ modules/
 └─ lib/

 
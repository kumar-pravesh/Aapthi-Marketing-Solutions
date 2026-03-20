# Aapthi Marketing Solutions Pvt Ltd - Enterprise Portal

**Aapthi Marketing Solutions** is a modern, high-performance corporate digital platform designed for IT staffing and enterprise solutions. This project demonstrates a robust full-stack architecture using a decoupled React.js frontend and a Node.js/Express backend, integrated with **Neon (Serverless Postgres)** for scalable data management.

## 🚀 Project Overview

The project is split into two main directories:
- **`/frontend`**: The React application (Vite template). Built with **Tailwind CSS v4** and **Framer Motion**.
- **`/backend`**: The Node.js Express server. It handles API requests, database interactions via **PostgreSQL**, and JWT authentication.

## 🛠️ Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS v4, Framer Motion, Lucide React
- **Backend**: Node.js, Express.js, PostgreSQL (Neon), JWT, Multer
- **Deployment**: Vercel (Frontend/Monorepo), Render (Backend)

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:
1. **Node.js** (v18.x or higher recommended)
2. **npm** (Node Package Manager)
3. **Neon Postgres Account** (for cloud database)

---

## ⚙️ Backend Setup (`/backend`)

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in `/backend` using the template below:
   ```env
   DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require
   PORT=5000
   JWT_SECRET=your_secure_jwt_key
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin123
   FRONTEND_URL=http://localhost:5173
   ```

4. **Initialize Database**:
   Run the manual initialization script to create tables in Neon:
   ```bash
   npm run db:init
   ```

5. **Run the backend server**:
   ```bash
   npm run dev
   ```

---

## 💻 Frontend Setup (`/frontend`)

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure API URL**:
   Create a `.env` file in `/frontend`:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. **Run the frontend application**:
   ```bash
   npm run dev
   ```

---

## 🚀 Deployment

### Backend (Render)
- Connect your GitHub repo to Render.
- Set the environment variables in the Render dashboard.
- The backend is live at: `https://aapthi-backend.onrender.com`

### Frontend (Vercel)
- The project is configured with a root `vercel.json` for easy deployment.
- Deployed Demo: `https://aapthi-marketing-solutions.vercel.app/`

---

## 🔐 Accessing the Admin Portal
1. Navigate to: `http://localhost:5173/admin/login` (Local) or your Vercel URL + `/admin/login`.
2. Login with the credentials set in your backend `.env`.
3. Manage live Contact Inquiries and Career Applications from the dashboard.

# Aapthi Marketing Solutions Pvt Ltd - Enterprise Portal

Welcome to the Aapthi Marketing Solutions project repository! This project consists of a modern, responsive public-facing website built with **React/Vite** and a secure Admin Command Center portal, backed by a robust **Node.js/Express** API and MySQL database.

## 🚀 Project Overview

The project is split into two main directories:
- **`/frontend`**: The React application (Vite template). It contains both the public website and the secure `/admin/*` routes.
- **`/backend`**: The Node.js Express server. It handles API requests, database interactions, and JWT authentication for the admin portal.

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed on your local machine:
1. **Node.js** (v16.14.0 or higher recommended)
2. **npm** (Node Package Manager)
3. **MySQL Database** (Local or Cloud instance like Aiven/AWS RDS)

---

## ⚙️ Backend Setup (`/backend`)

The backend server is responsible for handling contact inquiries, career applications, and admin authentication.

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root of the `/backend` directory and configure the following variables. *Do not commit the `.env` file to version control.*
   ```env
   # Server Configuration
   PORT=5000

   # Database Configuration (Update with your actual DB credentials)
   DB_HOST=your_mysql_host
   DB_PORT=your_mysql_port (e.g., 3306 or custom port like 19909)
   DB_USER=your_db_username
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name

   # Admin Credentials (Set a strong username and password to log into the Admin portal)
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=supersecurepassword123

   # JWT Secret Key (Used for generating auth tokens)
   JWT_SECRET=your_jwt_secret_key
   ```
   > **Note on Database Handling:** The backend uses a script (`models/initDB.js`) to automatically verify and create necessary database tables (like `careers` and `contact_inquiries`) on server startup if they don't exist.

4. **Run the backend server in development mode**:
   ```bash
   npm run dev
   ```
   *The server should now be running on `http://localhost:5000`.*

---

## 💻 Frontend Setup (`/frontend`)

The frontend contains all UI interfaces, utilizing TailwindCSS for styling, React Router for navigation, and Framer Motion for animations.

1. **Open a new terminal session and navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the frontend application in development mode**:
   ```bash
   npm run dev
   ```
   *The React app should now be running on `http://localhost:5173`.*

---

## 🔐 Accessing the Admin Portal

Once both the backend and frontend are running simultaneously:
1. Open your browser to `http://localhost:5173/admin/login`
2. Enter the **ADMIN_USERNAME** and **ADMIN_PASSWORD** you specificed in your backend `.env` file.
3. Upon successful authentication, you will be redirected to the Admin Command Center dashboard, where you can view live Contact Inquiries and Career Applications.

---

## 🚀 Building for Production

To build the frontend for a production deployment:

```bash
cd frontend
npm run build
```
This will compile the React code into static assets inside the `/frontend/dist` directory, which can then be served by Vercel, Netlify, or any static file host.

For the backend, you can run `npm start` (if configured in `package.json`) or deploy the application directly to platforms like Render, Railway, or standard VPS servers. Ensure that appropriate environment variables are configured on the deployment environment.

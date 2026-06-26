# MERN Notes App

A modern notes application built with MongoDB, Express, React, and Node.js. The project includes a backend API with rate-limited request handling and a responsive React frontend styled with Tailwind CSS and DaisyUI.

## 🚀 Project Overview

- Backend: Express server with MongoDB via Mongoose
- Frontend: React application with Vite, Tailwind CSS, and React Router
- Features:
  - Create, read, update, delete notes
  - RESTful API endpoints
  - Upstash rate limiting for API protection
  - Cross-origin support for local development

## 📁 Repository Structure

- `Backend/` - Express API server
  - `src/Server.js` - application entry point
  - `src/config/Database.js` - MongoDB connection logic
  - `src/config/upStach.js` - Upstash Redis rate limiting configuration
  - `src/controller/Controller.js` - note CRUD controllers
  - `src/routes/Routes.js` - API routes
  - `src/models/Notes.js` - Mongoose note schema
- `Frontend/` - React client application
  - `src/` - React components, pages, and styles
  - `public/` - static assets
  - `vite.config.js` - Vite configuration

## ✅ Getting Started

### Backend setup

1. Navigate to the backend folder:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
4. Add your environment values to `Backend/.env`.

### Frontend setup

1. Navigate to the frontend folder:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## ▶️ Run Locally

### Start the backend

```bash
cd Backend
npm run dev
```

### Start the frontend

```bash
cd Frontend
npm run dev
```

Open the app in the browser at `http://localhost:5173`.

## 🔧 Environment Variables

Create `Backend/.env` with the following values:

```env
MONGODB_URI=your-mongodb-connection-string
PORT=4002
UPSTASH_REDIS_REST_URL=your-upstash-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-token
```

> Do not commit `.env` files to GitHub. This repository includes `.gitignore` entries to protect environment files.


## 🛡️ GitHub Readiness

This repository now includes a top-level `.gitignore` and `Backend/.gitignore` to keep sensitive files out of version control.

If you have already committed `.env` files, remove them from the repository history locally with:

```bash
git rm --cached Backend/.env
git rm --cached Frontend/.env
```

## 💡 Notes

- `Frontend/package.json` uses Vite and React 19.
- `Backend/package.json` includes `nodemon` for local development.
- Keep `Backend/.env` private and use the `.env.example` template as a reference.

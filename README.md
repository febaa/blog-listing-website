# 📝 Blog Listing Website

A stylish and responsive blog listing platform built with **Next.js 15 (App Router)** and **Tailwind CSS v4**. It allows users to add and view blogs using local state and JSON data. Perfect for small projects or demo assignments without a database.

---

## 🔍 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Deployment Notes](#-deployment-notes)
- [Screenshots](#-screenshots)
- [License](#-license)

---

## ✨ Features

- 🏠 Home page listing all blog posts (title, summary, and date)
- ➕ Add blog page with form (title, content, date)
- 📄 Individual blog detail view
- 💅 Fully responsive design with Tailwind CSS v4
- ⚡ Fast performance with no backend dependency
- 🧠 LocalStorage for blog persistence (with fallback to static `blogs.json`)

---

## 🛠 Tech Stack

- **Next.js 15.3.4** (App Router)
- **React 18.2**
- **Tailwind CSS v4**
- **Local Storage** (for blog state)
- **Vanilla JavaScript (No TypeScript)**

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/blog-listing-website.git
cd blog-listing-website
```

### 2. Install Dependencies

```bash
npm install
```

## 3. Run the development server

```bash
npm run dev
```

Visit http://localhost:3000 to see the app.

## 🚀 Deployment Notes

- Use Vercel or any Node.js-compatible platform to deploy.
- Blogs added using the form are saved in localStorage only.
- Static fallback content comes from src/app/data/blogs.json.
- Do not attempt to write to blogs.json at runtime in production — file system is read-only.

## 📸 Screenshots

### 🖥️ Desktop Screenshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/c0565e0f-16b1-4ed8-b5bd-eed82da75615" width="30%" />
  <img src="https://github.com/user-attachments/assets/0a88937c-d03f-4018-9f9d-14ac68748684" width="30%" />
  <img src="https://github.com/user-attachments/assets/2f74e923-eae3-416d-a5eb-74b3dd06ab1d" width="30%" />
</div>

### 📱 Mobile Screenshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/e5ca3510-913d-4a9e-9d80-0924d3a27079" width="30%" />
  <img src="https://github.com/user-attachments/assets/e2ee8875-552d-4d89-ad0a-19d63c51aab5" width="30%" />
  <img src="https://github.com/user-attachments/assets/79993f85-9f19-4733-9c5a-a6f4721f1420" width="30%" />
</div>

## 📃 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).  
You are free to use, copy, modify, and distribute this software for any purpose with proper attribution.

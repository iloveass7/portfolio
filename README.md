# Syed Abir Hossain — Personal Portfolio (MERN Stack)

A research-oriented personal portfolio website built with React (Vite) + Express + MongoDB.

---

## 📁 Project Structure

```
portfolio/
├── client/          → React frontend (Vite)
│   └── src/
│       ├── sections/    → Page sections (Hero, Projects, Research, etc.)
│       ├── components/  → Reusable components (Navbar, ProjectCard, Footer)
│       ├── context/     → ThemeContext (dark/light mode)
│       ├── data/        → Static fallback data (used when API is unavailable)
│       └── styles/      → Global CSS
│
├── server/          → Express backend
│   ├── config/      → MongoDB connection
│   ├── models/      → Mongoose schemas (Project, Research, Profile)
│   ├── routes/      → REST API routes
│   └── index.js     → Server entry point
│
└── package.json     → Root scripts (runs both concurrently)
```

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm run install:all
```

### 2. Configure environment
```bash
cp server/.env.example server/.env
# Edit server/.env and add your MongoDB Atlas URI
```

### 3. Run development servers
```bash
npm run dev
# Frontend: http://localhost:5173
# Backend:  http://localhost:5000
```

---

## 🔌 API Endpoints

| Method | Route                  | Description              |
|--------|------------------------|--------------------------|
| GET    | /api/projects          | Get all projects         |
| GET    | /api/projects?category=ai | Filter by category    |
| GET    | /api/projects/:slug    | Get single project       |
| POST   | /api/projects          | Create project (admin)   |
| GET    | /api/research          | Get all research items   |
| GET    | /api/research/:slug    | Get single research item |
| GET    | /api/profile           | Get profile data         |
| POST   | /api/contact           | Contact form submission  |

---

## 🖼️ Adding Your Photo

1. Copy your photo to: `client/src/assets/photo.jpg`
2. In `client/src/sections/Hero.jsx`, comment out the placeholder div and uncomment the `<img>` tag:

```jsx
<img src="/assets/photo.jpg" alt="Syed Abir Hossain" style={styles.portraitImg} />
```

---

## 🌗 Dark / Light Mode

Clicking the ☽/☀ button in the navbar toggles the theme. The preference is saved to `localStorage`.

---

## 🚢 Deployment

| Part       | Platform              |
|------------|-----------------------|
| Frontend   | Vercel or Netlify     |
| Backend    | Render or Railway     |
| Database   | MongoDB Atlas (free)  |

### Deploy frontend to Vercel
```bash
cd client
npm run build
# Upload /dist folder to Vercel, or connect GitHub repo
```

### Deploy backend to Render
- Connect your GitHub repo
- Set build command: `cd server && npm install`
- Set start command: `node server/index.js`
- Add environment variables: `MONGO_URI`, `CLIENT_URL`, `PORT`

---

## 🎨 Customization

- **Colors**: Edit CSS variables in `client/src/styles/global.css`
- **Content**: Edit `client/src/data/index.js`
- **Sections**: Each section is its own file in `client/src/sections/`

---

## 📦 Tech Stack

- **Frontend**: React 18 + Vite + CSS-in-JS (inline styles)
- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose
- **Fonts**: Playfair Display (serif headings) + DM Sans (body) + DM Mono (labels)
- **Deployment**: Vercel + Render + MongoDB Atlas

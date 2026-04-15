<div align="center">

# ✦ Raunak Rai — Portfolio

**A premium, performance-optimized personal portfolio built with React, TypeScript, and Framer Motion.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-raunakrai.vercel.app-6366f1?style=for-the-badge&logo=vercel&logoColor=white)](https://raunakrai.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## 🌐 Live Site

**[https://raunakrai.vercel.app](https://raunakrai.vercel.app)**

---

## ✨ Features

- ** Custom Animated Cursor** — Smooth dual-layer cursor (dot + ring) with interactive hover states; auto-disabled on mobile for performance
- **🌌 Immersive Hero Section** — Full-screen starfield canvas animation, animated typewriter role text, and a glassmorphic status badge
- **👤 About Section** — Animated developer card with a live code snippet aesthetic, stat counters, and key highlights
- **⚡ Skills Section** — Categorized tech stack with animated progress bars driven by Intersection Observer
- ** Projects Showcase** — Featured project cards (FinFlow, DevPulse, FitLife) with live demo links, tech tags, and GitHub links
- **📬 Contact Section** — Copy-to-clipboard email, direct links, and a fully functional contact form
- **📱 Fully Responsive** — Pixel-perfect layouts across all screen sizes (mobile → desktop)
- **🔥 Smooth Animations** — Section entrance animations, stagger effects, and micro-interactions powered by Framer Motion
- ** Noise Texture Overlay** — Subtle grain texture for a premium, tactile feel
- ** Blazing Fast** — Built with Vite 8 and optimized for production deployment on Vercel

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 19 |
| **Language** | TypeScript 6 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Scroll Detection** | React Intersection Observer |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
portfolio/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky nav with scroll-aware active link highlighting
│   │   ├── Hero.tsx         # Full-screen hero with canvas starfield & typewriter
│   │   ├── About.tsx        # Bio, stats, and animated developer card
│   │   ├── Skills.tsx       # Tech stack grid with animated progress bars
│   │   ├── Projects.tsx     # Portfolio project cards with links
│   │   ├── Contact.tsx      # Contact form and social links
│   │   └── Footer.tsx       # Footer with quick links
│   ├── App.tsx              # Root component with custom cursor logic
│   ├── index.css            # Global styles, design tokens, animations
│   └── main.tsx             # App entry point
├── index.html               # HTML shell with SEO meta tags
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── vercel.json              # Vercel SPA routing config
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or higher)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/raunakrai/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```


### Build for Production

```bash
# Type-check and build
npm run build

# Preview the production build locally
npm run preview
```

---

## 🚢 Deployment

This project is deployed on **[Vercel](https://vercel.com)** with automatic CI/CD. Every push to the `main` branch triggers a new deployment.

The `vercel.json` includes SPA routing rewrites to ensure client-side navigation works correctly on all routes.

To deploy your own fork:

1. Push the repository to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build settings
4. Done — your site is live ✓

---

## 🎨 Design Highlights

- **Dark Theme** — Deep `#080810` background with subtle noise texture
- **Glassmorphism** — Cards use `backdrop-filter: blur` with semi-transparent borders
- **Color Palette** — Indigo (`#6366f1`) and cyan (`#22d3ee`) accent gradients
- **Typography** — Inter font family for clean, modern readability
- **Motion** — All animations respect `prefers-reduced-motion` via Framer Motion defaults

---

## 📬 Contact

**Raunak Rai**

- 🌐 Portfolio: [raunakrai.vercel.app](https://raunakrai.vercel.app)
- 📍 Andhra Pradesh, India
- 🎓 2nd Year B.Tech CSE @ SRM University AP

---

<div align="center">

Built with ❤️ by **Raunak Rai** · Open to Internship Opportunities

</div>

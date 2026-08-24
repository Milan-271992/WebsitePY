# X Tech Infra - Corporate Website

A modern, high-performance, fully responsive corporate website for **X Tech Infra** — IT Infrastructure, Resource, Service, and Consultancy based in **Udaipur, Rajasthan, India**.

Built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Lucide React**.

---

## 🚀 Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Architecture**: 100% Client-Side Static Single Page Application (SPA)

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx        # Sticky glassmorphism header & mobile navigation
│   ├── Hero.tsx          # High-impact hero with tech graphics & highlights
│   ├── About.tsx         # Story, mission, vision & Udaipur tech hub showcase
│   ├── Services.tsx      # 5 core IT services with feature checklists
│   ├── WhyChooseUs.tsx   # 4 value proposition cards & metrics
│   ├── Expertise.tsx     # 8 technical competency areas & progress bars
│   ├── Contact.tsx       # Contact cards, WhatsApp link & interactive form
│   └── Footer.tsx        # Comprehensive footer with quick links & copyright
├── App.tsx               # Root component with scroll-spy navigation
├── main.tsx              # React DOM entry point
├── index.css             # Tailwind CSS & custom glowing effects
└── vite-env.d.ts         # Vite TypeScript environment types
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized static build files will be generated inside the `dist/` directory.

---

## 🌐 Deployment Instructions

### ⚡ Deploy to Vercel (Recommended)

#### Option 1: Using the Vercel Web Dashboard
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** → **"Project"**.
4. Import your repository.
5. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **"Deploy"**. Your website will be live in seconds with global CDN and automatic HTTPS!

#### Option 2: Using the Vercel CLI
```bash
npm install -g vercel
vercel
```

---

### 🐙 Deploy to GitHub Pages

1. In `vite.config.ts`, verify that `base: './'` is set (already configured).
2. Install `gh-pages` helper (optional) or use GitHub Actions:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository settings under **Pages**, select the `gh-pages` branch as the source.

---

## 📄 License & Copyright

© 2026 **X Tech Infra**. All Rights Reserved.  
Udaipur, Rajasthan, India.

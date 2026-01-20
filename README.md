# HealthyHarvest - Healthy Food Delivery Web App

A modern, responsive homepage dashboard for a healthy food delivery web application built with React, JavaScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Sticky Navbar** - Responsive navigation with mobile menu
- **Hero Section** - Eye-catching hero with smooth animations
- **Category Section** - Horizontal scrollable category cards
- **Product Grid** - Best sellers showcase with ratings and badges
- **Feature Section** - Why choose us with animated icons
- **Footer** - Complete footer with links and newsletter signup

## 🛠️ Tech Stack

- **React 18** - UI library
- **JavaScript** - Programming language
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **The GitHub Actions workflow will automatically:**
   - Build your project
   - Deploy to GitHub Pages
   - Your site will be available at: `https://[username].github.io/Rishi-Quality/`

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the `dist` folder to the `gh-pages` branch:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

## 🔧 Troubleshooting

### 404 Error on main.jsx

If you see a 404 error for `main.jsx`:

1. **Make sure the dev server is running:**
   ```bash
   npm run dev
   ```

2. **Clear node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Check that all files exist:**
   - `src/main.jsx` should exist
   - `src/App.jsx` should exist
   - `index.html` should reference `/src/main.jsx`

## 🎨 Design Features

- Clean, premium Apple-level spacing
- Soft shadows and rounded corners
- Green/healthy color palette
- Mobile-first responsive design
- Smooth hover animations
- Modern UI/UX inspired by Daily Harvest

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── CategorySection.jsx
│   ├── ProductGrid.jsx
│   ├── FeatureSection.jsx
│   └── Footer.jsx
├── data/
│   └── dummyData.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎯 Components

All components are reusable and follow React best practices.


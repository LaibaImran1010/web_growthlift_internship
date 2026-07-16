# Week 3: React.js - Components, Hooks & State

This directory contains the tasks, projects, and deliverables completed during **Week 3** of the GrowthLift Digital Internship 2026. The focus of this week was building a solid foundation in React.js, implementing routing, and styling with Tailwind CSS[cite: 1].

---

## 🚀 Learning & Progress Journey

### **Day 1: React Setup & JSX Basics**
- Scaffolded a fast, modern React project using **Vite**[cite: 1].
- Explored React's folder structure (`src/`, `public/`, `main.jsx`, `App.jsx`)[cite: 1].
- Learned fundamental JSX rules (using `className`, self-closing tags, wrapping elements in fragments, and embedding JS expressions)[cite: 1].
- Created and imported the first custom component: `<Header />`[cite: 1].

### **Day 2: Props & State**
- Learned how to pass dynamic data from parent to child components using **Props**[cite: 1].
- Built a reusable `<Card />` component driven by custom props[cite: 1].
- Mastered state management by building an interactive `<Counter />` component with the `useState` hook[cite: 1].
- Created a `<Toggle />` component utilizing **conditional rendering**[cite: 1].

### **Day 3: Hooks & Lists**
- Implemented the `useEffect` hook to sync state changes with the browser tab document title[cite: 1].
- Handled side effects by fetching live data from a public API within a `<QuoteBox />` component[cite: 1].
- Learned how to render dynamic arrays and lists using `.map()` and the required unique `key` prop[cite: 1].

### **Day 4: React Router & Single Page Application (SPA)**
- Installed and configured `react-router-dom` to implement client-side routing[cite: 1].
- Created 5 page views inside `src/pages/`: `Home`, `About`, `Projects`, `Contact`, and a `NotFound` (404) fallback page[cite: 1].
- Set up navigation links using `<NavLink>` to highlight active menu options dynamically without page reloads[cite: 1].

### **Day 5: Tailwind CSS & Deployment**
- Integrated and configured **Tailwind CSS** with Vite[cite: 1].
- Styled the entire multi-page application with responsive, utility-first classes (supporting mobile, tablet, and desktop viewports)[cite: 1].
- Generated a production build (`npm run build`) and successfully deployed the live app to **Vercel**[cite: 1].

---

## 📦 Week 3 Deliverables
1. **Organized File Structure**: Clear distinction between reusable UI pieces (`src/components/`) and page views (`src/pages/`)[cite: 1].
2. **Interactive UI Elements**: Reusable Card, Counter, Toggle, and API QuoteBox components[cite: 1].
3. **Multi-page SPA**: A fully functional router system with a custom 404 handler[cite: 1].
4. **Tailwind Design**: Responsive grids and custom styles with mobile-first breakpoints[cite: 1].
5. **Live Vercel Link**: App deployed and running live in production[cite: 1].

---

## 🛠️ How to Run Locally

### **Prerequisites**
Make sure you have [Node.js](https://nodejs.org/) and `npm` installed[cite: 1]. Confirm by running:
```bash
node -v
npm -v
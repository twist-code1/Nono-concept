# ☕ NÖNÖ Concept — Specialty Coffee Web Platform


A modern commercial web concept and landing platform designed for the Yerevan-based specialty coffee shop **NÖNÖ**. Built from scratch with zero third-party UI dependencies, focusing on modular architecture, clean typography, and smooth performance.

## 🔗 Live Demo
**[Visit NÖNÖ Concept](https://nono-concept.web.app/)**

---

## 🛠 Tech Stack

- **Core:** React 19, TypeScript 6
- **Build Tool:** Vite 8
- **Styling:** Custom CSS3 (Responsive Layout & Animations)
- **Code Quality:** ESLint 10 (`typescript-eslint`, React Hooks rules)
- **Deployment:** Firebase Hosting

---

## ✨ Key Highlights

- **Modular Architecture:** Clean separation of concerns across page `sections`, reusable UI `components`, custom React `hooks`, and decoupled static content (`texts`).
- **Zero-Bloat Dependencies:** Engineered purely with React and native CSS without heavy external UI frameworks for fast bundle delivery.
- **Strict Type Safety:** Configured with strict TypeScript compilation (`tsc -b`) prior to production builds.
- **Responsive Design:** Fluid layout tailored for both desktop and mobile viewports.

---

## 📁 Project Structure

```text
.
├── public/              # Static public assets
├── src/                 # Application source code
│   ├── assets/          # Images, fonts & media
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── sections/        # Core landing page sections
│   ├── texts/           # Decoupled text content & data
│   ├── App.tsx          # Root component & section assembly
│   ├── App.css          # Component-level styles
│   ├── index.css        # Global styles & resets
│   └── main.tsx         # Application entry point
├── firebase.json        # Firebase Hosting configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite bundler configuration

```
---

## 📹 Website Demonstration

<video src="./screenshots/nono-present.mp4" autoplay loop muted playsinline width="100%"></video>

> ❗ **Note:** This project is a **non-commercial concept / design study** created for portfolio purposes only. It is not affiliated with or used by any official commercial entity.

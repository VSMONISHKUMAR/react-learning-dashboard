# React + TypeScript Project Setup Guide

This document explains step-by-step how to create and run a React application using TypeScript and Vite.

---

# 1. Prerequisites

Before creating the project, install the required tools.

## Install Node.js

Download and install the latest LTS version:

https://nodejs.org/

Verify installation:

```bash
node -v
```

```bash
npm -v
```

---

## Install Visual Studio Code

Download VS Code:

https://code.visualstudio.com/

Recommended extensions:

- ES7+ React/Redux/React-Native snippets
- ESLint
- Prettier
- TypeScript Import Sorter

---

# 2. Create React + TypeScript Project

Open terminal or PowerShell.

Navigate to your projects folder:

```bash
cd Projects
```

Create a new React application:

```bash
npm create vite@latest my-react-app
```

---

# 3. Select Project Options

Choose the following options:

```
Project name:
my-react-app

Framework:
React

Variant:
TypeScript
```

Vite will generate the React project structure.

---

# 4. Navigate Into Project

Move into the project directory:

```bash
cd my-react-app
```

---

# 5. Install Dependencies

Install required packages:

```bash
npm install
```

This creates:

```
node_modules/
package-lock.json
```

---

# 6. Open Project in VS Code

Run:

```bash
code .
```

Or open manually:

```
VS Code
    |
    └── File
          |
          └── Open Folder
```

Select:

```
my-react-app
```

---

# 7. Project Structure

After creation, the structure looks like:

```
my-react-app
│
├── node_modules
│
├── public
│
├── src
│   │
│   ├── assets
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

---

# 8. Understanding React Files

## main.tsx

Application entry point.

Flow:

```
Browser
   |
   |
main.tsx
   |
   |
App.tsx
   |
   |
Components
```


## App.tsx

Main React component.

Example:

```tsx
function App(){

 return(
   <h1>
      Hello React
   </h1>
 )

}

export default App;
```

---

# 9. Create Components

Create folder:

```
src/components
```

Example:

```
src
 |
 └── components
        |
        └── Header.tsx
```

Component example:

```tsx
function Header(){

 return(
   <header>
      React Application
   </header>
 )

}

export default Header;
```

---

# 10. Run Development Server

Start the application:

```bash
npm run dev
```

Output:

```
Local:
http://localhost:5173/
```

Open the URL in browser.

---

# 11. Build Production Application

Create optimized production files:

```bash
npm run build
```

Output:

```
dist/
```

---

# 12. Preview Production Build

Run:

```bash
npm run preview
```

---

# 13. Install Common React Packages

## React Router

For multiple pages:

```bash
npm install react-router-dom
```


## Axios

For API communication:

```bash
npm install axios
```


## State Management

Example:

```bash
npm install @reduxjs/toolkit react-redux
```

---

# 14. Git Setup

Initialize Git:

```bash
git init
```

Check files:

```bash
git status
```

Add files:

```bash
git add .
```

Commit:

```bash
git commit -m "Initial React TypeScript project"
```

---

# 15. Push Project To GitHub

Create a repository in GitHub.

Connect repository:

```bash
git remote add origin YOUR_REPOSITORY_URL
```

Rename branch:

```bash
git branch -M main
```

Push code:

```bash
git push -u origin main
```

---

# 16. Deployment

Recommended hosting platforms:

- Vercel
- Netlify
- GitHub Pages


Build command:

```
npm run build
```

Output directory:

```
dist
```

---

# React Development Learning Path

Learn in this order:

1. JSX / TSX
2. Components
3. Props
4. State management
5. Events
6. Conditional rendering
7. Lists and map()
8. Forms
9. Hooks
10. API Integration
11. Routing
12. Authentication
13. Deployment

---

# Useful Commands

Install packages:

```bash
npm install package-name
```

Start development:

```bash
npm run dev
```

Build application:

```bash
npm run build
```

Check installed packages:

```bash
npm list
```

---

## Project Created Successfully 🚀

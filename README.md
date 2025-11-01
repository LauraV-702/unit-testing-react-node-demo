# 🤖 Greeting Machine

A fun project featuring a **React (Vite)** frontend that cycles through funny greetings and a simple **Express** backend with testable API routes.  
Includes **Cypress** for end-to-end and API testing.

---

## 📦 Features
- React frontend with animated greeting messages 💬  
- Express backend exposing basic routes (`/hello` and `/add`) ⚙️  
- Cypress tests for both frontend UI and backend API 🔍

---

## 🧰 Prerequisites
Make sure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (comes with Node)
- (Optional) **Cypress GUI** for running tests visually

---

## ⚙️ Ports Overview

| Service   | Description | Port |
|------------|--------------|------|
| Backend    | Express API  | 3000 |
| Frontend   | React (Vite) | 5173 |
| Cypress    | Test Runner  | — |

> ⚠️ The frontend assumes the backend runs on **http://localhost:3000**.

---

## 🚀 Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/unit-testing-react-node-demo.git
cd unit-testing-react-node-demo
```
---

### 2️⃣ Start the Backend
``` 
cd backend
npm install
node app.js
```

---

### 3️⃣ Start the Frontend
```
cd frontend
npm install
npm run dev
```

---

### 🧪 Running Cypress Tests
```
npm run test:open
# or
npx cypress open
```

---

### 🧩 Test Files

| File Path | Description |
|------------|--------------|
| `cypress/e2e/frontend.cy.js` | Tests the React greeting UI |
| `cypress/e2e/backend.cy.js` | Tests the Express API endpoints |

> 🧠 **Tip:**  
> - Frontend tests require **both the frontend and backend** to be running.  
> - Backend tests only need the **backend** running.

---

# Scholars Scope — Full Stack App

React (with React Router) frontend + Node.js/Express + MongoDB backend.
Pixel-perfect conversion of the original HTML/CSS/JS site with full routing and database integration.

---

## Project Structure

```
scholars-scope/
├── backend/
│   ├── .env                    ← MongoDB URI + port config
│   ├── package.json
│   ├── server.js               ← Express app entry point
│   ├── models/
│   │   ├── Student.js          ← Mongoose schema for registrations
│   │   ├── Contact.js          ← Mongoose schema for contact messages
│   │   └── EligibilityCheck.js ← Mongoose schema for checker logs
│   └── routes/
│       ├── eligibility.js      ← POST /api/check-eligibility
│       ├── students.js         ← POST /api/register, GET /api/register
│       └── contact.js          ← POST /api/contact, GET /api/contact
│
└── frontend/
    ├── .env                    ← REACT_APP_API_URL=http://localhost:5000
    ├── package.json
    ├── public/index.html
    └── src/
        ├── App.jsx             ← BrowserRouter + all Routes defined here
        ├── App.css             ← All styles (exact match to original)
        ├── index.js
        ├── pages/              ← One file per route
        │   ├── Home.jsx          → /
        │   ├── AboutPage.jsx     → /about
        │   ├── HowItWorksPage.jsx→ /how
        │   ├── ScholarshipsPage.jsx → /scholarships
        │   ├── CheckerPage.jsx   → /checker
        │   ├── TeamPage.jsx      → /team
        │   ├── RegisterPage.jsx  → /register
        │   ├── ContactPage.jsx   → /contact
        │   └── NotFound.jsx      → /* (404)
        └── components/         ← Reusable UI components
            ├── Nav.jsx           ← Fixed nav with active route highlight
            ├── Hero.jsx
            ├── StatsBand.jsx     ← Animated counters
            ├── About.jsx
            ├── HowItWorks.jsx
            ├── EligibilityChecker.jsx ← Calls /api/check-eligibility
            ├── Scholarships.jsx
            ├── Team.jsx
            ├── Register.jsx      ← 3-step form → calls /api/register
            ├── Contact.jsx       ← Calls /api/contact
            └── Footer.jsx
```

---

## Frontend Routes

| URL             | Page                     |
|-----------------|--------------------------|
| `/`             | Home (all sections)      |
| `/about`        | About the Project        |
| `/how`          | How It Works + FAQ       |
| `/scholarships` | All Scholarships listing |
| `/checker`      | Eligibility Checker      |
| `/team`         | Team & Project Details   |
| `/register`     | 3-Step Registration Form |
| `/contact`      | Contact Form             |
| `*`             | 404 Not Found            |

---

## Backend API Endpoints

| Method | Endpoint                 | Description                          | Saves to DB          |
|--------|--------------------------|--------------------------------------|----------------------|
| GET    | `/api/health`            | Health + DB connection status        | —                    |
| POST   | `/api/check-eligibility` | Returns matched scholarships         | EligibilityCheck     |
| GET    | `/api/register`          | List all registered students (admin) | —                    |
| POST   | `/api/register`          | Register new student                 | Student              |
| GET    | `/api/contact`           | List all contact messages (admin)    | —                    |
| POST   | `/api/contact`           | Submit a contact message             | Contact              |

---

## Setup & Run

### Prerequisites
- Node.js 18+
- MongoDB running locally **or** a MongoDB Atlas connection string

### 1. Start MongoDB (local)
```bash
mongod
```

### 2. Start the Backend
```bash
cd backend
npm install
# Edit .env to set MONGO_URI if using Atlas
npm start
# → http://localhost:5000
```

### 3. Start the Frontend
```bash
cd frontend
npm install
npm start
# → http://localhost:3000
```

### MongoDB Atlas (cloud)
Edit `backend/.env`:
```
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/scholarsscope
```

---

## Features
- ✅ React Router — dedicated URL for every section
- ✅ Active nav link highlighting per route
- ✅ Mobile hamburger menu
- ✅ MongoDB — registrations, contact messages, eligibility checks all persisted
- ✅ Mongoose models with validation
- ✅ Duplicate email detection on registration
- ✅ Eligibility checker calls Node.js backend
- ✅ 3-step registration with full client + server validation
- ✅ Scroll reveal animations on all pages
- ✅ Animated stat counters
- ✅ Pixel-perfect UI — zero visual changes from the original
- ✅ Fully responsive with mobile nav

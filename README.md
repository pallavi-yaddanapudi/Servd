# 🍳 SERVD — AI Powered Recipe Platform

SERVD is an AI recipe assistant that helps users cook with what they already have. Upload pantry items or scan an ingredient image and the platform generates personalized recipes using AI.
It also provides nutrition information, cooking tips, downloadable recipe files and plan‑based AI limits.

---

## 🚀 Features

### 👤 Authentication

* Secure Sign Up & Login using Clerk
* User sessions & protected routes

### 🧠 AI Recipe Generation

* Generate recipes from pantry items
* Scan ingredient images to detect items and suggest recipes
* AI powered structured recipe output
* Includes cooking steps, tips & nutrition values

### 🧺 Pantry Management

* Add pantry items manually
* Upload pantry items via AI image scan
* AI suggests recipes based on available ingredients

### 📊 Dashboard

* Explore recipes by cuisine & category
* Recipe of the Day suggestion
* View saved recipes

### 💎 Membership Plans

| Plan | Features                            |
| ---- | ----------------------------------- |
| Free | Limited AI generations              |
| Pro  | Higher AI usage + advanced features |

### 📄 Recipe Details

* Ingredients & step‑by‑step instructions
* Calories & nutrition breakdown
* Cooking tips
* Downloadable recipe file

---

## 🧱 Tech Stack

### Frontend

* Next.js (App Router)
* Tailwind CSS
* React Server Actions

### Backend & Database

* Strapi CMS (Content Management & APIs)
* Neon PostgreSQL Database
* Prisma 

### AI & Services

* Gemini AI (Recipe generation & image understanding)
* Arcjet (Rate limiting & plan enforcement)
* Clerk (Authentication & user management)

### Deployment

* Vercel (Frontend)
* Strapi Hosted Backend
* Neon Cloud Database

---

## 🏗️ Architecture Overview

User → Next.js → Server Actions → AI (Gemini) → Strapi API → Neon DB

The frontend communicates with server actions, which validate limits via Arcjet, generate recipes via AI, and store structured data in Strapi + Neon.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root and paste your keys like below:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

ARCJET_KEY=your_arcjet_key
NEXT_PUBLIC_STRAPI_URL=your_strapi_url
STRAPI_API_TOKEN=your_strapi_api_token
GEMINI_API_KEY=your_gemini_api_key
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/pallavi-yaddanapudi/Servd.git
cd servd
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run development server

```
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧠 How AI Recipe Generation Works

1. User provides pantry items or uploads image
2. AI detects ingredients
3. Recipe prompt generated
4. AI returns structured JSON recipe
5. Saved into Strapi database
6. Displayed in dashboard

---

## 📁 Downloadable Recipe

Users can export recipes which include:

* Ingredients
* Instructions
* Nutrition facts
* Cooking tips

---

## 🔐 Rate Limiting & Plans

Arcjet controls AI usage per user:

* Free plan → limited generations
* Pro plan → extended generation limit

---

## 🖂 Contact

For any inquiries, please contact Pallavi Yaddanapudi — [yaddanapudipallavi101@gmail.com](mailto:yaddanapudipallavi101@gmail.com)

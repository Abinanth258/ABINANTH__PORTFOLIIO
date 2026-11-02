# Abinanth K S - Developer Portfolio

A high-performance, responsive personal portfolio website engineered for **Abinanth K S** (Full-Stack Developer & Software Engineer). Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, designed specifically for 1-click deployment on **Vercel**.

---

## ⚡ Framework Decision: Next.js + TypeScript vs React + TypeScript + CSS

### **Winner: Next.js + TypeScript (with Tailwind CSS)**

Here is why **Next.js + TypeScript** is the superior choice for your portfolio, especially when targeting **Vercel**:

| Feature | Next.js + TypeScript | React + TypeScript (Vite / CRA) |
| :--- | :--- | :--- |
| **Vercel Integration** | **Native (Created by Vercel)** — zero-configuration deploys, instant edge caching, preview URLs. | Requires build output configuration (`dist`/`build`), manual rewrite rules for routing. |
| **SEO & Social Previews** | **Built-in SSG/SSR metadata**. Recruiters sharing your link on LinkedIn, Twitter, or WhatsApp get rich preview cards. | Client-side only by default; social scrapers may see blank previews without pre-rendering plugins. |
| **Image Optimization** | **`next/image`** automatically compresses, resizes, and serves AVIF/WebP images with zero Cumulative Layout Shift (CLS). | Requires manual image compression and custom responsive `<picture>` tags. |
| **Contact API Routes** | Built-in `/api/contact` serverless route handlers if you ever want to connect Resend, SendGrid, or Nodemailer. | Requires an external backend or third-party service form action. |
| **Deployment Speed** | Under 45 seconds on Vercel with automatic Edge Network distribution. | Requires standard static hosting configuration. |

---

## 📂 Project Structure

```text
abinanth-portfolio/
├── app/
│   ├── globals.css         # Tailwind directives, custom glassmorphism & gradients
│   ├── layout.tsx          # Root layout with SEO meta tags & OpenGraph
│   └── page.tsx            # Assembled portfolio sections
├── components/
│   ├── Navbar.tsx          # Responsive sticky glassmorphism navigation
│   ├── Hero.tsx            # Intro, headshot photo, status pill, CTA buttons
│   ├── About.tsx           # Bio, Anna University education & architectural pillars
│   ├── Skills.tsx          # .NET, SQL Server, React, Angular, tools & soft skills
│   ├── Experience.tsx      # Techno Park internships (Faith Infotech, Shristi)
│   ├── Projects.tsx        # Hospital Management & RideCircle cards with GitHub links
│   ├── Contact.tsx         # Contact info, copy email button & inquiry form
│   └── Footer.tsx          # Copyright & developer credits
├── public/
│   ├── abinanth.jpg        # Profile headshot photo
│   └── resume.pdf          # Full downloadable resume
├── preview.html            # Standalone browser preview (double-click to view instantly!)
├── index.html              # Standalone web preview
├── tailwind.config.ts      # Custom theme colors, keyframes & font mappings
├── tsconfig.json           # Strict TypeScript configuration
├── package.json            # Project dependencies and run scripts
└── README.md               # Documentation and deployment guide
```

---

## 🚀 Quick Preview (Instant, No Installation Required)

You can preview the complete portfolio immediately in any web browser without needing Node.js installed:

1. Open File Explorer to:
   ```text
   C:\Users\ABINANTH\.gemini\antigravity\scratch\abinanth-portfolio
   ```
2. Double-click **`preview.html`** or **`index.html`**.
3. It will open directly in your browser with the dark aesthetic, your photo, animations, and interactive links.

---

## 💻 Local Development (Once Node.js is Installed)

To run the full Next.js development server:

```bash
# 1. Navigate to the project directory
cd "C:\Users\ABINANTH\.gemini\antigravity\scratch\abinanth-portfolio"

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the live Next.js application.

---

## 🌐 How to Deploy to Vercel (3 Easy Methods)

### Method 1: Deploy via GitHub (Recommended — 3 Minutes)

This gives you automatic deployments every time you push code updates:

1. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new) and name it `abinanth-portfolio`.
2. **Push your code**:
   ```bash
   cd "C:\Users\ABINANTH\.gemini\antigravity\scratch\abinanth-portfolio"
   git init
   git add .
   git commit -m "feat: initial commit of Abinanth portfolio"
   git branch -M main
   git remote add origin https://github.com/Abinanth258/abinanth-portfolio.git
   git push -u origin main
   ```
3. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Sign in with your GitHub account.
   - Click **Import** next to `abinanth-portfolio`.
   - Vercel automatically detects Next.js framework settings. Click **Deploy**.
   - In ~45 seconds, your site is live with a free SSL domain (e.g. `abinanth-portfolio.vercel.app`)!

---

### Method 2: Deploy using Vercel CLI

```bash
# 1. Install or run Vercel CLI directly
npx vercel

# 2. Follow the 4 prompt questions:
# ? Set up and deploy? [Y/n] y
# ? Which scope? [Your Account]
# ? Link to existing project? [N]
# ? What's your project's name? abinanth-portfolio

# 3. For production deployment:
npx vercel --prod
```

---

### Method 3: Direct Web Deploy (Vercel Drag & Drop)

If you want to deploy the static build or preview directly:
1. Log in to [vercel.com](https://vercel.com).
2. Go to your dashboard and drag the project folder directly onto the Vercel dashboard.

---

## 👤 Personal Details Configured

- **Name**: Abinanth K S
- **Email**: `abinanh258@gmail.com`
- **Phone**: `+91 9444685963`
- **Location**: Nagercoil / Thuckalay, Tamil Nadu, India
- **LinkedIn**: [linkedin.com/in/abinanth-k-s-8036a0342](https://www.linkedin.com/in/abinanth-k-s-8036a0342)
- **GitHub**: [github.com/Abinanth258](https://github.com/Abinanth258)
- **Education**: B.E. Computer Science & Engineering, St. Xavier's Catholic College of Engineering, Anna University (2021–2025)
- **Internships**: Faith Infotech (Techno Park) & Shristi Innovative (Techno Park)

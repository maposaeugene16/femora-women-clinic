# Aura Men & Women’s Clinic — Bulawayo, Zimbabwe

A modern, high-performance website and service catalog for **Aura Men & Women’s Clinic**, providing confidential men’s and women’s healthcare, fertility consultations, ultrasound scans, vitality therapy, and same-day discreet delivery across Bulawayo, Zimbabwe.

Built with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Fully static and serverless — requires no external database.

---

## Features

- **Bulawayo Localized Healthcare**: Tailored specifically for all suburbs in Bulawayo (CBD, Kumalo, Suburbs, Hillside, Cowdray Park, Nkulumane, Luveve, Pumula, etc.).
- **Zimbabwean Law Compliant**: Follows the Health Professions Council of Zimbabwe (HPCZ) and Medicines Control Authority of Zimbabwe (MCAZ) guidelines.
- **WhatsApp Direct Consultations**: One-tap pre-filled messages sent straight to the clinic's WhatsApp helpline (`+263 713 641 507`).
- **Local Photo Gallery**: 8-photo slideshow featuring registered doctors, compassionate nurses, regulated medications, and same-day delivery service.
- **100% Local Assets**: All pictures stored locally in `public/images/` — zero reliance on external image servers.
- **Instant Production-Ready Deployments**: Optimized for deployment on **Vercel** with automatic static generation.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure:
```env
NEXT_PUBLIC_SITE_URL=https://medication-website.vercel.app
# Optional analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build & Type Check
```bash
npm run typecheck
npm run build
```

---

## Deploying to Vercel

1. Push your changes to GitHub:
   ```bash
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **Add New Project** and select **`medication-website`**.
4. Keep the default settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
5. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` = `https://your-vercel-domain.vercel.app`
6. Click **Deploy**. Your site will be live globally in less than 2 minutes.

---

## Practice Information

- **Practice**: Aura Men & Women’s Clinic
- **City / Country**: Bulawayo, Zimbabwe
- **Phone / WhatsApp**: `+263 713 641 507`
- **Hours**: Monday – Sunday, 8:00 AM – 8:00 PM

# Femora Women’s Clinic — Bulawayo, Zimbabwe

A modern, high-performance website and healthcare service catalog for **Femora Women’s Clinic**, providing confidential women’s healthcare, fertility consultations, ultrasound scans, maternal wellness, menstrual & menopause care, and same-day discreet delivery across Bulawayo, Zimbabwe.

Developed by **Maps**.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**. Fully static and serverless — requires no external database.

---

## Features

- **Exclusively for Women**: Tailored consultations covering gynaecology, fertility, maternal care, menstrual cycle regularity, and menopause wellness.
- **Bulawayo Localized Healthcare**: Tailored specifically for all suburbs in Bulawayo (CBD, Kumalo, Suburbs, Hillside, Bradfield, Famona, Ascot, Morningside, Cowdray Park, Nkulumane, Luveve, Pumula, etc.).
- **Zimbabwean Law Compliant**: Follows the Health Professions Council of Zimbabwe (HPCZ) and Medicines Control Authority of Zimbabwe (MCAZ) regulations.
- **WhatsApp Direct Consultations**: One-tap pre-filled confidential messages sent straight to the clinic's WhatsApp helpline (`+263 713 641 507`).
- **Local Photo Gallery**: 8-photo slideshow featuring registered female doctors, nurses, regulated medicines, and discreet care.
- **100% Local Assets**: All pictures stored locally in `public/images/` — zero reliance on external image servers.
- **Crafted with Care**: Developed by Maps.

---

## Connecting to a New Git Repository

To ensure changes do **not** touch the original 1st system (`medication-website.git`), this project has been detached from that origin.

When you create your new GitHub repository (e.g. `femora-womens-clinic`):

```bash
# 1. Add your new repository remote
git remote add origin https://github.com/maposaeugene16/femora-womens-clinic.git

# 2. Stage and commit your changes
git add .
git commit -m "Initial commit for Femora Women's Clinic - Developed by Maps"

# 3. Push to your new repository
git push -u origin main
```

*(The original 1st system remains preserved at `aura-original` or its separate clone, untouched).*

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
NEXT_PUBLIC_SITE_URL=https://femora-clinic.vercel.app
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

## Practice Information

- **Practice**: Femora Women’s Clinic
- **City / Country**: Bulawayo, Zimbabwe
- **Phone / WhatsApp**: `+263 713 641 507`
- **Hours**: Monday – Sunday, 8:00 AM – 8:00 PM
- **Developed by**: Maps

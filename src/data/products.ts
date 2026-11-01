/**
 * Treatment and Service Catalog for Femora Women’s Clinic (Bulawayo, Zimbabwe).
 * Tailored exclusively for women's healthcare, fertility, maternal wellness, and confidential consultations.
 * All images stored locally in /public/images/ with zero external dependencies.
 */
export type Category = {
  slug: string;
  name: string;
  blurb: string;
};

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  summary: string;
  details?: string;
  image: string; // Local path from /public
  price?: string;
  featured?: boolean;
};

export const categories: Category[] = [
  {
    slug: "womens-health",
    name: "Gynaecology & Well-Woman Care",
    blurb:
      "Confidential well-woman clinical examinations, pelvic ultrasound scans, cervical screenings, and personalized preventive care in Bulawayo.",
  },
  {
    slug: "fertility-maternal",
    name: "Fertility & Maternal Health",
    blurb:
      "Compassionate fertility evaluations, ovulation tracking, prenatal monitoring, and gentle postnatal recovery support.",
  },
  {
    slug: "menstrual-hormone",
    name: "Menstrual Wellness & Menopause Care",
    blurb:
      "Doctor-guided diagnosis and therapeutic relief for irregular periods, PCOS, fibroids, hormone balancing, and graceful menopause transition.",
  },
  {
    slug: "confidential-care",
    name: "Discreet Medication & Bulawayo Delivery",
    blurb:
      "Private WhatsApp consultations, MCAZ-regulated female medications, contraceptives, and unmarked same-day courier delivery to all Bulawayo suburbs.",
  },
];

export const products: Product[] = [
  {
    slug: "womens-health-consultation",
    name: "Femora Well-Woman Comprehensive Consultation",
    categorySlug: "womens-health",
    summary:
      "Comprehensive doctor-led well-woman clinical examinations, cervical screening, pelvic ultrasound, and private health assessments.",
    details:
      "One-on-one confidential consultation with our registered female healthcare practitioners. Includes pelvic ultrasound imaging to examine uterine and ovarian anatomy, cervical screening (Pap smear / HPV guidance), breast health assessments, and tailored preventive wellness plans designed for every stage of a woman's life.",
    image: "/images/femora-womens-health-consultation.png",
    featured: true,
  },
  {
    slug: "fertility-ovulation-support",
    name: "Femora Fertility Support & Ovulation Consultation",
    categorySlug: "fertility-maternal",
    summary:
      "Compassionate fertility evaluations, ovulation tracking, reproductive hormone profiling, and personalized conception support.",
    details:
      "Confidential fertility guidance for women and couples preparing for pregnancy. We perform detailed pelvic ultrasound follicular tracking, ovarian reserve checks, hormonal balance analysis (FSH, LH, Progesterone), and compassionate counseling in a supportive, judgment-free clinical setting.",
    image: "/images/femora-fertility-consultation.png",
    featured: true,
  },
  {
    slug: "maternal-prenatal-postnatal-care",
    name: "Femora Maternal Care & Postnatal Healing",
    categorySlug: "fertility-maternal",
    summary:
      "Dedicated prenatal health checkups, trimester ultrasound scans, safe motherhood guidance, and postnatal recovery care.",
    details:
      "Complete maternal wellness for expectant and new mothers in Bulawayo. From early pregnancy ultrasound scans and nutritional counseling to postpartum recovery, uterine healing, breastfeeding guidance, and emotional health support.",
    image: "/images/femora-maternal-care-banner.png",
    featured: true,
  },
  {
    slug: "menstrual-wellness-pcos-care",
    name: "Femora Menstrual Wellness & Cycle Health",
    categorySlug: "menstrual-hormone",
    summary:
      "Doctor-guided diagnosis and relief for painful periods, irregular cycles, heavy bleeding, PCOS, and uterine fibroids.",
    details:
      "Break free from debilitating menstrual pain and unpredictable cycles. Our female healthcare practitioners specialize in identifying root causes, managing Polycystic Ovary Syndrome (PCOS), endometriosis, uterine fibroids, and balancing female hormones with clinical treatments.",
    image: "/images/femora-menstrual-wellness-consultation.png",
    featured: true,
  },
  {
    slug: "menopause-healthy-aging",
    name: "Femora Menopause Care & Healthy Aging",
    categorySlug: "menstrual-hormone",
    summary:
      "Individualized clinical support for perimenopause and menopause: hot flashes, hormone balancing, bone health, and renewed vitality.",
    details:
      "Navigate the menopause journey with grace, dignity, and clinical excellence. We provide personalized symptom relief, doctor-supervised hormone health advice, cardiovascular and bone density wellness, sleep improvement, and revitalizing lifestyle therapies.",
    image: "/images/femora-menopause-care-and-healthy-aging.png",
    featured: true,
  },
  {
    slug: "discreet-medication-arrangement",
    name: "Discreet Women's Medication & Bulawayo Delivery",
    categorySlug: "confidential-care",
    summary:
      "Doctor-arranged prescriptions, MCAZ-regulated female medications, contraceptives, and unmarked same-day doorstep delivery.",
    details:
      "Private and secure access to genuine medications approved by the Medicines Control Authority of Zimbabwe (MCAZ). Contraceptives, prenatal vitamins, hormone therapies, and intimate wellness treatments dispatched in plain, tamper-evident packages directly to your door anywhere in Bulawayo.",
    image: "/images/femora-medication-arrangement.png",
    featured: true,
  },
  {
    slug: "preventive-wellness-screenings",
    name: "Femora Preventive Health & Screening Campaign",
    categorySlug: "womens-health",
    summary:
      "Routine well-woman wellness panels, confidential STI/STD screening, anaemia checks, and preventative reproductive care.",
    details:
      "Proactive healthcare saves lives. Access confidential screenings for cervical health, confidential STI/STD panels, blood pressure, glucose, thyroid, and iron levels in a safe, judgment-free clinical environment.",
    image: "/images/femora-wellness-campaign.png",
    featured: false,
  },
  {
    slug: "holistic-womens-vitality-consultation",
    name: "Femora Holistic Women's Wellness & Lifestyle",
    categorySlug: "womens-health",
    summary:
      "Doctor-supervised holistic wellness, female vitality, metabolic health, digestive comfort, and confidential counseling.",
    details:
      "Reclaim your energy, confidence, and internal balance. Our clinical team helps you develop sustainable habits, healthy body composition, pelvic tone, stress resilience, and complete female vitality.",
    image: "/images/femora-wellness-consultation.png",
    featured: false,
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug);
export const getFeaturedProducts = () => products.filter((p) => p.featured);

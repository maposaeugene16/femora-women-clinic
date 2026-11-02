export type GalleryImage = {
  id: number;
  url: string; // Local path from /public
  title: string;
  category: "Doctor" | "Nurse" | "Medicines" | "Clinical Care";
  caption: string;
  tagline?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: "/images/femora-womens-health-consultation.png",
    title: "Doctor-Led Well-Woman Consultation",
    category: "Doctor",
    tagline: "Private Consultations with Dr. Selena",
    caption:
      "Dr. Selena conducting comprehensive well-woman health examinations, ultrasound scans, and confidential medical consultations across Zimbabwe.",
  },
  {
    id: 2,
    url: "/images/femora-fertility-consultation.png",
    title: "Compassionate Fertility Consultation",
    category: "Doctor",
    tagline: "Ovulation & Conception Guidance",
    caption:
      "Specialized reproductive evaluations, ovulation tracking, hormone profiling, and personalized fertility support tailored by Dr. Selena.",
  },
  {
    id: 3,
    url: "/images/femora-maternal-care-banner.png",
    title: "Maternal Health & Safe Pregnancy Care",
    category: "Clinical Care",
    tagline: "Prenatal & Postnatal Healing",
    caption:
      "Dedicated prenatal health checkups, trimester ultrasound scans, breastfeeding support, and gentle postpartum uterine recovery care.",
  },
  {
    id: 4,
    url: "/images/femora-menstrual-wellness-consultation.png",
    title: "Menstrual Wellness & Hormone Relief",
    category: "Doctor",
    tagline: "PCOS, Fibroids & Cycle Care",
    caption:
      "Clinical diagnosis and therapeutic relief for painful periods, irregular cycles, PCOS, and uterine fibroid management with Dr. Selena.",
  },
  {
    id: 5,
    url: "/images/femora-menopause-care-and-healthy-aging.png",
    title: "Menopause Care & Graceful Aging",
    category: "Clinical Care",
    tagline: "Hormone Harmony & Vitality",
    caption:
      "Comprehensive clinical support for perimenopause and menopause transition: hot flashes, hormone balancing, bone health, and renewed vitality.",
  },
  {
    id: 6,
    url: "/images/femora-medication-arrangement.png",
    title: "Regulated Medication & Discreet Delivery",
    category: "Medicines",
    tagline: "Discreet Delivery to All 17 Locations",
    caption:
      "MCAZ-approved prescriptions, contraceptives, and female vitality treatments packaged in plain, unbranded parcels with nationwide courier dispatch.",
  },
  {
    id: 7,
    url: "/images/femora-wellness-campaign.png",
    title: "Preventative Women's Health Screenings",
    category: "Nurse",
    tagline: "Cervical & Routine Wellness Panels",
    caption:
      "Gentle Pap smears, confidential STI panels, breast examinations, and routine checkups conducted in a supportive, judgment-free environment.",
  },
  {
    id: 8,
    url: "/images/femora-wellness-consultation.png",
    title: "Holistic Female Wellness & Counseling",
    category: "Clinical Care",
    tagline: "Metabolism, Energy & Self-Care",
    caption:
      "Private consultations focused on metabolic health, stress resilience, uterine wellness, and total feminine confidence led by Dr. Selena.",
  },
];

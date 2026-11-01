export type GalleryImage = {
  id: number;
  url: string; // Local path from /public
  title: string;
  category: "Doctor" | "Nurse" | "Medicines" | "Clinical Care";
  caption: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: "/images/femora-womens-health-consultation.png",
    title: "Doctor-Led Well-Woman Consultation",
    category: "Doctor",
    caption:
      "Registered female medical practitioners conducting comprehensive health examinations, ultrasound scans, and private consultations in Bulawayo.",
  },
  {
    id: 2,
    url: "/images/femora-fertility-consultation.png",
    title: "Compassionate Fertility Consultation",
    category: "Doctor",
    caption:
      "Specialized reproductive evaluations, ovulation tracking, hormone profiling, and fertility counseling tailored for women and couples.",
  },
  {
    id: 3,
    url: "/images/femora-maternal-care-banner.png",
    title: "Maternal Health & Safe Pregnancy Care",
    category: "Clinical Care",
    caption:
      "Dedicated prenatal monitoring, ultrasound imaging, and gentle postnatal healing in a comfortable, supportive clinical environment.",
  },
  {
    id: 4,
    url: "/images/femora-menstrual-wellness-consultation.png",
    title: "Menstrual Wellness & Hormone Relief",
    category: "Doctor",
    caption:
      "Clinical diagnosis and targeted treatment for painful periods, irregular cycles, PCOS, and uterine fibroid management.",
  },
  {
    id: 5,
    url: "/images/femora-menopause-care-and-healthy-aging.png",
    title: "Menopause Care & Graceful Aging",
    category: "Clinical Care",
    caption:
      "Comprehensive clinical support for hormonal balance, hot flashes, bone density, and renewed vitality through midlife and beyond.",
  },
  {
    id: 6,
    url: "/images/femora-medication-arrangement.png",
    title: "Regulated Medication & Discreet Delivery",
    category: "Medicines",
    caption:
      "MCAZ-approved prescriptions, contraceptives, and female vitality treatments packaged in plain, unbranded parcels across Bulawayo.",
  },
  {
    id: 7,
    url: "/images/femora-wellness-campaign.png",
    title: "Preventative Women's Health Screenings",
    category: "Nurse",
    caption:
      "Gentle Pap smears, confidential STI testing panels, breast examinations, and routine checkups conducted by compassionate nursing staff.",
  },
  {
    id: 8,
    url: "/images/femora-wellness-consultation.png",
    title: "Holistic Female Wellness & Counseling",
    category: "Clinical Care",
    caption:
      "Private consultations focused on metabolic health, stress resilience, uterine wellness, and total feminine confidence.",
  },
];

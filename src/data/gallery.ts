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
    url: "/images/file_000000002478821185cf415b4a7cdc36.png",
    title: "Aura Men & Women’s Clinical Team",
    category: "Doctor",
    caption:
      "Registered physicians and qualified nurses providing confidential healthcare for men and women in Bulawayo.",
  },
  {
    id: 2,
    url: "/images/01_womens_reproductive_health.jpg",
    title: "Doctor Ultrasound & Reproductive Care",
    category: "Doctor",
    caption:
      "Female medical doctor reviewing digital ultrasound scans and reproductive wellness plans with a patient.",
  },
  {
    id: 3,
    url: "/images/file_0000000036088211bde156a4bd1fe16e.png",
    title: "Men’s Boost Performance Medication",
    category: "Medicines",
    caption:
      "Natural performance capsules formulated to increase male stamina, power, and physical confidence.",
  },
  {
    id: 4,
    url: "/images/post_miscarriage_uterine_wellness_care.jpg",
    title: "Compassionate Post-Care Nursing",
    category: "Nurse",
    caption:
      "Empathetic counseling, emotional support, and uterine healing checkups following pregnancy loss or complications.",
  },
  {
    id: 5,
    url: "/images/file_00000000911882118f70b9289737f012.png",
    title: "Women’s Body Shaping & Flat Tummy",
    category: "Clinical Care",
    caption:
      "Doctor-guided consultations on metabolism, healthy appetite control, and personalized body goal support.",
  },
  {
    id: 6,
    url: "/images/mens_vitality_performance_therapy.jpg",
    title: "Men’s Vitality & Health Consultation",
    category: "Doctor",
    caption:
      "Private discussions on male hormonal balance, performance confidence, and overall vitality.",
  },
  {
    id: 7,
    url: "/images/file_000000009fa88211b8c65e411d17610f.png",
    title: "Women’s Boost Vitality Capsules",
    category: "Medicines",
    caption:
      "Natural dietary supplements formulated for women's hormonal balance, refreshed energy, and daily wellbeing.",
  },
  {
    id: 8,
    url: "/images/same_day_discreet_delivery_bulawayo.jpg",
    title: "Same-Day Discreet Delivery in Bulawayo",
    category: "Clinical Care",
    caption:
      "Unbranded, plain-bag delivery direct to your doorstep across all western and eastern Bulawayo suburbs.",
  },
];

/**
 * Treatment and Service Catalog for Aura Men & Women’s Clinic (Bulawayo, Zimbabwe).
 * All images are stored locally in /public/images/ with zero online dependencies.
 * Descriptions accurately reflect the clinical content depicted on each respective image.
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
    name: "Women's Health & Wellness",
    blurb:
      "Confidential care for reproductive health, ultrasound scans, family planning, body shaping, and post-pregnancy recovery in Bulawayo.",
  },
  {
    slug: "mens-health",
    name: "Men's Health & Vitality",
    blurb:
      "Discreet solutions for male performance, boost pills, organ enhancement therapy, stamina, and doctor consultations.",
  },
  {
    slug: "confidential-care",
    name: "Confidential Testing & Delivery",
    blurb:
      "Private WhatsApp consultations, comprehensive STI/STD panels, and unmarked same-day courier delivery to all Bulawayo suburbs.",
  },
];

export const products: Product[] = [
  {
    slug: "womens-fertility-reproductive-consultation",
    name: "Women's Reproductive Health & Ultrasound Scan",
    categorySlug: "womens-health",
    summary:
      "Digital ultrasound examination, reproductive anatomy evaluation, menstrual cycle regularity, and fertility consultation.",
    details:
      "One-on-one clinical consultation with our registered female medical doctor. Includes digital ultrasound imaging to examine uterine and pelvic anatomy, diagnose irregular or painful menses, balance reproductive hormones, and guide pregnancy planning in complete privacy.",
    image: "/images/01_womens_reproductive_health.jpg",
    featured: true,
  },
  {
    slug: "family-planning-contraceptive-guidance",
    name: "Family Planning & Contraceptive Guidance",
    categorySlug: "womens-health",
    summary:
      "Safe, confidential guidance on oral contraceptive pills, injectables, implants, IUDs, and condoms tailored to your choices.",
    details:
      "Consult privately with our clinical team on modern family planning options. We provide doctor-supervised advice on oral contraceptive pills, long-acting hormonal injectables, subdermal implants, intrauterine devices (IUDs), and barrier methods according to Zimbabwean healthcare standards.",
    image: "/images/family_planning_contraceptive_guidance.jpg",
    featured: true,
  },
  {
    slug: "post-pregnancy-womb-wellness",
    name: "Post-Miscarriage & Uterine Wellness Care",
    categorySlug: "womens-health",
    summary:
      "Compassionate medical recovery, empathetic counseling, uterine health checks, and emotional healing support.",
    details:
      "Support, healing, and hope. Dedicated medical care for women experiencing miscarriage, pregnancy loss, or uterine discomfort. Our clinical staff provides gentle uterine examinations, infection prevention, emotional support, and future fertility planning in a warm, non-judgmental environment.",
    image: "/images/post_miscarriage_uterine_wellness_care.jpg",
    featured: true,
  },
  {
    slug: "womens-boost-pills-vitality",
    name: "Aura Women's Boost Pills (Health & Vitality)",
    categorySlug: "womens-health",
    summary:
      "Natural support for female vitality, hormonal balance, refreshed energy, healthy skin, hair, and weight management.",
    details:
      "Aura Women's Boost Pills are formulated with natural ingredients to support healthy hormone balance, boost daily vitality, support metabolism, and enhance overall feminine wellbeing. Packaged in sealed 60-capsule bottles with doctor-guided dosage instructions.",
    image: "/images/file_000000009fa88211b8c65e411d17610f.png",
    featured: true,
  },
  {
    slug: "womens-weight-management-flat-tummy",
    name: "Women's Weight Management & Flat Tummy Support",
    categorySlug: "womens-health",
    summary:
      "Doctor-guided body shaping support, flat tummy pills, metabolism boosters, and appetite control for your body goals.",
    details:
      "Achieve your body goals with healthy, structured clinical guidance. Our doctor evaluates your metabolic health and recommends safe flat tummy support, digestive bloat reduction, appetite control, and body shaping programs designed for lasting confidence.",
    image: "/images/file_00000000911882118f70b9289737f012.png",
    featured: false,
  },
  {
    slug: "mens-vitality-performance-therapy",
    name: "Men's Vitality & Performance Therapy",
    categorySlug: "mens-health",
    summary:
      "Doctor-guided clinical therapy for male hormonal balance, erectile stamina, performance anxiety, and sexual wellness.",
    details:
      "Private, stigma-free consultation with our experienced male health doctor. We diagnose and treat erectile dysfunction, premature climax, low testosterone levels, and physical fatigue using proven clinical therapies tailored to your lifestyle.",
    image: "/images/mens_vitality_performance_therapy.jpg",
    featured: true,
  },
  {
    slug: "mens-boost-performance-pills",
    name: "Aura Men's Boost Performance Pills",
    categorySlug: "mens-health",
    summary:
      "More power, more stamina, and better endurance. Natural male performance pills for enhanced confidence and vitality.",
    details:
      "Aura Men's Boost Performance Pills provide targeted nutritional support to increase physical stamina, boost endurance, improve performance, and enhance male drive. Available in 30-capsule sealed bottles compliant with Zimbabwean safety standards.",
    image: "/images/file_0000000036088211bde156a4bd1fe16e.png",
    featured: true,
  },
  {
    slug: "mens-organ-enlargement-vitality",
    name: "Men's Enhancement & Confidence Therapy",
    categorySlug: "mens-health",
    summary:
      "Safe and effective medical options for male organ enhancement, improved stamina, and restored confidence.",
    details:
      "Professional and confidential care by registered doctors. Our service includes safe and effective treatment options, improved performance and stamina, enhanced confidence, and comprehensive male vitality therapy in our private Bulawayo practice.",
    image: "/images/file_000000002478821185cf415b4a7cdc36.png",
    featured: false,
  },
  {
    slug: "confidential-sti-testing-treatment",
    name: "Confidential STI / STD Screening & Treatment",
    categorySlug: "confidential-care",
    summary:
      "Discreet diagnostic testing, rapid confidential results, counseling, and targeted treatment for men and women.",
    details:
      "Know your status in total privacy. We provide rapid diagnostic testing for common sexually transmitted infections, comprehensive syndromic management, post-exposure counseling, and partner therapies in a secure, clinical setting.",
    image: "/images/confidential_sti_std_screening_treatment.jpg",
    featured: true,
  },
  {
    slug: "same-day-discreet-delivery-bulawayo",
    name: "Same-Day Discreet Delivery (All Bulawayo Suburbs)",
    categorySlug: "confidential-care",
    summary:
      "Unbranded, plain-package courier delivery direct to your doorstep across all western and eastern Bulawayo suburbs.",
    details:
      "Delivered with care and 100% confidentiality. Prescriptions, wellness products, and test kits arrive in sealed, completely plain bags without any external medical markings. Our dedicated courier covers Kumalo, Hillside, CBD, Cowdray Park, Nkulumane, and all surrounding areas.",
    image: "/images/same_day_discreet_delivery_bulawayo.jpg",
    featured: true,
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (slug: string) =>
  products.filter((p) => p.categorySlug === slug);
export const getFeaturedProducts = () => products.filter((p) => p.featured);

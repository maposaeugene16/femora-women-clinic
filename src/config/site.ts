/**
 * Practice configuration for Aura Men & Women’s Clinic (Bulawayo, Zimbabwe).
 * WhatsApp number: international digits without '+' (263713641507).
 */
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  doctorName: "Dr. Moyo & Clinical Team",
  practiceName: "Aura Men & Women’s Clinic",
  tagline: "Confidential Men & Women’s Health, Wellness & Private Consultations in Bulawayo",
  description:
    "Discreet medical care for men and women across Bulawayo, Zimbabwe. Reproductive health, fertility support, STI testing, pregnancy care, men's vitality, and private WhatsApp consultations compliant with Zimbabwean medical laws.",
  city: "Bulawayo",
  province: "Bulawayo Province",
  country: "ZW",
  countryName: "Zimbabwe",
  whatsappNumber: "263713641507",
  phoneDisplay: "+263 713 641 507",
  registrationNumber: "HPCZ & MCAZ Compliant · Registered Zimbabwean Healthcare Practice",

  // Pre-filled WhatsApp messages. {doctor} and {product} are replaced automatically.
  productMessage: "Hello {doctor}, I would like confidential information regarding {product} at Aura Men & Women's Clinic in Bulawayo.",
  generalMessage: "Hello {doctor}, I would like to make a private and confidential medical enquiry at Aura Men & Women's Clinic in Bulawayo.",

  // Keep true or false depending on display
  showPrices: false,
} as const;

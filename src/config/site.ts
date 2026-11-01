/**
 * Practice configuration for Femora Women’s Clinic (Bulawayo, Zimbabwe).
 * WhatsApp number: international digits without '+' (263713641507).
 */
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  doctorName: "Dr. Moyo & Female Clinical Team",
  practiceName: "Femora Women’s Clinic",
  tagline: "Confidential Women’s Health, Fertility, Maternal Wellness & Private Consultations in Bulawayo",
  description:
    "Discreet and compassionate medical care exclusively for women across Bulawayo, Zimbabwe. Fertility support, ultrasound scans, menstrual wellness, menopause care, maternal health, and private WhatsApp consultations compliant with Zimbabwean medical laws.",
  city: "Bulawayo",
  province: "Bulawayo Province",
  country: "ZW",
  countryName: "Zimbabwe",
  whatsappNumber: "263713641507",
  phoneDisplay: "+263 713 641 507",
  registrationNumber: "HPCZ & MCAZ Compliant · Registered Zimbabwean Healthcare Practice",

  // Pre-filled WhatsApp messages. {doctor} and {product} are replaced automatically.
  productMessage: "Hello {doctor}, I would like confidential information regarding {product} at Femora Women's Clinic in Bulawayo.",
  generalMessage: "Hello {doctor}, I would like to make a private and confidential enquiry at Femora Women's Clinic in Bulawayo.",

  // Keep true or false depending on display
  showPrices: false,
} as const;

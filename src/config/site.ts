/**
 * Practice configuration for Femora Women’s Clinic.
 * Led by Dr. Selena with services across Harare, Bulawayo, and nationwide Zimbabwe.
 * WhatsApp number: international digits without '+' (263790261823).
 */
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  doctorName: "Dr. Selena",
  practiceName: "Femora Women’s Clinic",
  tagline: "Confidential Women’s Health, Fertility, Maternal Wellness & Private Consultations by Dr. Selena",
  description:
    "Discreet and compassionate medical care exclusively for women led by Dr. Selena. Providing private consultations, ultrasound scans, menstrual wellness, fertility care, and discreet medication delivery across Harare, Bulawayo, Mutare, Gweru, Masvingo, Kadoma, and nationwide Zimbabwe in compliance with Zimbabwean medical laws.",
  city: "Harare & Bulawayo",
  province: "Zimbabwe Nationwide",
  country: "ZW",
  countryName: "Zimbabwe",
  whatsappNumber: "263790261823",
  phoneDisplay: "+263 790 261 823",
  registrationNumber: "HPCZ & MCAZ Compliant · Registered Zimbabwean Healthcare Practice",

  // Pre-filled WhatsApp messages. {doctor} and {product} are replaced automatically.
  productMessage: "Hello {doctor}, I would like confidential information regarding {product} at Femora Women's Clinic.",
  generalMessage: "Hello {doctor}, I would like to make a private and confidential enquiry at Femora Women's Clinic.",

  // Keep true or false depending on display
  showPrices: false,
} as const;

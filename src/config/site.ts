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

  // Developer contact information (Maps)
  developer: {
    name: "Maps",
    phone: "+263 775 126 513",
    whatsappNumber: "263775126513",
    chatLink:
      "https://wa.me/263775126513?text=Hello%20Maps%2C%20I%20saw%20your%20software%20development%20work%20on%20the%20Femora%20platform%20and%20would%20like%20to%20inquire%20about%20developing%20a%20project.",
  },

  // Pre-filled WhatsApp messages. {doctor} and {product} are replaced automatically.
  productMessage: "Hello {doctor}, I would like confidential information regarding {product} at Femora Women's Clinic.",
  generalMessage: "Hello {doctor}, I would like to make a private and confidential enquiry at Femora Women's Clinic.",

  // Keep true or false depending on display
  showPrices: false,
} as const;

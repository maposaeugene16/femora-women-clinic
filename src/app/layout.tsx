import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.practiceName} | Bulawayo, Zimbabwe`,
    template: `%s | ${site.practiceName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.practiceName,
    title: `${site.practiceName} | Bulawayo, Zimbabwe`,
    description: site.description,
    locale: "en_ZW",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        {plausibleDomain && (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton variant="floating" label="Chat with Doctor" />
      </body>
    </html>
  );
}

import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="mt-24 bg-deep text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="relative mb-4 h-12 w-44 rounded-lg bg-white/95 p-1 shadow-sm">
            <Image
              src="/images/logo.png"
              alt={site.practiceName}
              fill
              className="object-contain p-1"
            />
          </div>
          <p className="font-serif text-2xl text-white">{site.practiceName}</p>
          <p className="mt-3 text-sm text-white/70">{site.tagline}</p>
          <p className="mt-4 inline-block rounded-md bg-white/10 px-3 py-1.5 text-xs text-gold">
            {site.registrationNumber}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Healthcare Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`} className="hover:text-white transition">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#gallery" className="hover:text-white transition">
                Doctor & Nurse Photo Gallery
              </Link>
            </li>
            <li>
              <Link href="/#locations" className="hover:text-white transition">
                All Bulawayo Suburbs & Delivery
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Direct Contact</p>
          <p className="mt-3 text-sm">{site.city}, Zimbabwe</p>
          <p className="text-sm text-white font-medium mt-1">Helpline / WhatsApp: {site.phoneDisplay}</p>
          <p className="text-xs text-white/60 mt-1">Discreet Consultations: Mon – Sun (8:00 AM – 8:00 PM)</p>
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 text-xs text-[#a2d8a6]">
              <span className="h-2 w-2 rounded-full bg-[#3cd070] animate-pulse" />
              Bulawayo Clinical Staff Online on WhatsApp
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/60">
        Aura Men & Women’s Clinic operates in strict compliance with the Health Professions Act of Zimbabwe, the Medicines Control Authority of Zimbabwe (MCAZ), and Zimbabwean public health legislation. All patient records, consultations, and test results are held in absolute medical confidentiality. In severe emergencies, please report to United Bulawayo Hospitals (UBH) or Mpilo Central Hospital casualty departments.
      </div>
    </footer>
  );
}

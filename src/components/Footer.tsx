import Link from "next/link";
import { site } from "@/config/site";
import { categories } from "@/data/products";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="mt-24 bg-deep text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="mb-4">
            <BrandLogo variant="dark" />
          </div>
          <p className="mt-3 text-sm text-white/70">{site.tagline}</p>
          <p className="mt-4 inline-block rounded-md bg-white/10 px-3 py-1.5 text-xs text-gold">
            {site.registrationNumber}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Women’s Health Services</p>
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
                Doctor &amp; Clinic Photo Gallery
              </Link>
            </li>
            <li>
              <Link href="/#locations" className="hover:text-white transition">
                All 17 Nationwide Locations &amp; Delivery
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Direct Contact</p>
          <p className="mt-3 text-sm">{site.city}, Zimbabwe</p>
          <p className="text-sm text-white font-medium mt-1">Direct / WhatsApp: {site.phoneDisplay}</p>
          <p className="text-xs text-white/60 mt-1">Confidential Consultations: Mon – Sun (8:00 AM – 8:00 PM)</p>
          <div className="mt-4">
            <span className="inline-flex items-center gap-2 text-xs text-[#f3d1a4]">
              <span className="h-2 w-2 rounded-full bg-[#3cd070] animate-pulse" />
              Dr. Selena Online on WhatsApp
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {site.practiceName}. All rights reserved.</p>
          <p className="font-medium text-white/80">
            Developed by{" "}
            <a
              href={site.developer.chatLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Contact Maps for software development"
              className="text-gold font-semibold hover:underline decoration-gold/60 transition cursor-pointer"
            >
              {site.developer.name}
            </a>
          </p>
        </div>
        <p className="mx-auto mt-4 max-w-6xl text-[11px] leading-relaxed text-white/50 text-center sm:text-left">
          {site.practiceName} operates in strict compliance with the Health Professions Act of Zimbabwe, the Medicines Control Authority of Zimbabwe (MCAZ), and Zimbabwean public health legislation. All patient records, consultations, and test results are held in absolute medical confidentiality. In severe emergencies, please report immediately to Parirenyatwa Hospital (Harare), UBH / Mpilo (Bulawayo), or your nearest provincial casualty department.
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { site } from "@/config/site";
import WhatsAppButton from "./WhatsAppButton";

const links = [
  { href: "/#treatments", label: "Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#locations", label: "Bulawayo Suburbs" },
  { href: "/#how", label: "How It Works" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-deep text-gold" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
          <div>
            <span className="block font-serif text-lg leading-tight text-ink">{site.practiceName}</span>
            <span className="block text-[11px] font-medium tracking-wide text-brand uppercase">
              Bulawayo · Zimbabwe
            </span>
          </div>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted transition hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneDisplay.replace(/\s+/g, "")}`}
            className="hidden text-xs font-semibold text-deep lg:block hover:underline"
          >
            {site.phoneDisplay}
          </a>
          <WhatsAppButton label="WhatsApp Us" variant="solid" className="!px-4 !py-2 text-xs sm:text-sm" />
        </div>
      </div>
    </header>
  );
}

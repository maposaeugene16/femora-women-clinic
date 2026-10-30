import Link from "next/link";
import Image from "next/image";
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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2.5">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-36 sm:w-44">
            <Image
              src="/images/logo.png"
              alt={site.practiceName}
              fill
              priority
              className="object-contain object-left"
            />
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

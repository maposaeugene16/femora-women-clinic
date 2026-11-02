import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";
import { categories, getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import GallerySlideshow from "@/components/GallerySlideshow";
import LocationsSection from "@/components/LocationsSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const faqs = [
  {
    q: "Is my consultation with Dr. Selena completely confidential?",
    a: "Yes, 100%. All communications go directly to Dr. Selena via encrypted WhatsApp (+263 790 261 823). We maintain strict doctor-patient confidentiality with zero records or details shared publicly.",
  },
  {
    q: "Do all services comply with Zimbabwean healthcare regulations?",
    a: "Yes. All clinical consultations, reproductive healthcare guidance, and prescribed medications strictly adhere to Zimbabwean law, the Health Professions Council of Zimbabwe (HPCZ), and Medicines Control Authority of Zimbabwe (MCAZ) regulations.",
  },
  {
    q: "Which locations does Dr. Selena operate in across Zimbabwe?",
    a: "Dr. Selena operates across 17 primary locations: Harare (and satellite towns like Chitungwiza, Ruwa, Norton), Bulawayo, Mutare, Gweru, Masvingo, Kadoma, Kwekwe, Chegutu, Chinhoyi, Marondera, Zvishavane, Bindura, Rusape, Chiredzi, Chipinge, Chivhu, and Murehwa, with in-person care and discreet courier delivery.",
  },
  {
    q: "What specialized women's healthcare services does Dr. Selena offer?",
    a: "Dr. Selena provides well-woman clinical examinations, fertility evaluations and ovulation tracking, prenatal and postnatal maternal support, menstrual wellness and PCOS management, menopause symptom relief, cervical screenings, and confidential STI testing.",
  },
  {
    q: "Can Dr. Selena assist with irregular periods, PCOS, and fertility challenges?",
    a: "Absolutely. Dr. Selena provides thorough hormonal evaluations, pelvic ultrasound scans, cycle tracking, and tailored clinical treatments to alleviate menstrual pain, regulate cycles, and support natural conception.",
  },
  {
    q: "How does discreet medication delivery work across the 17 towns?",
    a: "Following your confidential consultation with Dr. Selena, prescribed treatments, contraceptives, or wellness supplies are dispatched in completely unbranded, tamper-evident plain packaging via our trusted courier directly to your address in any of the 17 operational hubs.",
  },
];

const steps = [
  {
    n: "01",
    t: "Choose Your Care",
    d: "Browse our women's health treatments or request a private consultation with Dr. Selena on WhatsApp (+263 790 261 823).",
  },
  {
    n: "02",
    t: "Speak with Dr. Selena",
    d: "Connect one-on-one with Dr. Selena on WhatsApp. Discuss symptoms, cycles, fertility, or care plans in 100% privacy.",
  },
  {
    n: "03",
    t: "Appointment or Delivery",
    d: "Arrange an in-person consultation or opt for unbranded same-day plain-box delivery to your doorstep in any of our 17 nationwide locations.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const sample = featured[0]?.name ?? "Women's Health Consultation";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.practiceName,
    url: site.url,
    telephone: site.phoneDisplay,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Harare & Bulawayo",
      addressRegion: "Zimbabwe",
      addressCountry: site.country,
    },
    openingHours: "Mo-Su 08:00-20:00",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO SECTION */}
      <section className="hero-bg relative overflow-hidden border-b border-line/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
          <div>
            <div className="rise flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-1.5 text-xs font-semibold text-deep shadow-xs">
                <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                Dr. Selena · Registered Zimbabwean Practitioner
              </span>
              <span className="rounded-full bg-sand/70 px-3 py-1 text-xs font-medium text-deep">
                HPCZ &amp; MCAZ Compliant
              </span>
            </div>

            <h1 className="rise rise-2 mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-ink font-serif">
              Femora Women’s Clinic, <br />
              <em className="text-brand not-italic">Led by Dr. Selena</em>
            </h1>

            <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Private, respectful, and confidential medical care exclusively for women across Harare, Bulawayo, and 17 nationwide locations in Zimbabwe. From reproductive health, ultrasound scans, and fertility support to menstrual wellness and discreet medication delivery.
            </p>

            <div className="rise rise-3 mt-8 flex flex-wrap gap-4">
              <WhatsAppButton
                label="WhatsApp Dr. Selena Directly"
                className="!px-7 !py-4 text-base shadow-md"
              />
              <Link
                href="/#gallery"
                className="inline-flex items-center rounded-full border border-deep/30 bg-white/60 px-7 py-4 font-medium text-deep transition hover:bg-deep hover:text-white"
              >
                View Clinical Gallery
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-3 text-sm font-medium text-deep sm:flex sm:flex-wrap sm:gap-x-8">
              {[
                "100% Confidential",
                "Women-Only Healthcare",
                "17 Nationwide Hubs",
                "Discreet Plain-Box Delivery",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brand shrink-0"
                    aria-hidden="true"
                  >
                    <path d="m5 12 5 5 9-10" />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* HERO VISUAL & CHAT PREVIEW */}
          <div className="rise rise-3 mx-auto w-full max-w-md space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-white shadow-xl">
              <div className="relative h-48 w-full sm:h-56">
                <Image
                  src="/images/femora-womens-health-consultation.png"
                  alt="Dr. Selena Femora Women's Clinic consultations"
                  fill
                  priority
                  sizes="(max-width: 600px) 100vw, 450px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="text-xs uppercase tracking-wider font-semibold text-gold">Dr. Selena · Zimbabwe Practice</p>
                  <p className="font-serif text-lg leading-tight">Private Consultations · Exclusively for Women</p>
                </div>
              </div>

              {/* Chat Simulation Box */}
              <div className="bg-deep p-5 text-white">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gold font-serif text-sm font-bold text-ink">
                    DS
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{site.practiceName} · Dr. Selena</p>
                    <p className="text-[11px] text-[#f3d1a4] flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3cd070]" /> Doctor Online ({site.phoneDisplay})
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-xs sm:text-sm">
                  <div className="ml-auto w-fit max-w-[90%] rounded-2xl rounded-br-xs bg-[#fdeef2] px-4 py-2.5 text-ink shadow-xs">
                    Hello Dr. Selena, I would like a confidential women&apos;s health consultation regarding {sample}.
                  </div>
                  <div className="w-fit max-w-[90%] rounded-2xl rounded-bl-xs bg-white/10 px-4 py-2.5 text-white shadow-xs">
                    Hello, welcome to Femora Women&apos;s Clinic. I am Dr. Selena. All conversations are 100% private. How may I assist you today?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST PILLARS SECTION */}
      <section className="bg-white border-b border-line/60 py-10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-line/60 bg-paper/50 p-5">
              <span className="font-serif text-2xl text-gold">100%</span>
              <h3 className="mt-2 text-base font-bold text-ink">Women-Only Sanctuary</h3>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Dedicated exclusively to women&apos;s health, hormonal wellbeing, and maternal care with total dignity and zero judgment.
              </p>
            </div>
            <div className="rounded-xl border border-line/60 bg-paper/50 p-5">
              <span className="font-serif text-2xl text-gold">HPCZ</span>
              <h3 className="mt-2 text-base font-bold text-ink">Dr. Selena (Registered)</h3>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Consultations conducted directly by certified Zimbabwean female doctor and qualified healthcare professionals.
              </p>
            </div>
            <div className="rounded-xl border border-line/60 bg-paper/50 p-5">
              <span className="font-serif text-2xl text-gold">MCAZ</span>
              <h3 className="mt-2 text-base font-bold text-ink">Regulated Pharmacy</h3>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                All medications, contraceptives, and reproductive wellness treatments comply with MCAZ national standards.
              </p>
            </div>
            <div className="rounded-xl border border-line/60 bg-paper/50 p-5">
              <span className="font-serif text-2xl text-gold">17 Hubs</span>
              <h3 className="mt-2 text-base font-bold text-ink">Nationwide Delivery</h3>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Same-day plain-box discreet courier dispatch across Harare, Bulawayo, Mutare, Gweru, Masvingo, and 12 more hubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT CATEGORIES */}
      <section id="treatments" className="mx-auto mt-24 max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Clinical Services</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Specialized Healthcare Exclusively for Women</h2>
          <p className="mt-3 text-muted">
            Explore our specialized clinical care pathways designed for privacy, compassionate support, and women&apos;s health empowerment across Zimbabwe.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <li key={c.slug}>
              <Link
                href={`/category/${c.slug}`}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-deep p-7 text-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <span className="font-serif text-4xl text-gold/70">0{i + 1}</span>
                  <span className="mt-5 block font-serif text-2xl leading-tight">{c.name}</span>
                  <span className="mt-3 block text-sm text-white/70 leading-relaxed">{c.blurb}</span>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Explore Services <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* FEATURED SERVICES WITH PICTURES */}
      {featured.length > 0 && (
        <section className="mx-auto mt-24 max-w-6xl px-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">Featured Services</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Popular Women&apos;s Health Treatments</h2>
            </div>
            <WhatsAppButton
              label="Ask Dr. Selena About Any Service"
              variant="outline"
              className="w-fit !text-xs !py-2.5"
            />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* UNIQUE MAGAZINE/STUDIO SLIDESHOW GALLERY */}
      <GallerySlideshow />

      {/* NATIONWIDE 17-LOCATION NETWORK COVERAGE */}
      <LocationsSection />

      {/* HOW IT WORKS */}
      <section id="how" className="mx-auto mt-24 max-w-6xl px-5">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Simple &amp; Discreet</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">How to access our clinic</h2>
          <p className="mt-3 text-muted text-sm sm:text-base">
            Safe, respectful healthcare accessible directly from your phone anywhere in Zimbabwe.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-line bg-white p-7 shadow-xs">
              <span className="font-serif text-4xl text-gold">{s.n}</span>
              <h3 className="mt-4 font-serif text-xl text-ink">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="mx-auto mt-24 max-w-3xl px-5">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Common Questions</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-2 text-sm text-muted">
            Information regarding consultations with Dr. Selena, privacy, Zimbabwean regulations, and nationwide delivery.
          </p>
        </div>

        <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white shadow-xs">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5">
              <summary className="flex items-center justify-between gap-4 font-semibold text-ink text-left cursor-pointer">
                <span>{f.q}</span>
                <span className="chev text-2xl leading-none text-brand transition shrink-0" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="grain relative overflow-hidden rounded-3xl bg-deep px-8 py-16 text-center text-white shadow-xl">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold text-gold mb-3">
            Open 7 Days a Week Nationwide
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif">
            Ready to speak with Dr. Selena?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75 text-sm sm:text-base leading-relaxed">
            Your health, privacy, and dignity are our top priority. Message Dr. Selena confidentially on WhatsApp or call directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              label="Start Confidential Chat with Dr. Selena"
              className="!bg-gold !text-ink hover:!bg-white !px-8 !py-4 text-base font-semibold shadow-lg"
            />
          </div>
          <p className="mt-4 text-xs text-white/60">
            Direct Helpline: {site.phoneDisplay} · Serving 17 Nationwide Locations · 100% Private Women&apos;s Healthcare
          </p>
        </div>
      </section>
    </>
  );
}

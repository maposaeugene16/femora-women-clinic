"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

// All 17 exact locations from Dr. Selena's official network
export const allLocations = [
  { name: "Harare", subtitle: "(and Satellite Towns)", region: "Mashonaland", highlights: "CBD, Chitungwiza, Ruwa, Norton, Epworth" },
  { name: "Bulawayo", subtitle: "City & Suburbs", region: "Matabeleland", highlights: "CBD, Kumalo, Hillside, Cowdray Park, Nkulumane" },
  { name: "Masvingo", subtitle: "Urban & Regional", region: "Masvingo", highlights: "Mucheke, Rujeko, Rhodene, Target Kopje" },
  { name: "Zvishavane", subtitle: "Mining & Urban Hub", region: "Midlands", highlights: "Mandava, Highlands, Makwasha" },
  { name: "Gweru", subtitle: "Midlands Capital", region: "Midlands", highlights: "Mkoba, Southdowns, Lundi Park, Daylesford" },
  { name: "Mutare", subtitle: "Eastern Capital", region: "Manicaland", highlights: "Chikanga, Dangamvura, Murambi, Morningside" },
  { name: "Rusape", subtitle: "Township & Centers", region: "Manicaland", highlights: "Vengere, Tsanzaguru, Town Center" },
  { name: "Marondera", subtitle: "Mashonaland East", region: "Mashonaland", highlights: "Rujeko, Yellow City, Dombotombo, Nyameni" },
  { name: "Chipinge", subtitle: "Eastern District", region: "Manicaland", highlights: "Gaza, Lowveld border corridor" },
  { name: "Chiredzi", subtitle: "Lowveld Hub", region: "Masvingo", highlights: "Tshovani, Hippo Valley, Triangle" },
  { name: "Kadoma", subtitle: "City of Gold", region: "Midlands", highlights: "Rimuka, Waverly, Mornington, Eiffel Flats" },
  { name: "Kwekwe", subtitle: "Industrial Center", region: "Midlands", highlights: "Mbizo, Redcliff, Amaveni, Newtown" },
  { name: "Chegutu", subtitle: "Mashonaland West", region: "Mashonaland", highlights: "Pfupajena, Hintonville, CBD" },
  { name: "Chinhoyi", subtitle: "Mashonaland West Capital", region: "Mashonaland", highlights: "Chikonohono, Orange Grove, Ruvimbo" },
  { name: "Bindura", subtitle: "Mashonaland Central", region: "Mashonaland", highlights: "Chipadze, Chiwaridzo, Brockley" },
  { name: "Chivhu", subtitle: "Midlands Gateway", region: "Mashonaland", highlights: "Town Center, Enkeldoorn Corridor" },
  { name: "Murehwa", subtitle: "Growth Point Hub", region: "Mashonaland", highlights: "Murehwa Center, Mission, Surrounding areas" },
];

const regionGroups = [
  {
    name: "Harare & Mashonaland Centers",
    icon: "🏙️",
    description: "Daily clinic appointments, express courier dispatch, and confidential tele-health.",
    cities: ["Harare (and Satellite Towns)", "Marondera", "Chinhoyi", "Bindura", "Chegutu", "Murehwa", "Chivhu"],
  },
  {
    name: "Bulawayo & Matabeleland",
    icon: "🏥",
    description: "Complete women's reproductive health, fertility consultations, and discreet door delivery.",
    cities: ["Bulawayo (CBD, Eastern & Western Suburbs)"],
  },
  {
    name: "Midlands Commercial Corridor",
    icon: "🛤️",
    description: "Scheduled consultation appointments, pelvic ultrasound guidance, and discreet package delivery.",
    cities: ["Gweru", "Kwekwe", "Kadoma", "Zvishavane"],
  },
  {
    name: "Manicaland & Eastern Districts",
    icon: "🌄",
    description: "Direct patient consultations, hormonal guidance, and unbranded prescription courier service.",
    cities: ["Mutare", "Rusape", "Chipinge"],
  },
  {
    name: "Masvingo & Lowveld Centers",
    icon: "🌾",
    description: "Confidential maternal care, menstrual wellness, and prompt doorstep delivery.",
    cities: ["Masvingo", "Chiredzi"],
  },
];

export default function LocationsSection() {
  const [selectedCity, setSelectedCity] = useState("Harare");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = allLocations.filter(
    (loc) =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.highlights.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="locations" className="mx-auto mt-24 max-w-6xl px-5">
      <div className="rounded-3xl border border-line bg-gradient-to-b from-white to-[#faf5f4] p-6 sm:p-12 shadow-sm">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-sand/80 px-3.5 py-1 text-xs font-semibold text-deep border border-line">
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
            Nationwide Zimbabwe Healthcare Network
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-ink font-serif leading-tight">
            Where Dr. Selena Operates Across Zimbabwe
          </h2>
          <p className="mt-3 text-base text-muted leading-relaxed">
            Dr. Selena provides specialized women’s reproductive consultations, confidential medical care, and same-day discreet parcel delivery across all <strong>17 primary cities, towns, and regions</strong> shown below.
          </p>
        </div>

        {/* OFFICIAL SERVICE LOCATIONS BANNER CARD */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white shadow-sm p-4 sm:p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-full md:w-3/5 aspect-[16/7] rounded-xl overflow-hidden border border-line/70 bg-paper">
              <Image
                src="/images/dr-selena-service-locations.jpg"
                alt="Official locations where Doctor Selena operates across Zimbabwe"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-between">
              <div>
                <span className="rounded-full bg-deep px-3 py-1 text-xs font-semibold text-gold uppercase tracking-wider">
                  Verified Coverage
                </span>
                <h3 className="mt-3 font-serif text-xl sm:text-2xl text-deep font-semibold">
                  17 Cities &amp; Centers Covered
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  Every location shown in Dr. Selena&apos;s directory receives regular clinical support, private appointments, and plain-box discreet parcel delivery.
                </p>
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-sand/40 border border-line text-xs space-y-1.5 text-deep">
                <p className="font-semibold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Dr. Selena Helpline: {site.phoneDisplay}
                </p>
                <p className="text-muted">100% Confidential · Mon to Sun (8am - 8pm)</p>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE TAP-TO-CONSULT CITY CHIPS */}
        <div className="mt-10 rounded-2xl border border-line/80 bg-white p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line/60 pb-4">
            <div>
              <h3 className="font-serif text-xl text-ink font-semibold">
                Tap Your Location for Instant WhatsApp Consultation
              </h3>
              <p className="text-xs text-muted mt-1">
                Select your city to message Dr. Selena directly with a pre-configured appointment request.
              </p>
            </div>
            {/* Quick Search */}
            <div className="relative w-full sm:w-60">
              <input
                type="text"
                placeholder="Search town or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-line bg-paper px-4 py-2 text-xs text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none"
              />
            </div>
          </div>

          {/* 17 Location Pills Grid */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {filteredLocations.map((loc) => {
              const isSelected = selectedCity === loc.name;
              const waUrl = buildWhatsAppLink(
                `Hello Dr. Selena, I am in ${loc.name} ${loc.subtitle} and would like to arrange a confidential women's health consultation.`
              );

              return (
                <a
                  key={loc.name}
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setSelectedCity(loc.name)}
                  className={`group relative flex flex-col justify-between p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-brand bg-sand/60 shadow-xs ring-1 ring-brand/40"
                      : "border-line/70 bg-paper/40 hover:border-deep/40 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-1">
                    <span className="font-serif text-sm font-semibold text-ink group-hover:text-brand transition">
                      {loc.name}
                    </span>
                    <span className="text-brand shrink-0 text-xs">📍</span>
                  </div>
                  <span className="text-[10px] text-muted line-clamp-1 mt-1">
                    {loc.subtitle}
                  </span>
                  <div className="mt-2 text-[10px] font-semibold text-deep flex items-center gap-1 group-hover:translate-x-0.5 transition">
                    <span>Message Doctor</span>
                    <span>→</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* REGIONAL COVERAGE BREAKDOWN */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {regionGroups.map((rg) => (
            <div
              key={rg.name}
              className="flex flex-col rounded-2xl border border-line/80 bg-white p-6 shadow-xs transition hover:border-brand/40"
            >
              <div className="flex items-center justify-between border-b border-line/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{rg.icon}</span>
                  <h3 className="font-serif text-lg text-deep font-semibold">{rg.name}</h3>
                </div>
                <span className="rounded-full bg-sand/60 px-2.5 py-0.5 text-[10px] font-semibold text-deep">
                  Active Services
                </span>
              </div>
              <p className="mt-3 text-xs text-muted leading-relaxed">{rg.description}</p>

              {/* Towns List */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {rg.cities.map((city) => (
                  <span
                    key={city}
                    className="rounded-md bg-paper px-2.5 py-1 text-xs font-medium text-ink/80 border border-line/50"
                  >
                    {city}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5">
                <a
                  href={buildWhatsAppLink(
                    `Hello Dr. Selena, I am located in ${rg.name} and would like to enquire about your clinic appointments and discreet delivery.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full border border-deep/20 bg-sand/30 py-2.5 text-xs font-semibold text-deep transition hover:bg-deep hover:text-white"
                >
                  Consult for {rg.name}
                </a>
              </div>
            </div>
          ))}

          {/* NATIONWIDE DELIVERY SPECIAL CALLOUT */}
          <div className="flex flex-col justify-between rounded-2xl border border-gold/40 bg-gradient-to-br from-deep to-[#2e0e1b] p-6 text-white shadow-md">
            <div>
              <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold border border-gold/30">
                Nationwide Courier
              </span>
              <h3 className="mt-3 font-serif text-xl sm:text-2xl text-white font-medium">
                Plain-Box Discreet Delivery to All Towns
              </h3>
              <p className="mt-2 text-xs text-white/80 leading-relaxed">
                Need contraceptives, female wellness treatments, or prescribed medications delivered? Our courier service delivers unmarked plain packages directly to your doorstep in all 17 towns.
              </p>
            </div>
            <div className="mt-6">
              <a
                href={buildWhatsAppLink(
                  "Hello Dr. Selena, I would like to request confidential discreet medication delivery to my location in Zimbabwe."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-gold py-3 text-xs sm:text-sm font-bold text-ink shadow-md transition hover:bg-white"
              >
                Arrange Discreet Delivery
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION BAR */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-deep px-6 py-5 text-white">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold">Not seeing your exact suburb or village?</p>
              <p className="text-xs text-white/70">
                Message Dr. Selena on WhatsApp (+263 790 261 823) with your town for immediate assistance.
              </p>
            </div>
          </div>
          <a
            href={buildWhatsAppLink(
              "Hello Dr. Selena, I am in Zimbabwe and would like to confirm healthcare services and delivery in my town."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-gold px-5 py-2.5 text-xs sm:text-sm font-semibold text-ink shadow-sm hover:bg-white transition"
          >
            Ask Dr. Selena Directly
          </a>
        </div>
      </div>
    </section>
  );
}

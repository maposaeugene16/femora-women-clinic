import WhatsAppButton from "./WhatsAppButton";

const regions = [
  {
    name: "Bulawayo Central & Inner Suburbs",
    description: "Same-day clinic appointments and express discreet couriers within 2 hours.",
    areas: [
      "Bulawayo CBD",
      "Kumalo",
      "Suburbs",
      "Hillside",
      "Bradfield",
      "Ascot",
      "Famona",
      "Morningside",
      "Bellevue",
      "Raylton",
    ],
  },
  {
    name: "Bulawayo Western Suburbs",
    description: "Door-to-door unbranded parcel delivery and private telephonic consultations.",
    areas: [
      "Nkulumane",
      "Cowdray Park",
      "Luveve",
      "Pumula",
      "Magwegwe",
      "Entumbane",
      "Emganwini",
      "Lobengula",
      "Njube",
      "Mpopoma",
      "Tshabalala",
      "Nketa",
    ],
  },
  {
    name: "Bulawayo East & North Suburbs",
    description: "Discreet and prompt delivery service to residential estates and businesses.",
    areas: [
      "Burnside",
      "Matsheumhlope",
      "Waterford",
      "Sunninghill",
      "Killarney",
      "Mahatshula",
      "Woodville",
      "Queens Park",
      "Sauerstown",
    ],
  },
  {
    name: "Matabeleland Regional Dispatch",
    description: "Confidential secure courier dispatch to surrounding towns and mining centers.",
    areas: [
      "Gwanda",
      "Plumtree",
      "Esigodini",
      "Hwange",
      "Victoria Falls",
      "Lupane",
      "Beitbridge",
    ],
  },
];

export default function LocationsSection() {
  return (
    <section id="locations" className="mx-auto mt-24 max-w-6xl px-5">
      <div className="rounded-3xl border border-line bg-gradient-to-b from-white to-[#faf8f4] p-8 sm:p-12 shadow-sm">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Bulawayo & Matabeleland Coverage
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl text-ink font-serif">
            Serving all suburbs & locations in Bulawayo, Zimbabwe
          </h2>
          <p className="mt-3 text-base text-muted leading-relaxed">
            Whether you are located in central Bulawayo, the eastern suburbs, or anywhere in the western townships, our clinical team provides 100% confidential assistance, same-day clinic bookings, and plain-box discreet delivery.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {regions.map((reg) => (
            <div
              key={reg.name}
              className="flex flex-col rounded-2xl border border-line/80 bg-white p-6 shadow-xs transition hover:border-brand/40"
            >
              <div className="flex items-center justify-between border-b border-line/60 pb-3">
                <h3 className="font-serif text-xl text-deep">{reg.name}</h3>
                <span className="rounded-full bg-sand/60 px-2.5 py-1 text-[11px] font-semibold text-deep">
                  Active Service
                </span>
              </div>
              <p className="mt-2 text-xs text-muted">{reg.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {reg.areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-md bg-paper px-2.5 py-1 text-xs font-medium text-ink/80 border border-line/50"
                  >
                    {a}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-5">
                <WhatsAppButton
                  label={`Inquire for ${reg.name}`}
                  variant="outline"
                  className="w-full justify-center !text-xs !py-2.5 !border-deep/30 hover:!bg-deep hover:!text-white"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-deep px-6 py-5 text-white">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/20 text-gold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold">Need express delivery to your exact Bulawayo location?</p>
              <p className="text-xs text-white/70">
                Message our team on WhatsApp with your suburb for instant estimated arrival time.
              </p>
            </div>
          </div>
          <WhatsAppButton
            label="Check your location"
            variant="solid"
            className="shrink-0 !bg-gold !text-ink hover:!bg-white !px-5 !py-2 text-xs sm:text-sm font-semibold"
          />
        </div>
      </div>
    </section>
  );
}

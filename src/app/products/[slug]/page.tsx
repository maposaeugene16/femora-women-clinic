import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site } from "@/config/site";
import { getCategory, getProduct, products } from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: product.name, description: product.summary },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.categorySlug);

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-muted">
        <Link href="/" className="hover:text-ink">Home</Link>
        <span>/</span>
        <Link href="/#treatments" className="hover:text-ink">Services</Link>
        {category && (
          <>
            <span>/</span>
            <Link href={`/category/${category.slug}`} className="hover:text-ink">{category.name}</Link>
          </>
        )}
      </nav>

      <article className="grid gap-10 rounded-3xl border border-line bg-white p-6 sm:p-10 shadow-sm md:grid-cols-2 items-start">
        {/* IMAGE / VISUAL */}
        <div className="overflow-hidden rounded-2xl border border-line bg-paper">
          {product.image ? (
            <div className="relative aspect-4/3 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="grid aspect-4/3 place-items-center bg-deep text-6xl text-gold font-serif">
              {product.name.charAt(0)}
            </div>
          )}
          <div className="border-t border-line/60 bg-paper/60 p-4 text-xs text-muted flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium text-deep">
              <span className="h-2 w-2 rounded-full bg-brand" /> 100% Confidential
            </span>
            <span>Bulawayo, Zimbabwe</span>
          </div>
        </div>

        {/* DETAILS & ACTION */}
        <div className="flex flex-col">
          {category && (
            <span className="w-fit rounded-full bg-sand/80 px-3 py-1 text-xs font-semibold text-deep">
              {category.name}
            </span>
          )}

          <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-ink leading-tight">
            {product.name}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-muted">
            {product.summary}
          </p>

          {product.details && (
            <div className="mt-6 rounded-xl border border-line/60 bg-paper/40 p-5 text-sm leading-relaxed text-ink/90">
              <h2 className="font-serif text-base text-deep font-semibold mb-2">Procedure &amp; Clinical Overview</h2>
              <p>{product.details}</p>
            </div>
          )}

          {site.showPrices && product.price && (
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-xs uppercase tracking-wider text-muted font-semibold">Pricing:</span>
              <span className="font-serif text-2xl font-bold text-deep">{product.price}</span>
            </div>
          )}

          <div className="mt-8 space-y-3">
            <WhatsAppButton
              productName={product.name}
              label="Inquire on WhatsApp Confidentially"
              variant="solid"
              className="w-full justify-center !py-3.5 text-base shadow-md"
            />
            <p className="text-center text-xs text-muted">
              Direct connection to certified Zimbabwean doctors &amp; nurses. No public records.
            </p>
          </div>

          <div className="mt-8 border-t border-line/60 pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-deep">Practice Standards</h3>
            <ul className="mt-3 space-y-2 text-xs text-muted">
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand shrink-0"><path d="m5 12 5 5 9-10"/></svg>
                Health Professions Authority &amp; HPCZ Compliant
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand shrink-0"><path d="m5 12 5 5 9-10"/></svg>
                Discreet plain-box delivery available across all Bulawayo suburbs
              </li>
              <li className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand shrink-0"><path d="m5 12 5 5 9-10"/></svg>
                24/7 WhatsApp follow-up and empathetic care support
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

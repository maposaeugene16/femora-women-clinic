import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/config/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.blurb,
    alternates: { canonical: `/category/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = getProductsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-muted">
        <Link href="/" className="hover:text-ink">Home</Link>
        <span>/</span>
        <Link href="/#treatments" className="hover:text-ink">Services</Link>
        <span>/</span>
        <span className="text-ink font-semibold">{category.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-line/60 pb-8">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-brand">
            {site.practiceName} · Led by Dr. Selena
          </span>
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-ink">{category.name}</h1>
          <p className="mt-3 max-w-2xl text-base text-muted leading-relaxed">{category.blurb}</p>
        </div>
        <WhatsAppButton
          label="Inquire Regarding This Service"
          variant="solid"
          className="shrink-0 !py-3 !px-5 text-sm"
        />
      </div>

      {items.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-line bg-white p-8 text-center">
          <p className="text-muted">No specific treatments listed in this section currently.</p>
          <div className="mt-4">
            <WhatsAppButton label="Ask Dr. Selena on WhatsApp" />
          </div>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}

      {/* FOOTER CALLOUT */}
      <div className="mt-16 rounded-2xl bg-paper border border-line p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-serif text-xl text-deep">Need discreet women&apos;s healthcare guidance?</p>
          <p className="text-sm text-muted mt-1">Dr. Selena is available on WhatsApp 7 days a week across all 17 nationwide locations.</p>
        </div>
        <WhatsAppButton label="Start private chat" variant="outline" className="shrink-0" />
      </div>
    </div>
  );
}

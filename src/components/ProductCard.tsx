import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";
import { getCategory } from "@/data/products";
import { site } from "@/config/site";
import WhatsAppButton from "./WhatsAppButton";

export default function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.categorySlug);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/products/${product.slug}`} className="block overflow-hidden relative">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={420}
            className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-52 place-items-center bg-gradient-to-br from-deep to-brand font-serif text-6xl text-gold/90">
            {product.name.charAt(0)}
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-5">
        {category && (
          <span className="w-fit rounded-full bg-sand/70 px-3 py-1 text-xs font-semibold text-deep">
            {category.name}
          </span>
        )}
        <h3 className="font-serif text-xl text-ink">
          <Link href={`/products/${product.slug}`} className="hover:text-brand transition">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted line-clamp-2">{product.summary}</p>
        {site.showPrices && product.price && (
          <p className="font-serif text-lg font-bold text-deep mt-1">{product.price}</p>
        )}
        <div className="mt-auto pt-4">
          <WhatsAppButton
            productName={product.name}
            variant="solid"
            className="w-full justify-center !py-2.5 text-sm font-semibold"
          />
        </div>
      </div>
    </article>
  );
}

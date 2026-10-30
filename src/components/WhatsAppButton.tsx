"use client";

import { generalWhatsAppLink, productWhatsAppLink } from "@/lib/whatsapp";

type Props = {
  /** If given, the message names this product. Otherwise a general enquiry is sent. */
  productName?: string;
  label?: string;
  variant?: "solid" | "outline" | "floating";
  className?: string;
};

declare global {
  interface Window {
    plausible?: (event: string, options?: { props: Record<string, string> }) => void;
  }
}

const styles = {
  solid:
    "bg-brand text-white hover:bg-brand-dark px-5 py-3 rounded-full font-medium inline-flex items-center gap-2",
  outline:
    "border border-brand text-brand hover:bg-brand hover:text-white px-4 py-2 rounded-full font-medium inline-flex items-center gap-2",
  floating:
    "fixed bottom-5 right-5 z-50 bg-brand text-white hover:bg-brand-dark shadow-lg px-4 py-3 rounded-full font-medium inline-flex items-center gap-2",
};

export default function WhatsAppButton({
  productName,
  label,
  variant = "solid",
  className = "",
}: Props) {
  const href = productName ? productWhatsAppLink(productName) : generalWhatsAppLink();
  const text = label ?? (productName ? "Ask on WhatsApp" : "Message on WhatsApp");

  function track() {
    window.plausible?.("WhatsApp Click", { props: { product: productName ?? "general" } });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={track}
      className={`${styles[variant]} ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5Z" />
      </svg>
      {text}
    </a>
  );
}

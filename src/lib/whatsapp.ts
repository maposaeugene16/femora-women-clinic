import { site } from "@/config/site";

const phone = site.whatsappNumber.replace(/\D/g, "");

function fill(template: string, vars: Record<string, string>) {
  return Object.entries(vars).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, value),
    template,
  );
}

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** "Hie Doctor X, I need <product>. How much is it?" */
export function productWhatsAppLink(productName: string) {
  return buildWhatsAppLink(
    fill(site.productMessage, { doctor: site.doctorName, product: productName }),
  );
}

export function generalWhatsAppLink() {
  return buildWhatsAppLink(fill(site.generalMessage, { doctor: site.doctorName }));
}

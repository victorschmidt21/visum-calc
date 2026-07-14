import type { Metadata } from "next";
import NoticiasClient from "./noticias-client";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Notícias e Agenda Tributária",
  description: "Fique por dentro das últimas notícias fiscais e da agenda tributária completa.",
  openGraph: {
    url: "https://visumcalc.com.br/noticias",
    title: "Notícias e Agenda Tributária | Visum Calc",
  },
  alternates: { canonical: "https://visumcalc.com.br/noticias" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://visumcalc.com.br" },
    { "@type": "ListItem", position: 2, name: "Notícias", item: "https://visumcalc.com.br/noticias" },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd schema={breadcrumb} />
      <NoticiasClient />
    </>
  );
}

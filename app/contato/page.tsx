import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Fale Conosco",
  description: "Entre em contato com a Visum Calc. Estamos prontos para atender suas necessidades contábeis e periciais.",
  openGraph: {
    url: "https://visumcalc.com.br/contato",
    title: "Fale Conosco | Visum Calc",
  },
  alternates: { canonical: "https://visumcalc.com.br/contato" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://visumcalc.com.br" },
    { "@type": "ListItem", position: 2, name: "Contato", item: "https://visumcalc.com.br/contato" },
  ],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd schema={breadcrumb} />
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { MetaHead } from "@/components/seo/MetaHead";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <MetaHead
        title="Fale Conosco"
        description="Entre em contato com a Visum Calc. Estamos prontos para atender suas necessidades contábeis e periciais."
        canonicalUrl="https://visumcalc.com.br/contato"
      />
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

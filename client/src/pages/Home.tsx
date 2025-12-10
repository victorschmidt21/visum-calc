import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <div className="bg-gray-900 py-20 text-center text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Pronto para ter segurança nas suas decisões?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe multidisciplinar está pronta para transformar a complexidade dos seus dados em estratégias claras.
            </p>
            <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-10 rounded-full shadow-xl shadow-secondary/20 transition-transform hover:scale-105">
              Falar com Especialista Agora
            </button>
          </div>
        </div>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

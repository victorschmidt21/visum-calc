import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Differentials from "@/components/sections/Differentials";
import Services from "@/components/sections/Services";
import TargetAudience from "@/components/sections/TargetAudience";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MetaHead } from "@/components/seo/MetaHead";
import { scrollToSection } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <MetaHead
        title="Precisão Contábil e Pericial"
        description="Na Visum Calc, unimos expertise contábil, jurídica e pericial para transformar complexidade em clareza."
      />
      <Navbar />
      <main>
        <Hero />
        <section id="reforma" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="text-secondary font-bold tracking-wider text-md uppercase mb-2 block">
                Destaque Estratégico
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6">
                Reforma Tributária: Prepare sua empresa para 2027
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A Reforma Tributária (LC 214/2025) unifica tributos federais,
                estaduais e municipais no IBS e CBS. A transição inicia em 2026
                e impactará diretamente sua operação a partir de 2027, com
                implantação completa em 2033. Antecipar-se é essencial.
              </p>
            </div>

            <div className="relative py-10">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { year: "2026", desc: "Período de testes" },
                  { year: "2027", desc: "Início do impacto real" },
                  { year: "2027-2032", desc: "Transição gradual" },
                  { year: "2033", desc: "Implantação completa" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="text-center flex flex-col items-center hover:scale-105 transition-all"
                  >
                    <span className="text-secondary text-lg font-bold">
                      {item.year}
                    </span>
                    <div className="w-12 h-12 bg-secondary rounded-full   flex items-center justify-center text-white font-bold mx-auto mb-4 border-4 border-white shadow-lg relative"></div>
                    <p className="text-gray-600 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                    Agronegócio e a Nova Tributação
                  </h3>
                  <p className="text-gray-200 text-lg mb-6">
                    A LC 214/2025 traz regras específicas para o setor
                    agropecuário. A unificação tributária pode representar tanto
                    oportunidades quanto riscos. Mapeie os impactos antes que
                    eles cheguem.
                  </p>
                  <Button
                    size="default"
                    className="bg-secondary cursor-pointer hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105"
                    onClick={() => scrollToSection("contato")}
                  >
                    Solicitar diagnóstico gratuito
                  </Button>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h4 className="font-bold mb-4 flex items-center gap-2 text-secondary">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    Impactos Mapeados
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-100">
                    <li className="flex items-center gap-2">
                      • Unificação de tributos federais e estaduais
                    </li>
                    <li className="flex items-center gap-2">
                      • Revisão de regimes especiais no agro
                    </li>
                    <li className="flex items-center gap-2">
                      • Novas obrigações acessórias
                    </li>
                    <li className="flex items-center gap-2">
                      • Crédito financeiro instantâneo
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Differentials />
        <Services />
        <TargetAudience />
        <div className="bg-primary py-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay" />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Pronto para ter segurança nas suas decisões?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Nossa equipe multidisciplinar está pronta para transformar a
              complexidade dos seus dados em estratégias claras.
            </p>
            <Button
              className="cursor-pointer bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-10 rounded-full transition-transform"
              onClick={() => scrollToSection("contato")}
            >
              Falar com Especialista Agora
            </Button>
          </div>
        </div>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

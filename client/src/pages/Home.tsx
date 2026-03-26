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
import { useState } from "react";

type TaxItem = { tax: string; status: string; highlight?: "extinction" | "new" | "warning" };

const timelineData: { year: string; label: string; items: TaxItem[] }[] = [
  {
    year: "2026",
    label: "Período de testes",
    items: [
      { tax: "PIS", status: "Sem alteração" },
      { tax: "COFINS", status: "Sem alteração" },
      { tax: "CBS", status: "0,9%", highlight: "new" },
      { tax: "ICMS", status: "Sem alteração" },
      { tax: "ISS", status: "Sem alteração" },
      { tax: "IBS", status: "0,1% Estadual", highlight: "new" },
      { tax: "IPI", status: "Sem alteração" },
    ],
  },
  {
    year: "2027",
    label: "Início do impacto real",
    items: [
      { tax: "PIS", status: "EXTINÇÃO", highlight: "extinction" },
      { tax: "COFINS", status: "EXTINÇÃO", highlight: "extinction" },
      { tax: "CBS", status: "Alíquotas por Res. do Senado Federal conforme LC", highlight: "new" },
      { tax: "ICMS", status: "Sem alteração" },
      { tax: "ISS", status: "Sem alteração" },
      { tax: "IBS", status: "0,05% Estadual + 0,05% Municipal", highlight: "new" },
      { tax: "IPI", status: "Alíquota reduzida a 0% (mantida na ZFM)", highlight: "warning" },
    ],
  },
  {
    year: "2028",
    label: "Transição gradual",
    items: [
      { tax: "CBS", status: "Alíquotas por Res. do Senado Federal conforme LC", highlight: "new" },
      { tax: "ICMS", status: "90% da alíquota", highlight: "warning" },
      { tax: "ISS", status: "90% da alíquota", highlight: "warning" },
      { tax: "IBS", status: "Alíquotas por Res. do Senado Federal conforme LC", highlight: "new" },
      { tax: "IPI", status: "Alíquota reduzida a 0% (mantida na ZFM)", highlight: "warning" },
      { tax: "IS", status: "Alíquotas definidas por Lei Ordinária", highlight: "new" },
    ],
  },
  {
    year: "2029",
    label: "Transição gradual",
    items: [
      { tax: "CBS", status: "Alíquotas por Res. do Senado Federal conforme LC", highlight: "new" },
      { tax: "ICMS", status: "80% da alíquota", highlight: "warning" },
      { tax: "ISS", status: "80% da alíquota", highlight: "warning" },
      { tax: "IBS", status: "Alíquotas por Res. do Senado Federal conforme LC", highlight: "new" },
      { tax: "IPI", status: "Alíquota reduzida a 0% (mantida na ZFM)", highlight: "warning" },
      { tax: "IS", status: "Alíquotas definidas por Lei Ordinária", highlight: "new" },
    ],
  },
  {
    year: "2030",
    label: "Transição gradual",
    items: [
      { tax: "CBS", status: "Alíquotas por Res. do Senado Federal conforme LC", highlight: "new" },
      { tax: "ICMS", status: "70% da alíquota", highlight: "warning" },
      { tax: "ISS", status: "70% da alíquota", highlight: "warning" },
      { tax: "IBS", status: "Alíquotas por Res. do Senado Federal conforme LC", highlight: "new" },
      { tax: "IPI", status: "Alíquota reduzida a 0% (mantida na ZFM)", highlight: "warning" },
      { tax: "IS", status: "Alíquotas definidas por Lei Ordinária", highlight: "new" },
    ],
  },
  {
    year: "2031",
    label: "Transição gradual",
    items: [
      { tax: "CBS", status: "Alíquotas por Res. do Senado Federal conforme LC", highlight: "new" },
      { tax: "ICMS", status: "60% da alíquota", highlight: "warning" },
      { tax: "ISS", status: "60% da alíquota", highlight: "warning" },
      { tax: "IBS", status: "Alíquotas por Res. do Senado Federal conforme LC", highlight: "new" },
      { tax: "IPI", status: "Alíquota reduzida a 0% (mantida na ZFM)", highlight: "warning" },
      { tax: "IS", status: "Alíquotas definidas por Lei Ordinária", highlight: "new" },
    ],
  },
  {
    year: "2032",
    label: "Extinção ICMS e ISS",
    items: [
      { tax: "CBS", status: "Alíquotas por Res. do Senado Federal conforme LC", highlight: "new" },
      { tax: "ICMS", status: "EXTINÇÃO", highlight: "extinction" },
      { tax: "ISS", status: "EXTINÇÃO", highlight: "extinction" },
      { tax: "IBS", status: "Alíquotas por Res. do Senado Federal conforme LC", highlight: "new" },
      { tax: "IPI", status: "Alíquota reduzida a 0% (mantida na ZFM)", highlight: "warning" },
      { tax: "IS", status: "Alíquotas definidas por Lei Ordinária", highlight: "new" },
    ],
  },
  {
    year: "2033",
    label: "Implantação completa",
    items: [
      { tax: "CBS", status: "Sistema novo em plena vigência", highlight: "new" },
      { tax: "IBS", status: "Sistema novo em plena vigência", highlight: "new" },
      { tax: "IPI", status: "Mantido apenas para produtos com incentivos na ZFM", highlight: "warning" },
      { tax: "IS", status: "Alíquotas definidas por Lei Ordinária", highlight: "new" },
    ],
  },
];

export default function Home() {
  const [activeYear, setActiveYear] = useState<number | null>(null);

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
              <span className="text-secondary font-bold tracking-wider text-md uppercase mb-2 block">Destaque Estratégico</span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6">Reforma Tributária: Prepare sua empresa para 2027</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A Reforma Tributária (LC 214/2025) unifica tributos federais, estaduais e municipais no IBS e CBS. 
                A transição inicia em 2026 e impactará diretamente sua operação a partir de 2027, com implantação completa em 2033. 
                Antecipar-se é essencial.
              </p>
            </div>
            
            <div className="relative py-10 overflow-x-auto">
              <div className="min-w-[700px]">
                <div className="absolute top-[52px] left-0 w-full h-1 bg-gray-100 hidden md:block" />
                <div className="grid grid-cols-8 gap-2 relative z-10">
                  {timelineData.map((item, i) => (
                    <div
                      key={i}
                      className="relative flex flex-col items-center group"
                      onClick={() => setActiveYear(activeYear === i ? null : i)}
                    >
                      {/* Card — hover on desktop, click on mobile */}
                      <div
                        className={`
                          absolute bottom-full mb-3 w-52 bg-white border border-gray-200 rounded-xl shadow-xl p-3 z-20 text-left
                          transition-all duration-200
                          pointer-events-none md:pointer-events-auto
                          ${activeYear === i
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0"
                          }
                          ${i >= 4 ? "-translate-x-1/2 left-1/2 md:left-auto md:-translate-x-full md:right-0" : "left-1/2 -translate-x-1/2"}
                        `}
                        style={{ pointerEvents: activeYear === i ? "auto" : undefined }}
                      >
                        <p className="text-xs font-bold text-primary mb-2 border-b border-gray-100 pb-1">{item.year} — {item.label}</p>
                        <ul className="space-y-1">
                          {item.items.map((t, j) => (
                            <li key={j} className="flex items-start gap-1.5 text-xs">
                              <span className="font-bold text-primary shrink-0 w-12">{t.tax}</span>
                              <span
                                className={
                                  t.highlight === "extinction"
                                    ? "text-red-600 font-bold"
                                    : t.highlight === "new"
                                    ? "text-emerald-600"
                                    : t.highlight === "warning"
                                    ? "text-amber-600"
                                    : "text-gray-500"
                                }
                              >
                                {t.status}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Year label */}
                      <span className={`text-sm font-bold mb-2 ${i === 0 || i === 7 ? "text-secondary" : "text-gray-500"}`}>
                        {item.year}
                      </span>

                      {/* Dot */}
                      <div
                        className={`
                          w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-lg cursor-pointer transition-transform hover:scale-110
                          ${i === 0 || i === 7 ? "bg-secondary" : "bg-primary/70"}
                        `}
                      />

                      {/* Description */}
                      <p className="text-gray-500 text-[10px] text-center mt-2 font-medium leading-tight px-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20 bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">Agronegócio e a Nova Tributação</h3>
                  <p className="text-gray-200 text-lg mb-6">
                    A LC 214/2025 traz regras específicas para o setor agropecuário. 
                    A unificação tributária pode representar tanto oportunidades quanto riscos. 
                    Mapeie os impactos antes que eles cheguem.
                  </p>
                  <Button size="default" className="bg-secondary cursor-pointer hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
                    Solicitar diagnóstico gratuito
                  </Button>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h4 className="font-bold mb-4 flex items-center gap-2 text-secondary">
                    <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                    Impactos Mapeados
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-100">
                    <li className="flex items-center gap-2">• Unificação de tributos federais e estaduais</li>
                    <li className="flex items-center gap-2">• Revisão de regimes especiais no agro</li>
                    <li className="flex items-center gap-2">• Novas obrigações acessórias</li>
                    <li className="flex items-center gap-2">• Crédito financeiro instantâneo</li>
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Pronto para ter segurança nas suas decisões?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Nossa equipe multidisciplinar está pronta para transformar a complexidade dos seus dados em estratégias claras.
            </p>
            <Button className="cursor-pointer bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-10 rounded-full transition-transform" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
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

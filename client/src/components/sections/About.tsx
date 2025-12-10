import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import aboutImg from "@assets/generated_images/professional_business_meeting_for_about_us_section.png";

export default function About() {
  const differentials = [
    "Expertise Multidisciplinar: Contabilidade, Direito e Perícia integrados.",
    "Nichos Complexos: Crédito rural, PGFN, Bolsa e Cripto.",
    "Customização Total: Soluções desenhadas para sua realidade.",
    "Visão de Futuro: Preservação de patrimônio e legado."
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImg} 
                alt="Equipe Visum Calc" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
              <p className="text-primary font-bold text-4xl mb-2">15+</p>
              <p className="text-gray-600 font-medium text-sm">Anos combinados de experiência em casos de alta complexidade.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-2 block">Quem Somos</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6 leading-tight">
              Mais que números: entregamos <span className="text-secondary">clareza</span> e <span className="text-secondary">inteligência</span>.
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Com uma atuação pautada em excelência técnica, ética e transparência, a Visum Calc nasceu para ser referência nacional. Nossa missão é garantir segurança e confiança em cada decisão.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Atendemos advogados, empresários e investidores que não podem correr riscos quando o assunto é patrimônio e finanças.
            </p>

            <ul className="space-y-4 mb-10">
              {differentials.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-green-700" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg rounded-full">
              Conheça Nossa História
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

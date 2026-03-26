import { Button } from "@/components/ui/button";
import aboutImg from "@assets/generated_images/professional_business_meeting_for_about_us_section.png";

export default function About() {
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

            <Button size="lg"
              variant="outline" className="bg-primary hover:bg-primary/90 border-white/30 text-white font-medium text-lg h-14 px-8 rounded-full backdrop-blur-sm cursor-pointer"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
              Conheça Nossa História
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}

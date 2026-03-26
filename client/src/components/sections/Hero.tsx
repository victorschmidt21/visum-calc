import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@assets/generated_images/modern_corporate_office_hero_background_with_dark_green_and_gold_accents.png";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-3xl animate-in slide-in-from-left-10 duration-700 fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-secondary text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Excelência em Perícias e Cálculos
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-6 tracking-tight">
            Precisão Contábil e Pericial para <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">Decisões Seguras</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Unimos expertise contábil, jurídica e pericial para transformar complexidade em clareza. Soluções personalizadas em perícias bancárias, recuperação judicial e planejamento tributário.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg h-14 px-8 rounded-full shadow-lg shadow-secondary/25 transition-all cursor-pointer "
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Fale com um Especialista
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent hover:border-secondary border-white/30 text-white hover:bg-white/10 font-medium text-lg h-14 px-8 rounded-full backdrop-blur-sm cursor-pointer"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-white/60 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>Alta Precisão Técnica</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>Segurança Jurídica</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>Atuação Nacional</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams } from "wouter";
import { Calculator, Scale, TrendingDown, Building, Gavel } from "lucide-react";

const servicesData = {
  "reforma-tributaria": {
    title: "Reforma Tributária",
    icon: TrendingDown,
    content: "A Reforma Tributária (LC 214/2025) unifica tributos federais, estaduais e municipais no IBS e CBS. A transição inicia em 2026 e impactará diretamente sua operação a partir de 2027, com implantação completa em 2033. Antecipar-se é essencial."
  },
  "contabilidade-personalizada": {
    title: "Contabilidade Personalizada",
    icon: Calculator,
    content: "Gestão contábil estratégica com foco em compliance e tomada de decisões. Escrituração contábil completa, elaboração de demonstrações financeiras, análise de indicadores e suporte para auditorias."
  },
  "gestao-tributaria": {
    title: "Gestão Tributária",
    icon: Scale,
    content: "Otimização fiscal com redução de riscos e recuperação de créditos. Análise completa da carga tributária, identificação de oportunidades de economia e acompanhamento de obrigações acessórias."
  },
  "holding-patrimonial": {
    title: "Holding Patrimonial",
    icon: Building,
    content: "Estruturação patrimonial com eficiência fiscal e planejamento sucessório. Atuação estratégica na criação e gestão de holdings familiares e patrimoniais."
  },
  "calculos-judiciais": {
    title: "Cálculos Judiciais",
    icon: Gavel,
    content: "Laudos técnicos e cálculos precisos para suporte em processos judiciais. Especialização em perícia contábil para casos cíveis, trabalhistas e bancários."
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData[id as keyof typeof servicesData];

  if (!service) return <div>Serviço não encontrado</div>;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <service.icon size={32} />
              </div>
              <h1 className="text-4xl font-bold font-heading text-primary">{service.title}</h1>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="whitespace-pre-line leading-relaxed">{service.content}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams, Link } from "wouter";
import { Calculator, Scale, TrendingDown, Building, Gavel, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import generated images
import serviceAccounting from "@/assets/images/service-accounting.png";
import serviceTax from "@/assets/images/service-tax.png";
import serviceHolding from "@/assets/images/service-holding.png";
import serviceJustice from "@/assets/images/service-justice.png";

const servicesData = {
  "reforma-tributaria": {
    title: "Reforma Tributária",
    subtitle: "NOVA LEI, NOVA REALIDADE",
    icon: TrendingDown,
    image: serviceTax,
    description: "A Reforma Tributária tem como principal objetivo, a reestruturação do atual Sistema Tributário Nacional, simplificando a tributação nos âmbitos Federal, Estadual e Municipal, por meio de uma substituição progressiva de um robusto e complexo conjunto de normas, para que o valor dos produtos e serviços sejam reduzidos ao consumidor final.",
    sections: [
      {
        title: "PRODUTOR RURAL E A REFORMA TRIBUTÁRIA",
        content: "A Lei Complementar Nº 214 DE 16/01/2025 que institui o IBS e a CBS trouxe regras específicas para o tratamento tributário aplicável ao produtor rural, reconhecendo as particularidades do setor agropecuário. O setor agrário será diretamente impactado pela nova regulamentação, exigindo um mapeamento detalhado e antecipado dos impactos nas suas operações."
      },
      {
        title: "TRANSIÇÃO DA REFORMA TRIBUTÁRIA",
        content: "Após um período de testes que se inicia em 2026, a reforma já impactará significativamente as empresas em 2027, tendo sua implantação completa em 2033. O planejamento antecipado é essencial para identificar impactos financeiros e ajustar cadeias de fornecimento."
      }
    ]
  },
  "contabilidade-personalizada": {
    title: "Contabilidade Personalizada",
    subtitle: "GESTÃO ESTRATÉGICA E COMPLIANCE",
    icon: Calculator,
    image: serviceAccounting,
    description: "Gestão financeira e planejamento tributário estratégico para empresas que buscam inteligência fiscal e compliance. Análise, adequação e eficiência da gestão empresarial e controle interno para o desenvolvimento de estratégias personalizadas.",
    sections: [
      {
        title: "AUDITORIA E CONFERÊNCIA",
        content: "Compreende a auditoria independente contábil e a auditoria operacional. Esta área preza pela minuciosa conferência dos registros contábeis de nossos clientes, assegurando a conformidade e a veracidade dessas informações."
      }
    ],
    items: ["BPO Financeiro", "Constituição e Regularização de Empresas", "Consultoria e Assessoria Contábil e/ou Tributária", "Recomposição Contábil e Tributária"]
  },
  "gestao-tributaria": {
    title: "Gestão Tributária",
    subtitle: "OTIMIZAÇÃO E SEGURANÇA FISCAL",
    icon: Scale,
    image: serviceTax,
    description: "Implementação e execução das melhores estratégias tributárias com redução máxima de riscos e otimização de resultados. Equipe multidisciplinar que estuda a legislação, a contabilidade e o histórico fiscal de cada negócio.",
    items: ["Compliance Tributário", "Planejamento Tributário", "Assessoria Tributária", "Recuperação de Tributos", "Transferência de Créditos (ICMS)", "Assessoria em Notificações e Intimações", "Habilitação e Compensação de Créditos"]
  },
  "holding-patrimonial": {
    title: "Holding Patrimonial",
    subtitle: "ESTRUTURAÇÃO E SUCESSÃO",
    icon: Building,
    image: serviceHolding,
    description: "Atuamos de forma estratégica na estruturação e manutenção da holding, funcionando como um parceiro fundamental na proteção e gestão do patrimônio familiar e empresarial.",
    sections: [
      {
        title: "PLANEJAMENTO E REGULARIZAÇÃO",
        content: "Análise do regime tributário mais vantajoso, definição da estrutura societária ideal e integralização de bens ao capital social com foco em minimizar custos fiscais."
      },
      {
        title: "SUPORTE ESTRATÉGICO",
        content: "Base técnica para decisões administrativas e sucessórias, auxílio na gestão de dividendos e governança familiar em parceria com advogados."
      }
    ]
  },
  "calculos-judiciais": {
    title: "Cálculos Judiciais",
    subtitle: "EFICIÊNCIA EM CASOS COMPLEXOS",
    icon: Gavel,
    image: serviceJustice,
    description: "Nossa perícia contábil destaca-se na abordagem de casos complexos, oferecendo eficiência excepcional ao lidar com nuances financeiras, econômicas e contábeis para suporte jurídico estratégico.",
    sections: [
      {
        title: "CÁLCULOS BANCÁRIOS E CÍVEIS",
        content: "Especialização em laudos revisionais, análise pré-ajuizamento, correção monetária, apuração de juros e execução de contratos."
      },
      {
        title: "CÁLCULOS TRABALHISTAS",
        content: "Segurança total e precisão para instrução, contestação ou liquidação de sentença. Apuração de folha de ponto, horas extras e encargos."
      }
    ]
  }
};

const otherServices = [
  { title: "Avaliação de Empresas", slug: "contabilidade-personalizada" },
  { title: "Transações Societárias", slug: "gestao-tributaria" },
  { title: "Reestruturação Patrimonial", slug: "holding-patrimonial" },
  { title: "Diagnósticos de Ativos", slug: "gestao-tributaria" },
  { title: "Recursos Financeiros", slug: "contabilidade-personalizada" }
];

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData[id as keyof typeof servicesData];

  if (!service) return <div className="pt-32 text-center">Serviço não encontrado</div>;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section Page Title */}
      <div className="bg-primary pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover grayscale opacity-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">Área de Atuação</span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4">{service.title}</h1>
            <div className="w-20 h-1 bg-secondary mb-6" />
          </div>
        </div>
      </div>

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-primary mb-6 font-heading">{service.subtitle}</h2>
                <div className="aspect-video rounded-xl overflow-hidden mb-8 shadow-2xl bg-gray-100">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {service.sections?.map((section, idx) => (
                <div key={idx} className="mb-10">
                  <h3 className="text-xl font-bold text-primary mb-4 font-heading border-l-4 border-secondary pl-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}

              {service.items && (
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-xl font-bold text-primary mb-6 font-heading">
                    SERVIÇOS EM {service.title.toUpperCase()}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-secondary shrink-0 mt-1" size={18} />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-8 rounded-lg shadow-lg shadow-secondary/20">
                  Mais informações
                </Button>
              </div>
            </div>

            {/* Sidebar Area */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-primary mb-6 font-heading flex items-center gap-2">
                    ATUAÇÃO
                    <div className="flex-1 h-px bg-gray-200 ml-2" />
                  </h3>
                  <div className="space-y-4">
                    {otherServices.map((item, idx) => (
                      <Link key={idx} href={`/servicos/${item.slug}`}>
                        <a className="block group border-b border-gray-100 pb-4 hover:border-secondary transition-colors">
                          <span className="text-gray-700 group-hover:text-secondary transition-colors font-medium">
                            {item.title}
                          </span>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-6 font-heading flex items-center gap-2">
                    ÚLTIMAS NOTÍCIAS
                    <div className="flex-1 h-px bg-gray-200 ml-2" />
                  </h3>
                  <div className="space-y-6">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex gap-4 group cursor-pointer">
                        <div className="w-20 h-20 bg-gray-200 rounded shrink-0 overflow-hidden">
                          <img src={`https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=200`} alt="News" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-400 font-bold uppercase block mb-1">24-07-2024</span>
                          <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                            Novas diretrizes para planejamento tributário em 2026
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams, Link } from "wouter";
import {
  Calculator,
  Scale,
  TrendingDown,
  Building,
  Gavel,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { fetchLegisWebNews } from "@/api/api";
import { Skeleton } from "@/components/ui/skeleton";

// Import generated images
import serviceAccounting from "@/assets/images/service-accounting.png";
import serviceTax from "@/assets/images/service-tax.png";
import serviceHolding from "@/assets/images/service-holding.png";
import serviceJustice from "@/assets/images/service-justice.png";

interface ServiceSection {
  title: string;
  content: string;
}

interface ServiceTimelineItem {
  year: string;
  desc: string;
}

interface ServiceSubItem {
  category: string;
  list: string[];
}

interface ServiceData {
  title: string;
  subtitle: string;
  icon: any;
  image: string;
  description: string;
  sections: ServiceSection[];
  timeline?: ServiceTimelineItem[];
  items?: string[];
  subItems?: ServiceSubItem[];
}

interface LegisWebNews {
  titulo?: string;
  data?: string;
  resumo?: string;
  imagem?: string;
  url?: string;
  assunto?: string;
}

const servicesData: Record<string, ServiceData> = {
  "reforma-tributaria": {
    title: "Reforma Tributária",
    subtitle: "NOVA LEI, NOVA REALIDADE",
    icon: TrendingDown,
    image: serviceTax,
    description:
      "A Reforma Tributária tem como principal objetivo, a reestruturação do atual Sistema Tributário Nacional, simplificando a tributação nos âmbitos Federal, Estadual e Municipal, por meio de uma substituição progressiva de um robusto e complexo conjunto de normas, para que o valor dos produtos e serviços sejam reduzidos ao consumidor final.",
    sections: [
      {
        title: "PRODUTOR RURAL E A REFORMA TRIBUTÁRIA",
        content:
          "A Lei Complementar Nº 214 DE 16/01/2025 que institui o IBS e a CBS trouxe regras específicas para o tratamento tributário aplicável ao produtor rural, reconhecendo as particularidades do setor agropecuário. O setor agrário será diretamente impactado pela nova regulamentação, exigindo um mapeamento detalhado e antecipado dos impactos nas suas operações. A unificação de tributos e a possível revisão de regimes especiais podem gerar tanto oportunidades quanto riscos.",
      },
      {
        title: "TRANSIÇÃO DA REFORMA TRIBUTÁRIA",
        content:
          "Após um período de testes que se inicia em 2026, a reforma já impactará significativamente as empresas em 2027, tendo sua implantação completa em 2033. Nesse contexto, o planejamento antecipado é essencial. Identificar os impactos financeiros, ajustar cadeias de fornecimento, bem como rever a política comercial são passos fundamentais para mitigar riscos e aproveitar benefícios.",
      },
      {
        title: " SUSTENTABILIDADE E PREPARAÇÃO",
        content:
          "É tempo de as empresas do setor iniciarem as preparações para as mudanças, fortalecendo sua posição no mercado e garantindo sustentabilidade no longo prazo. Temos um plano personalizado que pode ser adaptado conforme a complexidade das operações e a regulamentação da Reforma Tributária em curso.",
      },
    ],
    timeline: [
      { year: "2026", desc: "Início do período de testes" },
      { year: "2027", desc: "Início do impacto real nas empresas" },
      { year: "2033", desc: "Implantação completa do novo sistema" },
    ],
  },
  "contabilidade-personalizada": {
    title: "Contabilidade Personalizada",
    subtitle: "GESTÃO ESTRATÉGICA E COMPLIANCE",
    icon: Calculator,
    image: serviceAccounting,
    description:
      "Gestão financeira e planejamento tributário estratégico para empresas que buscam inteligência fiscal e compliance. Valorizamos a transparência e a precisão dos documentos, bem como o cumprimento de todas as obrigações legais.",
    sections: [
      {
        title: "INTELIGÊNCIA FISCAL E TOMADA DE DECISÕES",
        content:
          "Análise, adequação e eficiência da gestão empresarial e controle interno para o desenvolvimento de estratégias personalizadas que auxiliam nas tomadas de decisões.",
      },
      {
        title: "AUDITORIA E CONFERÊNCIA",
        content:
          "Compreende a auditoria independente contábil e a auditoria operacional. Esta área preza pela minuciosa conferência dos registros contábeis de nossos clientes, assegurando a conformidade e a veracidade dessas informações.",
      },
    ],
    items: [
      "BPO Financeiro",
      "Constituição e Regularização de Empresas",
      "Consultoria e Assessoria Contábil e/ou Tributária",
      "Recomposição Contábil e Tributária",
    ],
  },
  "gestao-tributaria": {
    title: "Gestão Tributária",
    subtitle: "OTIMIZAÇÃO E SEGURANÇA FISCAL",
    icon: Scale,
    image: serviceTax,
    description:
      "Implementação e execução das melhores estratégias tributárias com redução máxima de riscos e otimização de resultados. Com uma equipe multidisciplinar, que estuda a legislação, a contabilidade e o histórico fiscal de cada negócio, prestamos assessoria e consultoria tributária aos clientes, garantindo a conformidade legal e otimizando a carga tributária das organizações.",
    sections: [
      {
        title: "ESTRATÉGIA MULTIDISCIPLINAR",
        content:
          "Nossa equipe analisa profundamente a legislação e o histórico fiscal para entregar soluções que vão além do básico, focando na real economia tributária e segurança jurídica.",
      },
    ],
    items: [
      "Compliance Tributário",
      "Planejamento Tributário",
      "Assessoria Tributária",
      "Recuperação de Tributos",
      "Transferência de Créditos (ICMS)",
      "Assessoria em Notificações e Intimações Administrativas",
      "Habilitação, Compensação, Restituição e Acompanhamento de Créditos",
    ],
  },
  "holding-patrimonial": {
    title: "Holding Patrimonial",
    subtitle: "ESTRUTURAÇÃO E MANUTENÇÃO ESTRATÉGICA",
    icon: Building,
    image: serviceHolding,
    description:
      "Atuamos de forma estratégica, focando na melhor estratégia para atender sua necessidade, funcionando como um parceiro fundamental junto ao advogado na estruturação e manutenção da holding.",
    sections: [
      {
        title: "Planejamento Tributário e Societário",
        content:
          "Análise do regime tributário mais vantajoso (Lucro Presumido/Real), definição da estrutura societária ideal (tipo de holding) e orientação técnica para minimizar custos fiscais e riscos legais.",
      },
      {
        title: "Constituição e Regularização",
        content:
          "Abertura de CNPJ e registro da holding, integralização de bens ao capital social e organização completa da documentação contábil e fiscal.",
      },
      {
        title: "Gestão Contábil e Financeira",
        content:
          "Escrituração de todos os movimentos financeiros e patrimoniais, elaboração de balanços, demonstrações financeiras (DRE, DFC) e apuração rigorosa de impostos (IRPJ, CSLL).",
      },
      {
        title: "Obrigações Acessórias e Conformidade",
        content:
          "Envio de declarações ao Fisco (ECD, ECF, DCTF), controle de certidões negativas de débitos e garantia total da regularidade fiscal da empresa.",
      },
      {
        title: "Suporte Estratégico e Sucessório",
        content:
          "Análise de riscos e oportunidades, base técnica para decisões sucessórias, gestão de dividendos e parceria com advogados para governança familiar.",
      },
    ],
    subItems: [
      {
        category: "Destaques do Planejamento",
        list: [
          "Análise de regime tributário (Lucro Presumido vs Real)",
          "Integralização de bens ao capital social",
          "Emissão de relatórios de lucros e dividendos",
          "Planejamento sucessório e governança familiar",
        ],
      },
    ],
  },
  "calculos-judiciais": {
    title: "Cálculos Judiciais",
    subtitle: "EFICIÊNCIA EM CASOS COMPLEXOS",
    icon: Gavel,
    image: serviceJustice,
    description:
      "Nossa perícia contábil destaca-se na abordagem de casos cíveis complexos, oferecendo uma eficiência excepcional ao lidar com nuances financeiras, econômicas e contábeis. Fornecemos relatórios especializados que transcendem os cálculos, oferecendo uma visão detalhada e estratégica para fortalecer sua defesa jurídica em processos na Justiça Estadual e Federal.",
    sections: [
      {
        title: "CONSULTORIA ESPECIALIZADA EM PERÍCIA JUDICIAL",
        content:
          "Além dos serviços de cálculos, nossa equipe oferece consultoria especializada em perícia judicial, proporcionando orientações valiosas para a construção de estratégias robustas em casos cíveis.",
      },
      {
        title: "Cálculos Bancários",
        content:
          "Especialização em cálculos periciais para diversas operações, com análise detalhada para fortalecer sua posição antes ou durante o processo legal. Fornecemos suporte pericial integral, com cálculos detalhados para embasar estratégias legais em diversas operações e situações bancárias.",
      },
      {
        title: "Cálculos Cíveis",
        content:
          "Nossa equipe oferece uma expertise especializada em cálculos cíveis, cobrindo uma variedade de casos que envolvem questões financeiras, econômicas e contábeis. Vamos além dos números, fornecendo uma análise detalhada que serve como suporte crucial para sua estratégia jurídica em processos na Justiça Estadual e Federal. Nosso enfoque exclusivo em perícia contábil judicial nos torna aptos a lidar com complexidades específicas de casos cíveis, proporcionando uma vantagem estratégica em sua defesa.",
      },
      {
        title: "Cálculos Trabalhistas",
        content:
          "Conte com nossos especialistas em perícia para fornecer análises detalhadas, suporte em processos judiciais e expertise técnica em casos trabalhistas. Eliminamos a complexidade dos cálculos, garantindo precisão nas liquidações trabalhistas e proporcionando uma base sólida para suas argumentações jurídicas. Ao confiar na nossa perícia e serviços de cálculos, você tem mais tempo e energia para concentrar-se na defesa eficaz dos seus clientes. Segurança total e cálculos precisos para instrução, contestação ou liquidação de sentença.",
      },
      {
        title: "Cálculos de Falências e Recuperação Judicial",
        content:
          "Atuamos na análise de viabilidade e suporte técnico em processos de falência e recuperação judicial, gerando transparência e credibilidade ao processo, identificando a crise com análises financeiras e patrimoniais, auxiliando na elaboração e execução do plano de reestruturação, e fornecendo os cálculos e relatórios precisos para a viabilidade da empresa ou o pagamento de dívidas, sendo fundamental para a tomada de decisões estratégicas e legais.",
      },
    ],
    subItems: [
      {
        category: "CÁLCULOS BANCÁRIOS",
        list: [
          "Laudo Revisional de Operações de Crédito Bancário e Crédito Rural",
          "Análise detalhada pré-ajuizamento para fortalecer sua posição antes do processo legal para Ação Revisional de Conta Corrente",
          "Parecer de Capacidade de Pagamento (Lei do Superendividamento)",
          "Parecer e Cálculo de Liquidação de Sentença",
        ],
      },
      {
        category: "CÁLCULOS CÍVEIS",
        list: [
          "Correção monetária e apuração de juros moratórios",
          "Cálculos de execução de contratos firmados entre terceiros",
          "Cálculo revisional do FGTS",
          "Revisão do PASEP",
        ],
      },
      {
        category: "CÁLCULOS TRABALHISTAS",
        list: [
          "Cálculos de inicial e liquidação de sentença",
          "Laudo para fins de impugnação",
          "Apuração de folha de ponto, horas extras e verbas em geral",
          "Apuração de Imposto de Renda, INSS e FGTS",
          "Cálculo de rescisão de contrato de trabalho",
          "Assistência em Perícia Trabalhista",
          "Cálculos para Acordo",
        ],
      },
    ],
  },
};

const otherServices = [
  { title: "Avaliação de Empresas", slug: "contabilidade-personalizada" },
  { title: "Transações Societárias", slug: "gestao-tributaria" },
  { title: "Reestruturação Patrimonial", slug: "holding-patrimonial" },
  { title: "Diagnósticos de Ativos", slug: "gestao-tributaria" },
  { title: "Recursos Financeiros", slug: "contabilidade-personalizada" },
];

import { MetaHead } from "@/components/seo/MetaHead";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData[id as keyof typeof servicesData];
  const [news, setNews] = useState<LegisWebNews[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchLegisWebNews();
        // Get the first 3 news items
        const latestNews = Array.isArray(data)
          ? data.slice(0, 3)
          : data?.noticias?.slice(0, 3) || [];
        setNews(latestNews);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
      } finally {
        setNewsLoading(false);
      }
    };

    loadNews();
  }, []);

  if (!service)
    return <div className="pt-32 text-center">Serviço não encontrado</div>;

  return (
    <div className="min-h-screen bg-white">
      <MetaHead
        title={service.title}
        description={service.description}
        image={service.image}
      />
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
            <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
              Área de Atuação
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4">
              {service.title}
            </h1>
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
                <h2 className="text-2xl font-bold text-primary mb-6 font-heading">
                  {service.subtitle}
                </h2>
                <div className="aspect-video rounded-xl overflow-hidden mb-8 shadow-2xl bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
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

              {service.timeline && (
                <div className="mb-12 py-10 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-primary mb-8 font-heading text-center uppercase tracking-wide">
                    Linha do Tempo da Transição
                  </h3>
                  <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                      {service.timeline.map((item, i) => (
                        <div key={i} className="text-center group">
                          <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4 border-4 border-white shadow-xl group-hover:scale-110 transition-transform">
                            {item.year}
                          </div>
                          <p className="text-gray-700 font-bold text-sm">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {service.items && (
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-8">
                  <h3 className="text-xl font-bold text-primary mb-6 font-heading">
                    SERVIÇOS EM {service.title.toUpperCase()}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2
                          className="text-secondary shrink-0 mt-1"
                          size={18}
                        />
                        <span className="text-gray-700 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.subItems &&
                service.subItems.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-8"
                  >
                    <h3 className="text-xl font-bold text-primary mb-6 font-heading">
                      {sub.category}
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {sub.list.map((item, lIdx) => (
                        <div key={lIdx} className="flex items-start gap-3">
                          <CheckCircle2
                            className="text-secondary shrink-0 mt-1"
                            size={18}
                          />
                          <span className="text-gray-700 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              <div className="mt-12">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-8 rounded-lg shadow-lg shadow-secondary/20">
                  Mais informações
                </Button>
              </div>
            </div>

            {/* Sidebar Area */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-6 font-heading flex items-center gap-2">
                    ÚLTIMAS NOTÍCIAS
                    <div className="flex-1 h-px bg-gray-200 ml-2" />
                  </h3>
                  <div className="space-y-6">
                    {newsLoading ? (
                      Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-white border border-gray-100 rounded-2xl p-4 flex gap-4"
                        >
                          <div className="space-y-4 w-full">
                            <Skeleton className="h-3 w-12" />
                            <div className="space-y-2">
                              <Skeleton className="h-4 w-full" />
                              <Skeleton className="h-4 w-3/4" />
                            </div>
                          </div>
                        </div>
                      ))
                    ) : news.length > 0 ? (
                      news.map((newsItem, i) => (
                        <Link
                          key={i}
                          to="/noticias"
                          className="flex gap-4 group cursor-pointer bg-white border border-gray-100 hover:shadow-md rounded-2xl p-4"
                        >
                          <div className="space-y-4">
                            <span className="text-[10px] text-gray-400 font-bold uppercase block mb-1">
                              {newsItem.assunto || "N/A"}
                            </span>
                            <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                              {newsItem.titulo || "Título não disponível"}
                            </h4>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="text-gray-400 text-sm">
                        Nenhuma notícia disponível
                      </div>
                    )}
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

import { 
  Calculator, 
  Scale, 
  Landmark, 
  Briefcase, 
  TrendingUp, 
  Building2, 
  FileCheck, 
  Users 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import abstractBg from "@assets/generated_images/abstract_financial_concept_for_services_section.png";

const services = [
  {
    icon: Landmark,
    title: "Perícias Bancárias",
    description: "Análise técnica de contratos bancários e crédito rural. Identificação de inconsistências, cláusulas abusivas e juros indevidos."
  },
  {
    icon: Calculator,
    title: "Cálculos Trabalhistas",
    description: "Segurança total na liquidação de verbas e processos. Cálculos precisos para instrução, contestação ou liquidação de sentença."
  },
  {
    icon: TrendingUp,
    title: "Capacidade de Pagamento",
    description: "Pareceres técnicos (PF e PJ) e PGFN para negociações estratégicas e revisões de dívidas com base na realidade financeira."
  },
  {
    icon: Scale,
    title: "Liquidação de Sentença",
    description: "Transformamos decisões judiciais em valores exatos, com aplicação correta de juros, correções e índices oficiais."
  },
  {
    icon: Building2,
    title: "Recuperação Judicial",
    description: "Da perícia prévia ao acompanhamento interno e gestão. Suporte completo para reestruturação sustentável de empresas."
  },
  {
    icon: Briefcase,
    title: "Contabilidade Personalizada",
    description: "Gestão financeira e planejamento tributário estratégico para empresas que buscam inteligência fiscal e compliance."
  },
  {
    icon: FileCheck,
    title: "IRPF para Investidores",
    description: "Assessoria especializada para apuração e declaração de renda variável: bolsa de valores, criptomoedas e ativos internacionais."
  },
  {
    icon: Users,
    title: "Holding Familiar",
    description: "Estruturação patrimonial com foco em sucessão e proteção. Preservação do legado familiar com segurança jurídica."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
         <img src={abstractBg} alt="Abstract" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-2 block">Nossas Soluções</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6">
            Soluções sob medida para cada desafio financeiro
          </h2>
          <p className="text-lg text-gray-600">
            Atuamos com rigor técnico e visão estratégica para entregar resultados que protegem seu patrimônio e garantem justiça financeira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-secondary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-secondary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <CardHeader>
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button variant="link" className="p-0 h-auto mt-4 text-secondary font-semibold group-hover:translate-x-1 transition-transform">
                  Saiba mais <span className="ml-1">→</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

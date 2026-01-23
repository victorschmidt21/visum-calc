import { 
  Scale, 
  Building2, 
  Tractor, 
  TrendingUp, 
  Activity, 
  Users 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const audience = [
  {
    icon: Scale,
    title: "Advogados",
    description: "Suporte pericial e cálculos técnicos para sustentar teses jurídicas."
  },
  {
    icon: Building2,
    title: "Empresários",
    description: "Proteção contra abusos contratuais e gestão financeira estratégica."
  },
  {
    icon: Tractor,
    title: "Agronegócio",
    description: "Perícias especializadas em contratos agropecuários e crédito rural."
  },
  {
    icon: TrendingUp,
    title: "Investidores Pessoa Física",
    description: "IRPF otimizado para ações, cripto e ativos internacionais."
  },
  {
    icon: Activity,
    title: "Empresas em Recuperação Judicial",
    description: "Acompanhamento de perto para reestruturação sustentável."
  },
  {
    icon: Users,
    title: "Famílias e Sucessores",
    description: "Estruturação de holdings para proteção e continuidade do patrimônio."
  }
];

export default function TargetAudience() {
  return (
    <section id="clientes" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-wider text-md uppercase mb-2 block">Quem Atendemos</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary">
              Parceiros estratégicos para o seu sucesso
            </h2>
          </div>
          <p className="text-gray-600 max-w-md text-lg leading-relaxed">
            Oferecemos soluções específicas para cada perfil de cliente, garantindo atendimento personalizado e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audience.map((item, index) => (
            <Card key={index} className="border-none shadow-lg shadow-gray-200/50 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

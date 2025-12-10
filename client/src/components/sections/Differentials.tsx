import { 
  Users, 
  Target, 
  Settings, 
  Scale, 
  ShieldCheck, 
  LineChart 
} from "lucide-react";

const differentials = [
  {
    icon: Users,
    title: "Expertise Multidisciplinar",
    description: "Profissionais de contabilidade, perícia e direito atuando de forma integrada."
  },
  {
    icon: Target,
    title: "Atuação em Nichos Complexos",
    description: "Crédito rural, PGFN, bolsa de valores, criptomoedas e holdings."
  },
  {
    icon: Settings,
    title: "Customização Total",
    description: "Cada cliente recebe uma solução sob medida, sem modelos prontos."
  },
  {
    icon: Scale,
    title: "Integração Jurídico-Contábil",
    description: "Planejamento sucessório e proteção patrimonial com suporte completo."
  },
  {
    icon: ShieldCheck,
    title: "Compliance e Segurança Fiscal",
    description: "Legalidade e aproveitamento máximo de benefícios tributários."
  },
  {
    icon: LineChart,
    title: "Visão de Futuro",
    description: "Preservamos o patrimônio e o legado para as próximas gerações."
  }
];

export default function Differentials() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/80 via-primary to-primary opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-2 block">Por que escolher a Visum Calc?</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Diferenciais Visum Calc
          </h2>
          <p className="text-lg text-gray-300">
            Nossa abordagem única combina técnica apurada e visão estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors group"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <item.icon className="w-7 h-7 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

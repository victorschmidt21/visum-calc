import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "A Visum Calc foi fundamental para contestarmos cálculos abusivos em contrato bancário. O profissionalismo e a clareza dos relatórios deram segurança ao processo.",
      author: "Dr. Ricardo M.",
      role: "Advogado Tributarista"
    },
    {
      text: "Graças ao suporte da equipe, conseguimos estruturar nossa holding familiar com segurança. Hoje temos tranquilidade quanto à proteção do patrimônio e sucessão.",
      author: "Mariana S.",
      role: "Empresária"
    },
    {
      text: "A perícia prévia realizada pela Visum Calc foi decisiva para aprovarmos a recuperação judicial. Uma atuação técnica impecável que salvou nosso negócio.",
      author: "João C.",
      role: "Diretor Financeiro"
    }
  ];

  return (
    <section className="py-24 bg-primary text-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-2 block">Depoimentos</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <CardContent className="pt-8 px-8 pb-8">
                <Quote className="w-10 h-10 text-secondary mb-6 opacity-80" />
                <p className="text-lg text-gray-200 mb-8 italic leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="font-bold text-white text-lg">{t.author}</h4>
                  <p className="text-secondary text-sm">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

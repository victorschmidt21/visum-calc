"use client";

import Image from "next/image";
import {
  Calculator,
  Scale,
  TrendingDown,
  Building,
  Gavel
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: TrendingDown,
    title: "Reforma Tributária",
    slug: "reforma-tributaria",
    description: "Prepare sua empresa para o novo cenário fiscal brasileiro com análise detalhada dos impactos do IBS e CBS."
  },
  {
    icon: Calculator,
    title: "Contabilidade Personalizada",
    slug: "contabilidade-personalizada",
    description: "Gestão financeira estratégica com foco em compliance e tomada de decisões inteligentes para o seu negócio."
  },
  {
    icon: Scale,
    title: "Gestão Tributária",
    slug: "gestao-tributaria",
    description: "Otimização fiscal com redução de riscos e recuperação de créditos tributários de forma segura e eficiente."
  },
  {
    icon: Building,
    title: "Holding Patrimonial",
    slug: "holding-patrimonial",
    description: "Estruturação patrimonial focada em eficiência fiscal, proteção de ativos e planejamento sucessório familiar."
  },
  {
    icon: Gavel,
    title: "Cálculos Judiciais",
    slug: "calculos-judiciais",
    description: "Laudos técnicos e cálculos precisos para suporte em processos judiciais cíveis, trabalhistas e bancários."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <Image src="/generated_images/abstract_financial_concept_for_services_section.png" alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider text-md uppercase mb-2 block">Nossas Soluções</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6">
            Soluções completas para sua empresa
          </h2>
          <p className="text-lg text-gray-600">
            Inteligência contábil e pericial para decisões estratégicas e resultados sustentáveis.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <Link key={index} href={`/servicos/${service.slug}`} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] min-w-[300px] group cursor-pointer">
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-secondary/20 relative overflow-hidden">
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
                  <div className="mt-4 text-secondary font-semibold group-hover:translate-x-1 transition-transform flex items-center">
                    Saiba mais <span className="ml-1">→</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

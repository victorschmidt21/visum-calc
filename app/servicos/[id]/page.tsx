import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./service-detail-client";
import JsonLd from "@/components/seo/JsonLd";

const servicesData: Record<string, { title: string; description: string; image: string }> = {
  "reforma-tributaria": {
    title: "Reforma Tributária",
    description: "A Reforma Tributária tem como principal objetivo a reestruturação do atual Sistema Tributário Nacional, simplificando a tributação nos âmbitos Federal, Estadual e Municipal.",
    image: "/images/service-tax.png",
  },
  "contabilidade-personalizada": {
    title: "Contabilidade Personalizada",
    description: "Gestão financeira e planejamento tributário estratégico para empresas que buscam inteligência fiscal e compliance.",
    image: "/images/service-accounting.png",
  },
  "gestao-tributaria": {
    title: "Gestão Tributária",
    description: "Implementação e execução das melhores estratégias tributárias com redução máxima de riscos e otimização de resultados.",
    image: "/images/service-tax.png",
  },
  "holding-patrimonial": {
    title: "Holding Patrimonial",
    description: "Atuamos de forma estratégica, focando na melhor estratégia para atender sua necessidade na estruturação e manutenção da holding.",
    image: "/images/service-holding.png",
  },
  "calculos-judiciais": {
    title: "Cálculos Judiciais",
    description: "Nossa perícia contábil destaca-se na abordagem de casos cíveis complexos, oferecendo eficiência excepcional ao lidar com nuances financeiras, econômicas e contábeis.",
    image: "/images/service-justice.png",
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((id) => ({ id }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const service = servicesData[id];
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      url: `https://visumcalc.com.br/servicos/${id}`,
      title: `${service.title} | Visum Calc`,
      description: service.description,
      images: [{ url: service.image }],
    },
    alternates: { canonical: `https://visumcalc.com.br/servicos/${id}` },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = servicesData[id];
  if (!service) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://visumcalc.com.br" },
      { "@type": "ListItem", position: 2, name: "Serviços", item: "https://visumcalc.com.br/#servicos" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://visumcalc.com.br/servicos/${id}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "Organization", name: "Visum Calc", url: "https://visumcalc.com.br" },
    url: `https://visumcalc.com.br/servicos/${id}`,
  };

  return (
    <>
      <JsonLd schema={breadcrumb} />
      <JsonLd schema={serviceSchema} />
      <ServiceDetailClient id={id} />
    </>
  );
}

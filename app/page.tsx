import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Precisão Contábil e Pericial",
  description:
    "Na Visum Calc, unimos expertise contábil, jurídica e pericial para transformar complexidade em clareza.",
  openGraph: {
    url: "https://visumcalc.com.br/",
    title: "Precisão Contábil e Pericial | Visum Calc",
    description:
      "Na Visum Calc, unimos expertise contábil, jurídica e pericial para transformar complexidade em clareza.",
  },
  alternates: { canonical: "https://visumcalc.com.br/" },
};

export default function Page() {
  return <HomeClient />;
}

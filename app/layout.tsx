import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import JsonLd from "@/components/seo/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans", weight: ["400", "600", "700", "800"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://visumcalc.com.br"),
  title: { template: "%s | Visum Calc", default: "Visum Calc — Precisão Contábil e Pericial" },
  description: "Soluções personalizadas em perícias bancárias, cálculos, contabilidade e tributário.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Visum Calc",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@visumcalc",
    title: "Visum Calc — Precisão Contábil e Pericial",
    description: "Soluções personalizadas em perícias bancárias, cálculos, contabilidade e tributário.",
    images: ["/og-image.png"],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Visum Calc",
  url: "https://visumcalc.com.br",
  logo: "https://visumcalc.com.br/logo2.png",
  description: "Soluções personalizadas em perícias bancárias, cálculos, contabilidade e tributário.",
  telephone: "+554599117803",
  address: { "@type": "PostalAddress", addressCountry: "BR", addressLocality: "Toledo", addressRegion: "PR" },
  sameAs: [
    "https://www.linkedin.com/company/visum-calc/",
    "https://www.instagram.com/visumcalc",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <JsonLd schema={orgSchema} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

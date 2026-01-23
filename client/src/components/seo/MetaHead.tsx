import { Helmet } from "react-helmet-async";

interface MetaHeadProps {
  title: string;
  description?: string;
  image?: string;
}

export function MetaHead({ 
  title, 
  description = "Soluções personalizadas em perícias bancárias, cálculos, contabilidade e tributário.",
  image = "/og-image.png" 
}: MetaHeadProps) {
  const siteTitle = `${title} | Visum Calc`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

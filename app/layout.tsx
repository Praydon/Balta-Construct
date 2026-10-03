import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/site/analytics";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: "Balta Construct — фасадные работы", template: "%s | Balta Construct" },
  description: siteConfig.description,
  keywords: ["фасадные работы Алматы", "вентилируемый фасад", "монтаж керамогранита", "композитные панели", "монтаж фасада"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    siteName: "Balta Construct",
    title: "Balta Construct — профессиональные фасадные работы",
    description: siteConfig.description,
    url: siteConfig.siteUrl,
  },
  twitter: { card: "summary_large_image", title: "Balta Construct", description: siteConfig.description },
};

export const viewport: Viewport = { themeColor: "#111318", colorScheme: "light" };

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  telephone: siteConfig.phoneDisplay,
  description: siteConfig.description,
  areaServed: "Алматы и Алматинская область",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Analytics />
        <SiteHeader />
        {children}
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}

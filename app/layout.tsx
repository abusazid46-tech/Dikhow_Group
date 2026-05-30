import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://dikhowgroup.com"),
  title: {
    default: "Dikhow Group | Construction, Organic Agriculture & Eri Silk",
    template: "%s | Dikhow Group"
  },
  description:
    "Dikhow Group is a diversified enterprise based in Assam, India, operating across construction, organic agriculture, and Eri silk production.",
  keywords: [
    "Dikhow Group",
    "Assam construction company",
    "organic agriculture Assam",
    "Eri silk Assam",
    "Dikhow Construction",
    "Dikhow Agro Organic",
    "Dikhow EriNest"
  ],
  openGraph: {
    title: "Dikhow Group",
    description:
      "Building Progress, Cultivating Sustainability, Preserving Heritage.",
    url: "https://dikhowgroup.com",
    siteName: "Dikhow Group",
    images: [
      {
        url: "/images/hero-dikhow-group.png",
        width: 1200,
        height: 630,
        alt: "Dikhow Group enterprise landscape"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dikhow Group",
    description:
      "A diversified Assam enterprise across construction, organic agriculture, and Eri silk.",
    images: ["/images/hero-dikhow-group.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

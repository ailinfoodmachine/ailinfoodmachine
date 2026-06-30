import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import settings from "@/data/settings.json";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata = {
  metadataBase: new URL(settings.siteUrl),
  title: {
    default: "Jinan Ailin Machinery Equipment Co., Ltd. | Food Processing Machinery",
    template: "%s | Jinan Ailin Machinery"
  },
  description:
    "Professional food processing machinery supplier for vegetable cutting, cleaning, peeling, meat processing, and dough preparation equipment.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Jinan Ailin Machinery Equipment Co., Ltd.",
    description:
      "Food processing machinery for global manufacturers, central kitchens, and commercial food factories.",
    url: settings.siteUrl,
    siteName: "Jinan Ailin Machinery",
    images: [
      {
        url: "/images/catalog/page-02.png",
        width: 1207,
        height: 825,
        alt: "Ailin food processing machinery"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <FloatingContact />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

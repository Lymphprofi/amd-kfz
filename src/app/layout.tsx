import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCallBar } from "@/components/MobileCallBar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amd-kfz-werkstatt.de"),
  title: {
    default: "AMD KFZ & Motorrad Meisterwerkstatt Freiburg | Reparatur & Service",
    template: "%s | AMD KFZ Werkstatt Freiburg",
  },
  description:
    "Freie Meisterwerkstatt in Freiburg-Betzenhausen. Auto, Motorrad & Roller – fair, transparent, persönlich. Rufacher Str. 5A.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-charcoal">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
        >
          Zum Inhalt springen
        </a>
        <JsonLd />
        <Header />
        <div id="inhalt" className="flex-1">
          {children}
        </div>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}

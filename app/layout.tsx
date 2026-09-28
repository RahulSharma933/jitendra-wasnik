import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jitendra Wasnik — Public Representative, Nagpur",
  description:
    "Official website of Jitendra Wasnik, Public Representative from Nagpur, Maharashtra. Stay updated with latest news, achievements, and connect directly.",
  keywords: "Jitendra Wasnik, Nagpur, Public Representative, Maharashtra, जितेंद्र वासनिक",
  openGraph: {
    title: "Jitendra Wasnik — Public Representative, Nagpur",
    description: "Serving the people of Nagpur with dedication and integrity.",
    url: "https://jitendrawasnik.com",
    siteName: "Jitendra Wasnik",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

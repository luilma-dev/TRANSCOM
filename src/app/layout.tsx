import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TRANSCOM | Transporte de Cargas Refrigeradas e Congeladas",
  description:
    "A Transcom é especialista em transporte de cargas refrigeradas e congeladas, oferecendo soluções logísticas com segurança, eficiência e compromisso com o seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={dmSans.variable}>
      <body className="font-sans min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}


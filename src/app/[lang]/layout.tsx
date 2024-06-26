import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {Locale, i18n} from "../../../i18n.config";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

async function generateStaticParams() {
  return i18n.locales.map(locale => ({lang: locale}))
}

export const metadata: Metadata = {
  title: "Qikai | Portfolio",
  description: "Qikai's portfolio.",
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: {lang: Locale}
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header lang={params.lang}/>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  );
}

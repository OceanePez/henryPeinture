import type { Metadata } from "next";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Menu from "@/components/Menu";

export const metadata: Metadata = {
  title: "Florence Sonia Henry",
  description: "Peinture des rêves",
  // category: "",
  // robots: "",
  // generator: "Next.js",
  // publisher: "Art",
  // keywords: [
  //   "Florence Henry",
  //   "intuitive art",
  //   "symbolic painting",
  //   "spiritual art",
  //   "visionary artist",
  //   "art therapy",
  //   "contemporary painting",
  // ],
};

export function generateStaticParams() {
  return ["fr", "en"].map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Menu></Menu>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { Outfit } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/shared/Theme/ThemeProvider/ThemeProvider';
import { Locale, i18n } from '@/i18n.config';
import { Footer } from '@/layouts/Footer';
import { Header } from '@/layouts/Header';
import { getDictionary } from '@/lib/utils';
import { Suspense } from 'react';
import Loading from './loading';

const outfit = Outfit({ subsets: ['latin'] });

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export const metadata = {
  title: 'Portfolio Website',
  description: 'https://github.com/volodymyrfilon',
};

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale; project?: string };
}) {
  const { common } = await getDictionary(lang);
  const { logo, header, footer } = common;
  return (
    <html lang={lang} suppressHydrationWarning className={outfit.className}>
      <body className={`${outfit.className} selection:bg-primary/40`}>
        <Suspense fallback={<Loading />}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header data={header} lang={lang} logo={logo} />
            {children}
            <Footer data={footer} />
            <div id="modal" />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}

import { Locale, i18n } from '@/i18n.config';
import localFont from 'next/font/local';
import { Suspense } from 'react';
import Loading from './loading';

import { Cursor } from '@/components/shared/Cursor';
import { PrivacyPolicyPopup } from '@/components/shared/PrivacyPolicyPopup';
import { ThemeProvider } from '@/components/shared/Theme/ThemeProvider';
import { Footer } from '@/layouts/Footer';
import { Header } from '@/layouts/Header';
import { getDictionary } from '@/lib/utils';
import './globals.css';

const eUkraine = localFont({
  variable: '--font-eUkraine',
  src: [
    {
      path: '../../../public/fonts/e-Ukraine-Bold.otf',
      weight: '700',
    },
    {
      path: '../../../public/fonts/e-Ukraine-Light.otf',
      weight: '300',
    },
    {
      path: '../../../public/fonts/e-Ukraine-Medium.otf',
      weight: '500',
    },
    {
      path: '../../../public/fonts/e-Ukraine-Regular.otf',
      weight: '400',
    },
    {
      path: '../../../public/fonts/e-Ukraine-Thin.otf',
      weight: '100',
    },
    {
      path: '../../../public/fonts/e-Ukraine-UltraLight.otf',
      weight: '200',
    },
  ],
});

const eUkraineHead = localFont({
  src: [
    {
      path: '../../../public/fonts/e-UkraineHead-Bold.otf',
      weight: '700',
    },
    {
      path: '../../../public/fonts/e-UkraineHead-Light.otf',
      weight: '300',
    },
    {
      path: '../../../public/fonts/e-UkraineHead-Medium.otf',
      weight: '500',
    },
    {
      path: '../../../public/fonts/e-UkraineHead-Regular.otf',
      weight: '400',
    },
    {
      path: '../../../public/fonts/e-UkraineHead-Thin.otf',
      weight: '100',
    },
    {
      path: '../../../public/fonts/e-UkraineHead-UltraLight.otf',
      weight: '200',
    },
  ],
  variable: '--font-eUkraineHead',
});

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
  params: { lang: Locale };
}) {
  const { common } = await getDictionary(lang);
  const { logo, header, footer, privacyPolicyPopupData } = common;
  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${eUkraine.variable} ${eUkraineHead.variable} sans-serif`}
    >
      <body className={`selection:bg-primary/40`}>
        <Suspense fallback={<Loading />}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Cursor />
            <Header data={header} lang={lang} logo={logo} />
            {children}
            <Footer data={footer} />
            <div id="modal" />
            <PrivacyPolicyPopup data={privacyPolicyPopupData} />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { i18n } from '@/i18n.config';

import { match as matchLocale } from '@formatjs/intl-localematcher';

function getLocale() {
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  const locale = matchLocale(locales, locales, 'en');

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale();
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|public|hero|about|contact|work|meta|favicon.ico).*)',
  ],
};

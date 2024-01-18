// import 'server-only';
import type { Locale } from '@/i18n.config';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const dictionaries = {
  en: async () => ({
    ...(await import(`@/dictionaries/en/common.json`)).default,
  }),

  ua: async () => ({
    ...(await import(`@/dictionaries/ua/common.json`)).default,
  }),

  pl: async () => ({
    ...(await import(`@/dictionaries/pl/common.json`)).default,
  }),

  // de: async () => ({
  //   ...(await import(`@/dictionaries/de/common.json`)).default,
  // }),
};

const metadata = {
  en: async () => ({
    ...(await import(`@/dictionaries/en/meta/common.json`)).default,
  }),

  ua: async () => ({
    ...(await import(`@/dictionaries/ua/meta/common.json`)).default,
  }),

  pl: async () => ({
    ...(await import(`@/dictionaries/pl/meta/common.json`)).default,
  }),

  // de: async () => ({
  //   ...(await import(`@/dictionaries/de/meta/common.json`)).default,
  // }),
};

const commonDictionaries = {
  en: async () => (await import(`@/dictionaries/en/common.json`)).default,
  ua: async () => (await import(`@/dictionaries/ua/common.json`)).default,
  pl: async () => (await import(`@/dictionaries/pl/common.json`)).default,
  // de: async () => (await import(`@/dictionaries/de/common.json`)).default,
};

export function cn(...inputs: any) {
  return twMerge(clsx(inputs));
}

export const getDictionary = async (lang: Locale) => dictionaries[lang]();
export const getMetadata = async (lang: Locale) => metadata[lang]();
export const getCommonDictionaries = async (lang: Locale) => commonDictionaries[lang]();

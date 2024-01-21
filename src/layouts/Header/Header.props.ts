import { Locale } from '@/i18n.config';

export interface HeaderProps {
  data: {
    headerNav: {
      name: string;
      href: string;
    }[];
  };
  lang: Locale;
  logo: {
    href: string;
  };
}

import { Locale } from '@/i18n.config';

export interface HeaderProps {
  data: {
    headerNav: {
      name: string;
      href: string;
    }[];
    headerLanguageLabel: string;
    mobileMenu: {
      menuOpenLabel: string;
      menuCloseLabel: string;
    };
  };
  lang: Locale;
  logo: {
    href: string;
  };
}

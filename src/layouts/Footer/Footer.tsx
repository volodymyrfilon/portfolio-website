import { Socials } from '@/components/shared/Socials';
import Link from 'next/link';
import { FooterProps } from './Footer.props';

export const Footer = ({ data }: FooterProps) => {
  const { footerText, footerPrivacyPolicy } = data;
  return (
    <footer className="bg-secondary py-8 font-eUkraineHead text-sm md:py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between text-center text-muted-foreground">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* privacy policy */}
          <Link
            href={footerPrivacyPolicy.href}
            className="underline hover:text-primary focus:text-primary"
          >
            {footerPrivacyPolicy.label}
          </Link>
          {/* copyright */}
          <div className="mt-2">{footerText}</div>
        </div>
      </div>
    </footer>
  );
};

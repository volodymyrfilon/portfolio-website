import { Socials } from '@/components/shared/Socials';
import Link from 'next/link';
import { FooterProps } from './Footer.props';

export const Footer = ({ data }: FooterProps) => {
  const { footerText, footerPrivacyPolicy } = data;
  return (
    <footer className="h-[150px] bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* copyright */}
          <div className="text-center text-muted-foreground">{footerText}</div>
          {/* privacy policy */}
          <Link
            href={footerPrivacyPolicy.href}
            className="text-muted-foreground underline hover:text-primary"
          >
            {footerPrivacyPolicy.label}
          </Link>
        </div>
      </div>
    </footer>
  );
};

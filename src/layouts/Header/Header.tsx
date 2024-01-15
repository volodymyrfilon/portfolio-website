'use client';

import { ThemeToggler } from '@/components/shared/Theme/ThemeToggler';
import MobileNav from '@/components/shared/header/MobileNav/MobileNav';
import { Nav } from '@/components/shared/header/Nav';
import { SelectLanguage } from '@/components/shared/header/SelectLanguage';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Logo } from '../Logo';
import { HeaderProps } from './Header.props';

export const Header = ({ data, lang, logo }: HeaderProps) => {
  const { headerNav } = data;
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = () => (window.scrollY > 50 ? setHeader(true) : setHeader(false));

    // Add the scroll event listener
    window.addEventListener('scroll', scrollYPos);

    // Remove the scroll event listener
    return () => window.removeEventListener('scroll', scrollYPos);
  });

  return (
    <header
      className={`font-eUkraineHead ${
        header ? 'bg-white py-4 shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fdfaff]'}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <Logo data={logo} />
          <div className="flex items-center gap-x-6 ">
            {/* nav */}
            <Nav
              headerNav={headerNav}
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            {/* select language */}
            <SelectLanguage lang={lang} />
            {/* change theme */}
            <ThemeToggler />
            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav headerNav={headerNav} logo={logo} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import { Socials } from '@/components/shared/Socials';
import { links } from '@/database';
import { useMenuActive } from '@/hooks/useMenuActive';
import { Logo } from '@/layouts/Logo';
import Link from 'next/link';
import { MobileNavProps } from './MobileNav.props';

const MobileNav = ({ headerNav, logo, mobileMenu }: MobileNavProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col items-center justify-between py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo data={logo} />
            <nav className="flex flex-col items-center gap-y-6">
              {links.map((link, index) => {
                const isActive = useMenuActive(link.path);
                return (
                  <Link
                    className={`text-2xl hover:text-primary ${isActive ? 'text-primary' : ''}`}
                    href={link.path}
                    key={index}
                  >
                    <SheetClose>{link.name}</SheetClose>
                  </Link>
                );
              })}
            </nav>
          </div>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

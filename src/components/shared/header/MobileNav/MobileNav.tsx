import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import { Socials } from '@/components/shared/Socials';
import { useMenuActive } from '@/hooks/useMenuActive';
import { Logo } from '@/layouts/Logo';
import Link from 'next/link';
import { MobileNavProps } from './MobileNav.props';

const MobileNav = ({ headerNav, logo }: MobileNavProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <AlignJustify className="cursor-pointer" />
        </button>
      </SheetTrigger>

      <SheetContent>
        <div className="flex h-full flex-col items-center justify-between py-8 font-eUkraineHead">
          <div className="flex flex-col items-center gap-y-32">
            <Logo data={logo} />
            <nav className="flex flex-col items-center gap-y-6">
              {headerNav.map((link, index) => {
                const isActive = useMenuActive(link.href);
                return (
                  <Link
                    className={`text-2xl focus:text-primary ${isActive ? 'text-primary' : ''}`}
                    href={link.href}
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

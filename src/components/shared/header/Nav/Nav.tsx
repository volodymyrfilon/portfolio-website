import { useMenuActive } from '@/hooks/useMenuActive';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { NavProps } from './Nav.props';

export const Nav = ({ containerStyles, linkStyles, underlineStyles, headerNav }: NavProps) => {
  return (
    <nav className={`${containerStyles}`}>
      {headerNav.map((item, index) => {
        const isActive = useMenuActive(item.href);
        return (
          <Link
            className={`font-eUkraineHead text-sm capitalize hover:text-primary focus:text-primary ${linkStyles}`}
            href={item.href}
            key={index}
          >
            {isActive && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

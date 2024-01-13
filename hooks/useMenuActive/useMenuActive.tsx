import { usePathname } from 'next/navigation';

export const useMenuActive = (route: string) => {
  const pathname = usePathname();

  const isActive = (pathname.includes(route) && route.length > 1) || pathname === route;
  return isActive;
};

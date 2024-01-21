import Link from 'next/link';
import { LogoProps } from './Logo.props';

export const Logo = ({ data }: LogoProps) => {
  return (
    <Link href={data.href}>
      <div className="text-4xl font-bold hover:text-primary focus:text-primary">
        V<span className="text-primary">F</span>
      </div>
    </Link>
  );
};

export default Logo;

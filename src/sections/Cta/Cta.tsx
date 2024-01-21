import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import Link from 'next/link';
import { CtaProps } from './Cta.props';

export const Cta = ({ data }: CtaProps) => {
  const { title, buttonContactPage } = data;
  return (
    <section className="bg-tertiary py-24 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 mb-8 max-w-xl text-center">{title}</h2>
          <Link href={buttonContactPage.href}>
            <Button className="gap-x-2">
              {buttonContactPage.name} <Send size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

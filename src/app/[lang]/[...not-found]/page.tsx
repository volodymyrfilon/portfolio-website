import { Button } from '@/components/ui/button';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/utils';
import { HomeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundpage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);
  const { notFound } = common;

  return (
    <section className="h-screen">
      <div className="container">
        <div className="flex flex-col items-center">
          <h1 className="h1 mb-12 mt-12 text-center xl:mb-24">{notFound.title}</h1>
          <Image
            src={'/404/404.svg'}
            alt="404-image"
            height={300}
            width={300}
            className=" mb-12 xl:mb-24"
          />
          {/* buttons */}
          <div className="mt-8 flex gap-x-4">
            <Link href={notFound.buttonHomePage.href}>
              <Button className="flex items-center gap-x-2">
                <HomeIcon size={18} />
                {notFound.buttonHomePage.name}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundpage;

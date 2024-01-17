'use client';

import { Button } from '@/components/ui/button';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/utils';
import { Contact, HomeIcon, MailIcon, PhoneCall } from 'lucide-react';
import Link from 'next/link';

const privacyPolicyPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { common } = await getDictionary(lang);
  const { title, date, content, email, phone } = common['privacyPolicy'];
  return (
    <section className="mb-24 mt-14 min-h-screen xl:mb-32">
      <div className="container">
        {/* main title and date */}
        <div className="">
          <h1 className="h1 privacy-policy_num_extended font-eUkraineHead uppercase">{title}</h1>
          <p className="text-sm text-muted-foreground ">{date}</p>
        </div>

        {/* privacy policy content */}
        <ol className="[counter-reset:section] sm:w-2/3">
          {content.map((item, index) => (
            <li className="mt-12 [counter-increment:section] xl:mt-24" key={index}>
              {/* number */}
              <div className="privacy-policy_num_extended font-eUkraineHead text-4xl font-black md:text-7xl">
                {item.number}
              </div>
              {/* subtitle */}
              <h2 className="mb-10 mt-2 font-eUkraineHead text-2xl font-bold leading-6 md:text-4xl ">
                {item.subtitle}
              </h2>
              {/* text */}
              <ol className="text-sm font-semibold leading-6 text-black/60 [counter-reset:section] dark:text-muted-foreground md:text-base">
                {item.text.map((text, index) => (
                  <li
                    className="my-2 ml-8 px-2 [counter-increment:section] marker:[content:counters(section,'.')]"
                    key={index}
                  >
                    {text}
                  </li>
                ))}
              </ol>
            </li>
          ))}
          {}
        </ol>
        {/* contacts */}
        <div className="mt-6 flex flex-col items-start gap-5 text-left xl:gap-8">
          {/* mail */}
          <div className="flex flex-col gap-x-4 xl:items-start">
            <div className="flex items-center gap-x-2 text-sm md:text-xl">
              <MailIcon size={20} className="text-primary" />
              <h2 className="font-semibold">{email.text}</h2>
            </div>
            <Link
              rel="nofollow noreferrer"
              href="mailto:vdfo26@gmail.com"
              className="text-xs hover:text-primary focus:text-primary md:text-lg"
            >
              {email.content}
            </Link>
          </div>
          {/* phone */}
          <div className="flex flex-col gap-x-4 xl:items-start">
            <div className="flex items-center gap-x-2 text-sm md:text-xl">
              <PhoneCall size={20} className="text-primary" />
              <h2 className="font-semibold">{phone.text}</h2>
            </div>
            <Link
              rel="nofollow noreferrer"
              href="tel:+48578568311"
              className="text-xs hover:text-primary focus:text-primary md:text-lg"
            >
              {phone.content}
            </Link>
          </div>
        </div>
        {/* buttons */}
        <div className="mt-8 flex flex-col gap-4 text-base special:flex-row md:text-lg">
          {/* <Button className="flex w-min items-center gap-x-2 px-2" onClick={() => router.back()}>
            <ChevronsLeft size={18} />
            Back
          </Button> */}
          <Link href="/">
            <Button className="flex items-center gap-x-2">
              <HomeIcon size={18} />
              Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="flex items-center gap-x-2">
              <Contact size={18} />
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default privacyPolicyPage;

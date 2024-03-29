'use client';

import { Form } from '@/components/shared/Form';
import { ContactLoader } from '@/components/ui/loader';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/utils';
import { motion } from 'framer-motion';
import { HomeIcon, MailIcon, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contacts = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const [contactData, setContactData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { common } = await getDictionary(lang);
        const { contacts, form } = common['contact'];
        const { title, subtitle, email, address, phone } = contacts;
        setContactData({ title, subtitle, email, address, phone, form });
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchData();
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!contactData) {
    return console.log('loading data');
  }

  const { title, subtitle, email, address, phone, form } = contactData;

  return (
    <motion.section
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="min-h-screen pt-12"
    >
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">{title}</h2>
        {/* illustration */}
        <div className="flex items-start justify-center">
          <ContactLoader />
        </div>
        {/* text and form */}
        <motion.div
          className="mt-2 flex w-full flex-col gap-12 p-3 xl:mt-10 xl:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          {/* text */}
          <div className="mt-4 flex flex-1 flex-col items-center gap-5 text-center xl:items-start xl:gap-10 xl:text-left">
            <h1 className="h1 mb-8 max-w-md font-eUkraineHead">{subtitle}</h1>
            {/* mail */}
            <div className="flex flex-col items-center gap-x-4 xl:items-start">
              <div className="flex items-center gap-x-2">
                <MailIcon size={20} className="text-primary" />
                <h2 className="text-xl font-semibold">{email.text}</h2>
              </div>
              <Link
                rel="nofollow noreferrer"
                href="mailto:vdfo26@gmail.com"
                className="text-base hover:text-primary focus:text-primary"
              >
                {email.content}
              </Link>
            </div>
            {/* address */}
            <div className="flex flex-col items-center gap-x-4 xl:items-start">
              <div className="flex items-center gap-x-2">
                <HomeIcon size={20} className="text-primary" />
                <h2 className="text-xl font-semibold">{address.text}</h2>
              </div>
              <Link
                rel="nofollow noreferrer"
                href="https://www.google.com/maps/place/Poznan"
                className="text-base hover:text-primary focus:text-primary"
              >
                {address.content}
              </Link>
            </div>
            {/* phone */}
            <div className="flex flex-col items-center gap-x-4 xl:items-start">
              <div className="flex items-center gap-x-2">
                <PhoneCall size={20} className="text-primary" />
                <h2 className="text-xl font-semibold">{phone.text}</h2>
              </div>
              <Link
                rel="nofollow noreferrer"
                href="tel:+48578568311"
                className="text-base hover:text-primary focus:text-primary"
              >
                {phone.content}
              </Link>
            </div>
          </div>
          {/*  form */}
          <div className="w-full flex-1 p-12">
            <Form data={form} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contacts;

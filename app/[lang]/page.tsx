import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/utils';
import { Hero } from '@/sections/Hero';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { common } = await getDictionary(lang);
  const { hero } = common['home'];
  return (
    <main>
      <Hero data={hero} />
      {/* <About data={about} /> */}
      {/* <Service data={service} /> */}
      {/* <Projects data={projects} /> */}
      {/* <Reviews /> */}
      {/* <Cta data={cta} /> */}
    </main>
  );
}

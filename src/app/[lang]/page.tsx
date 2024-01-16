import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/utils';
import { About } from '@/sections/About';

import { Cta } from '@/sections/Cta';
import { Hero } from '@/sections/Hero';
import { Projects } from '@/sections/Projects';
import { Services } from '@/sections/Services';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { common } = await getDictionary(lang);
  const { projects: projectsData } = common;
  const { hero, about, services, projects, cta } = common['home'];

  return (
    <main>
      <Hero data={hero} />
      <About data={about} />
      <Services data={services} />
      <Projects data={projects} projectsData={projectsData} />
      {/* <Reviews /> */}
      <Cta data={cta} />
    </main>
  );
}

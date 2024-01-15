import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/utils';

import { Cta } from '@/sections/Cta';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { common } = await getDictionary(lang);
  const { projects: projectsData } = common;
  const { hero, about, services, projects, cta } = common['home'];

  return (
    <main>
      {/* <Hero data={hero} />
      <About data={about} />
      <Service data={services} />
      <Projects data={projects} projectsData={projectsData} /> */}
      {/* <Reviews /> */}
      <Cta data={cta} />
    </main>
  );
}

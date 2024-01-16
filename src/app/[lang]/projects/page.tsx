'use client';

import ProjectCard from '@/components/shared/ProjectCard/ProjectCard';
import { ProjectLoader } from '@/components/ui/loader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/utils';
import { motion } from 'framer-motion';
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

const Projects = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState<string>('all projects');
  const [projects, setProjects] = useState<any[]>([]); // Replace ProjectType with the actual type of your projects

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { common } = await getDictionary(lang);
        const { projects } = common;

        // remove category duplicates
        const uniqueCategories = [
          'all projects',
          ...Array.from(new Set(projects.map(item => item.category))),
        ];

        setCategories(uniqueCategories);
        setProjects(projects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [lang]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projects.filter(project => {
    return category === 'all projects' ? project : project.category === category;
  });

  return (
    <motion.section
      className="min-h-screen pt-12"
      // ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="container relative mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">My Projects</h2>
        <div className="flex items-start justify-center">
          <ProjectLoader />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          {/* tabs */}
          <Tabs defaultValue={category} className="mb-12 xl:mb-48">
            <TabsList className="mx-auto mb-12 grid h-full w-full dark:border-none md:grid-cols-4 md:border lg:max-w-[640px]">
              {categories.map((category, index) => (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="w-[162px] text-sm capitalize md:w-auto"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {/* tabs content */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 xl:mt-8">
              {filteredProjects.map((project, index) => (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;

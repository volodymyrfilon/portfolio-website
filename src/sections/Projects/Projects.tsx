'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProjectCard from '@/components/shared/ProjectCard/ProjectCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ProjectsProps } from './Projects.props';

export const Projects = ({ data, projectsData }: ProjectsProps) => {
  const { title, subtitle, buttonProjectsPage } = data;
  return (
    <section className="mb-12 xl:mb-48">
      <div className="container relative mx-auto">
        {/* text */}
        <div className="mx-auto mb-12 flex max-w-[380px] flex-col items-center justify-center text-center xl:mx-0 xl:h-[400px] xl:items-start xl:text-left">
          <h2 className="section-title mb-4">{title}</h2>
          <p className="subtitle mb-8">{subtitle}</p>
          <Link href={buttonProjectsPage.href}>
            <Button>{buttonProjectsPage.name}</Button>
          </Link>
        </div>
        <div>
          {/* slider */}
          <div className="right-[34px] top-0 xl:absolute xl:max-w-[940px]">
            <Swiper
              className="h-[480px]"
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              {/* projects slides */}
              {projectsData.slice(0, 4).map((project: any, index: number) => (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

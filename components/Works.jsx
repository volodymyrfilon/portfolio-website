'use client'
import Link from 'next/link'
import { Button } from './ui/button'

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import ProjectCard from './ProjectCard'

//database
import { projectData } from '@/database'

const Work = () => {
	return (
		<section className='mb-12 xl:mb-48'>
			<div className='container mx-auto relative'>
				{/* text */}
				<div className='max-w-[380px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
					<h2 className='section-title mb-4'>Latest Project</h2>
					<p className='subtitle mb-8'>
						Lorem ipsum dolor sit amet amet amet amet amet amet consectetur
						adipisicing elit.
					</p>
					<Link href='/projects'>
						<Button>All projects</Button>
					</Link>
				</div>
				<div>
					{/* slider */}
					<div className='xl:max-w-[940px] xl:absolute right-[34px] top-0'>
						<Swiper
							className='h-[480px]'
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
							{/* only 3 projects per slide  */}
							{projectData.slice(0, 4).map((project, index) => (
								<SwiperSlide key={index}>
									<ProjectCard project={project} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Work

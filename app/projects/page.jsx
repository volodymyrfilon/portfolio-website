'use client'

import { ProjectLoader } from '@/components/Loader'
import ProjectCard from '@/components/ProjectCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { projectData } from '@/database'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

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
}

// remove category duplicates
const uniqueCategories = [
	'all projects',
	...new Set(projectData.map(item => item.category)),
]

const Projects = () => {
	const [categories, setCategories] = useState(uniqueCategories)
	const [category, setCategory] = useState('all projects')
	const ref = useRef()

	const filteredProjects = projectData.filter(project => {
		// if category is 'all projects' return all projects, else filter category
		return category === 'all projects' ? project : project.category === category
	})

	return (
		<motion.section
			className='min-h-screen pt-12'
			ref={ref}
			variants={variants}
			initial='initial'
			whileInView='animate'
		>
			<div className='container mx-auto relative'>
				<h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
					My Projects
				</h2>
				<div className='flex items-start justify-center'>
					<ProjectLoader />
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 5, duration: 1 }}
				>
					{/* tabs */}
					<Tabs defaultValue={category} className='mb-12 xl:mb-48'>
						<TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
							{categories.map((category, index) => (
								<TabsTrigger
									onClick={() => setCategory(category)}
									value={category}
									key={index}
									className='capitalize w-[162px] md:w-auto'
								>
									{category}
								</TabsTrigger>
							))}
						</TabsList>
						{/* tabs content */}
						<div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
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
	)
}

export default Projects

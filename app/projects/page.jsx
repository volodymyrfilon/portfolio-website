'use client'

import ProjectCard from '@/components/ProjectCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'

const projectData = [
	{
		image: '/work/2.png',
		category: 'react js',
		name: 'Website 1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae, harum at.',
		link: '/',
		github: '/',
	},
	{
		image: '/work/1.png',
		category: 'next js',
		name: 'Website 2',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae, harum at.',
		link: '/',
		github: '/',
	},
	{
		image: '/work/1.png',
		category: 'next js',
		name: 'Website 33',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae, harum at.',
		link: '/',
		github: '/',
	},
	{
		image: '/work/2.png',
		category: 'react js',
		name: 'Website 12',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae, harum at.',
		link: '/',
		github: '/',
	},
	{
		image: '/work/2.png',
		category: 'fullstack',
		name: 'Website dfdf',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae, harum at.',
		link: '/',
		github: '/',
	},
	{
		image: '/work/1.png',
		category: 'react js',
		name: 'Website aoao',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae, harum at.',
		link: '/',
		github: '/',
	},
	{
		image: '/work/2.png',
		category: 'next js',
		name: 'Website "ewe"',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae, harum at.',
		link: '/',
		github: '/',
	},
	{
		image: '/work/1.png',
		category: 'fullstack',
		name: 'Webpag e dev',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae, harum at.',
		link: '/',
		github: '/',
	},
	{
		image: '/work/1.png',
		category: 'fullstack',
		name: 'Websiteeee',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae, harum at.',
		link: '/',
		github: '/',
	},
]

// remove category duplicates
const uniqueCategories = [
	'all projects',
	...new Set(projectData.map(item => item.category)),
]

const Projects = () => {
	const [categories, setCategories] = useState(uniqueCategories)
	const [category, setCategory] = useState('all projects')

	const filteredProjects = projectData.filter(project => {
		// if category is 'all projects' return all projects, else filter category
		return category === 'all projects' ? project : project.category === category
	})

	return (
		<section className='min-h-screen pt-12'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
					My Projects
				</h2>
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
			</div>
		</section>
	)
}

export default Projects

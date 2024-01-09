import DevImg from './DevImg'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Briefcase, GraduationCap } from 'lucide-react'
import Image from 'next/image'

//database
import { infoData, qualificationData, skillData } from '@/database'

const About = () => {
	const getData = (arr, title) => {
		return arr.find(item => item.title === title)
	}
	return (
		<section className='xl:h-[860px] pt-0 pb-12 xl:py-24'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
					About me
				</h2>
				<div className='flex flex-col xl:flex-row'>
					{/* image */}
					<div className='hidden xl:flex flex-1 relative'>
						<DevImg
							containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
							imgSrc='/about/developer.png'
						/>
					</div>
					{/* tabs */}
					<div className='flex-1'>
						<Tabs defaultValue='personal'>
							<TabsList className='w-full grid xl:grid-cols-3 md:w-[172px] xl:max-w-[520px] xl:border dark:border-none'>
								<TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
									Personal Info
								</TabsTrigger>
								<TabsTrigger
									className='w-[162px] xl:w-auto'
									value='qualifications'
								>
									Qualifications
								</TabsTrigger>
								<TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
									Skills
								</TabsTrigger>
							</TabsList>
							{/* tabs content */}
							<div className='text-lg mt-12 xl:mt-8'>
								{/* personal */}
								<TabsContent value='personal'>
									<div className='text-center xl:text-left'>
										<h3 className='h3 mb-4'>Elevating digital experiences</h3>
										<p className='subtitle max-w-xl mx-auto xl:mx-0'>
											I specialize in creating intuitive websites with
											cutting-edge technology, delivering dynamic and engaging
											user experience.
										</p>
										{/* icons */}
										<div className='grid xl:grid-cols-2 gap-4 mb-12'>
											{infoData.map((item, index) => (
												<div
													className='flex items-center gap-x-4 mx-auto xl:mx-0'
													key={index}
												>
													<div className='text-primary'>{item.icon}</div>
													<div>{item.text}</div>
												</div>
											))}
										</div>
										{/* languages */}
										<div className='flex flex-col gap-y-2'>
											<div className='text-primary'>Languages Skills</div>
											<div className='border-b border-border'></div>
											<div className=''>
												Ukrainian, English, German, Polish.
											</div>
										</div>
									</div>
								</TabsContent>
								{/* qualifications */}
								<TabsContent value='qualifications'>
									<div>
										<h3 className='h3 mb-8 text-center xl:text-left'>
											My code and pixels journey
										</h3>
										{/* experience & education wrapper*/}
										<div className='grid md:grid-cols-2 gap-y-8'>
											{/* experience */}
											<div className='flex flex-col gap-y-6'>
												<div className='flex gap-x-4 items-center text-[22px] text-primary'>
													<Briefcase />
													<h4 className='capitalize font-medium'>
														{getData(qualificationData, 'experience').title}
													</h4>
												</div>
												{/* list */}
												<div className='flex flex-col gap-y-8'>
													{getData(qualificationData, 'experience').data.map(
														(item, index) => {
															const { company, role, years } = item
															return (
																<div className='flex gap-x-8 group' key={index}>
																	<div className='h-[84px] w-[1px] bg-border relative ml-2'>
																		<div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
																	</div>
																	<div>
																		<div className='font-semibold text-xl leading-none mb-2'>
																			{company}
																		</div>
																		<div className='text-lg leading-none text-muted-foreground mb-4'>
																			{role}
																		</div>
																		<div className='text-base font-medium'>
																			{years}
																		</div>
																	</div>
																</div>
															)
														}
													)}
												</div>
											</div>
											{/* education */}
											<div className='flex flex-col gap-y-6'>
												<div className='flex gap-x-4 items-center text-[22px] text-primary'>
													<GraduationCap size={28} />
													<h4 className='capitalize font-medium'>
														{getData(qualificationData, 'education').title}
													</h4>
												</div>
												{/* list */}
												<div className='flex flex-col gap-y-8'>
													{getData(qualificationData, 'education').data.map(
														(item, index) => {
															const { university, qualification, years } = item
															return (
																<div className='flex gap-x-8 group' key={index}>
																	<div className='h-[84px] w-[1px] bg-border relative ml-2'>
																		<div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
																	</div>
																	<div>
																		<div className='font-semibold text-xl leading-none mb-2'>
																			{university}
																		</div>
																		<div className='text-lg leading-none text-muted-foreground mb-4'>
																			{qualification}
																		</div>
																		<div className='text-base font-medium'>
																			{years}
																		</div>
																	</div>
																</div>
															)
														}
													)}
												</div>
											</div>
										</div>
									</div>
								</TabsContent>
								{/* skills */}
								<TabsContent value='skills'>
									<div className='text-center xl:text-left'>
										<h3 className='h3 mb-8'>What I use daily</h3>
										{/* skills */}
										<div className='mb-16'>
											<h4 className='text-xl font-semibold mb-2'>Skills</h4>
											<div className='border-b border-border mb-4'></div>
											{/* skills list */}
											<div>
												{getData(skillData, 'skills').data.map(
													(item, index) => (
														<div
															className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'
															key={index}
														>
															<div className='font-medium'>{item.name}</div>
														</div>
													)
												)}
											</div>
										</div>
										{/* tools */}
										<div>
											<h4 className='text-xl font-semibold mb-2 xl:text-left'>
												Tools
											</h4>
											<div className='border-b border-border mb-4'></div>
											{/* tools list */}
											<div className='flex gap-x-8 justify-center xl:justify-start'>
												{getData(skillData, 'tools').data.map((item, index) => (
													<div key={index}>
														<Image
															src={item.imgPath}
															width={48}
															height={48}
															alt=''
															priority
														/>
													</div>
												))}
											</div>
										</div>
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About

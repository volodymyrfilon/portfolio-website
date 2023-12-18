import { Download, Send } from 'lucide-react'
import Link from 'next/link'
import { RiArrowDownSLine, RiBriefcase4Fill } from 'react-icons/ri'
import { Button } from './ui/button'

import Badge from './Badge'
import DevImg from './DevImg'
import Socials from './Socials'

const Hero = () => {
	return (
		<section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
			<div className='container mx-auto'>
				<div className='flex justify-between gap-x-8'>
					{/* text */}
					<div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
						<div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
							Web Developer
						</div>
						<h1 className='h1 mb-4'>Hello, my name is Volodymyr Filon</h1>
						<p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
							Brief description with insights into myself, my volational
							journey. and what I engage in dev.
						</p>
						{/* buttons */}
						<div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
							<Link href='/contact'>
								<Button className='gap-x-2'>
									Contact me <Send size={18} />
								</Button>
							</Link>
							<Button variant='secondary' className='gap-x-2'>
								Download CV
								<Download size={18} />
							</Button>
						</div>
						{/* socials */}
						<Socials
							containerStyles='flex gap-x-6 mx-auto xl:mx-0'
							iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
						/>
					</div>
					{/* image */}
					<div className='hidden xl:flex relative'>
						{/* badge 1 */}
						<Badge
							icon={<RiBriefcase4Fill />}
							endCountNum={4}
							badgeText='Months Of Experience'
						/>
						<div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
						<DevImg
							containerStyles='bg-hero_shape w-[510px] h-[462px] relative bg-bottom'
							imgSrc='/hero/developer.png'
						/>
					</div>
				</div>
				{/* icon */}
				<div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
					<RiArrowDownSLine className='text-3xl text-primary' />
				</div>
			</div>
			{/* <DevImg />
			<Badge />
			<Socials /> */}
		</section>
	)
}

export default Hero

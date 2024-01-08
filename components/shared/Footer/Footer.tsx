import Link from 'next/link'
import Socials from './Socials'

const Footer = () => {
	return (
		<footer className='bg-secondary py-12 h-[150px]'>
			<div className='container mx-auto'>
				<div className='flex flex-col items-center justify-between'>
					{/* socials */}
					<Socials
						containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
						iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all'
					/>
					{/* copyright */}
					<div className='text-muted-foreground text-center'>
						Copyright 2023-2024 &copy; Volodymyr Filon. All rights reserved.
					</div>
					{/* privacy policy */}
					<Link
						href='/privacy-policy'
						className='text-muted-foreground underline'
					>
						Terms of Service and Privacy Policy.
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
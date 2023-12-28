import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card'

// database
import { serviceData } from '@/database'

const Service = () => {
	return (
		<section className='mb-12 xl:mb-36'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
					My Services
				</h2>
				{/* grid items */}
				<div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
					{serviceData.map((item, index) => (
						<Card
							className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
							key={index}
						>
							<CardHeader className='text-primary absolute -top-[60px]'>
								<div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
									{item.icon}
								</div>
							</CardHeader>
							<CardContent className='text-center'>
								<CardTitle className='mb-4'>{item.title}</CardTitle>
								<CardDescription className='text-lg'>
									{item.description}
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default Service

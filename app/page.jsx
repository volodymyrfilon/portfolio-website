import About from '@/components/About'
import Cta from '@/components/Cta'
import Hero from '@/components/Hero'
import Service from '@/components/Services'
import Work from '@/components/Works'

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Service />
			<Work />
			{/* <Reviews /> */}
			<Cta />
		</main>
	)
}

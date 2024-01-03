import About from '@/components/About'
import Hero from '@/components/Hero'
import Service from '@/components/Services'
import Work from '@/components/Works'
import Cta from '@/components/cta'

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

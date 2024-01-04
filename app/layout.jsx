import { Outfit } from 'next/font/google'
import './globals.css'

// components
import Footer from '@/components/Footer'
import Header from '@/components/Header'
// theme provider
import { ThemeProvider } from '@/components/ThemeProvider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
	title: 'Portfolio Website',
	description: 'https://github.com/volodymyrfilon',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={outfit.className}>
				<ThemeProvider attribute='class' defaultTheme='light'>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}

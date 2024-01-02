'use client'

import { useRef, useState } from 'react'

import Form from '@/components/Form'
import emailjs from '@emailjs/browser'

import { ContactLoader } from '@/components/Loader'
import { motion } from 'framer-motion'
import { HomeIcon, MailIcon, PhoneCall } from 'lucide-react'

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

const Contact = () => {
	const ref = useRef()
	const formRef = useRef()
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)

	const sendEmail = e => {
		e.preventDefault()

		setSuccess(false)
		setError(false)
		emailjs
			.sendForm(
				'service_fxy4emk',
				'template_ii8zawp',
				formRef.current,
				'JrRI24TkXEwBFRDFo'
			)
			.then(
				result => {
					setSuccess(true)
					setError(false)
					SubmitForm()
				},
				error => {
					setError(true)
					setSuccess(false)
				}
			)
	}

	const SubmitForm = e => {
		document.getElementById('form').reset()
	}

	return (
		<motion.section
			ref={ref}
			variants={variants}
			initial='initial'
			whileInView='animate'
			className='min-h-screen pt-12'
		>
			<div className='container mx-auto'>
				<h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
					My Contacts
				</h2>
				{/* illustration */}
				<div className='flex items-center justify-center'>
					<ContactLoader />
				</div>
				{/* text and form */}
				<motion.div
					className='w-full p-3 flex flex-col xl:flex-row mt-2 xl:mt-10 gap-12'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 5, duration: 1 }}
				>
					{/* text */}
					<div className='flex-1 flex flex-col gap-5 xl:gap-10 items-center xl:items-start text-center xl:text-left mt-4'>
						<h1 className='h1 max-w-md mb-8'>Let`s Work Together!</h1>
						{/* mail */}
						<div className='flex flex-col gap-x-4 items-center xl:items-start'>
							<div className='flex gap-x-2 items-center'>
								<MailIcon size={20} className='text-primary' />
								<h2 className='text-2xl font-semibold'>Email</h2>
							</div>
							<div className='text-lg'>vdfo26@gmail.com</div>
						</div>
						{/* address */}
						<div className='flex flex-col gap-x-4 items-center xl:items-start'>
							<div className='flex gap-x-2 items-center'>
								<HomeIcon size={20} className='text-primary' />
								<h2 className='text-2xl font-semibold'>Address</h2>
							</div>
							<div className='text-lg'>Poznan, Poland</div>
						</div>
						{/* phone */}
						<div className='flex flex-col gap-x-4 items-center xl:items-start'>
							<div className='flex gap-x-2 items-center'>
								<PhoneCall size={20} className='text-primary' />
								<h2 className='text-2xl font-semibold'>Address</h2>
							</div>
							<div className='text-lg'>+48 578 568 311</div>
						</div>
					</div>
					{/*  form */}
					<div className='flex-1 p-12 w-full'>
						<form
							id='form'
							ref={formRef}
							onSubmit={sendEmail}
							className='flex flex-col gap-y-4 mt-10'
						>
							<Form />
							{error && <p className='text-red-500'>Error</p>}
							{success && <p className='text-green-500'>Success</p>}
						</form>
					</div>
				</motion.div>
			</div>
		</motion.section>
	)
}

export default Contact

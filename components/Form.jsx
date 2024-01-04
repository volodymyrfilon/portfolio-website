import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

import { ArrowRightIcon, MailIcon, MessageSquare, User } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const Form = () => {
	const formRef = useRef()
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)

	const sendEmail = e => {
		e.preventDefault()

		setSuccess(false)
		setError(false)
		emailjs
			.sendForm(
				'service_50pdx47',
				'template_0zlbocq',
				formRef.current,
				'd0i9kuK3dREHwIgVy'
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
		<form
			id='form'
			ref={formRef}
			onSubmit={sendEmail}
			className='flex flex-col gap-y-4 mt-10'
		>
			{/* input */}
			<div className='relative flex items-center'>
				<Input
					type='name'
					id='name'
					name='name'
					placeholder='Name'
					required
					className='pr-12'
				/>
				<User className='absolute right-6' size={20} />
			</div>
			{/* input */}
			<div className='relative flex items-center'>
				<Input
					type='email'
					id='email'
					name='email'
					placeholder='Email'
					required
					className='pr-12'
				/>
				<MailIcon className='absolute right-6' size={20} />
			</div>
			{/* textarea */}
			<div className='relative flex items-center'>
				<Textarea
					placeholder='Type your message here'
					className='pr-12'
					name='message'
					required
				/>
				<MessageSquare className='absolute top-4 right-6' size={20} />
			</div>
			<Button className='flex items-center gap-x-1 max-w-[166px]'>
				Let`s Talk
				<ArrowRightIcon size={20} />
			</Button>
			{error && <p className='text-red-500'>Error</p>}
			{success && <p className='text-green-500'>Success</p>}
		</form>
	)
}

export default Form

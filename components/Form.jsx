'use client'

import { ArrowRightIcon, MailIcon, MessageSquare, User } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const Form = () => {
	return (
		<>
			{/* input */}
			<div className='relative flex items-center'>
				<Input type='name' id='name' name='name' placeholder='Name' required />
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
				/>
				<MailIcon className='absolute right-6' size={20} />
			</div>
			{/* textarea */}
			<div className='relative flex items-center'>
				<Textarea
					placeholder='Type your message here'
					name='message'
					required
				/>
				<MessageSquare className='absolute top-4 right-6' size={20} />
			</div>
			<Button className='flex items-center gap-x-1 max-w-[166px]'>
				Let`s Talk
				<ArrowRightIcon size={20} />
			</Button>
		</>
	)
}

export default Form

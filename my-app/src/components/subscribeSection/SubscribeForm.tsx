'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CiMail } from 'react-icons/ci'

export function SubscribeForm() {
	const [submitted, setSubmitted] = useState(false)
	const [email, setEmail] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setSubmitted(true)
		setEmail('')
	}

	return (
		<div className='relative w-full max-w-xl min-h-14.5 flex items-center justify-center'>
			<AnimatePresence mode='wait'>
				{!submitted ? (
					<motion.form
						key='form'
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						onSubmit={handleSubmit}
						className='relative z-10 flex w-full flex-col items-center gap-4 sm:flex-row'
					>
						<div className='relative w-full sm:flex-1'>
							<label htmlFor='subscriber-email' className='sr-only'>
								Email address
							</label>

							<CiMail
								className='absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400'
								aria-hidden='true'
							/>

							<input
								id='subscriber-email'
								type='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder='Your email'
								className='w-full bg-white py-4 pl-12 pr-4 text-gray-700 placeholder-gray-400 outline-none rounded-xl shadow-sm focus:ring-2 focus:ring-purple-200 focus:shadow-md transition-all'
								required
							/>
						</div>

						<button
							type='submit'
							className='w-full cursor-pointer bg-linear-to-r from-[#FF946D] to-[#FF7D61] px-8 py-4 font-medium text-white shadow-md transition-all whitespace-nowrap rounded-xl hover:opacity-95 hover:shadow-lg hover:shadow-coral/20 active:scale-95 sm:w-auto'
						>
							Subscribe
						</button>
					</motion.form>
				) : (
					<motion.p
						key='success'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'spring', stiffness: 100 }}
						className='relative z-10 font-display font-bold text-green-600 text-lg sm:text-xl'
						role='status'
					>
						 Thanks for subscribing!
					</motion.p>
				)}
			</AnimatePresence>
		</div>
	)
}

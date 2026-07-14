'use client'

import { motion } from 'framer-motion'

export function BackgroundCircles() {
	return (
		<>
			<motion.div
				animate={{
					scale: [1, 1.06, 1],
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className='pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full border-2 border-purple-300/20'
				aria-hidden='true'
			/>
			<motion.div
				animate={{
					scale: [1, 1.04, 1],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 1,
				}}
				className='pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full border-2 border-purple-300/10'
				aria-hidden='true'
			/>

			<motion.div
				animate={{
					scale: [1, 1.05, 1],
				}}
				transition={{
					duration: 7,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className='pointer-events-none absolute -top-10 -right-10 h-64 w-64 rounded-full border-2 border-purple-300/20'
				aria-hidden='true'
			/>
		</>
	)
}

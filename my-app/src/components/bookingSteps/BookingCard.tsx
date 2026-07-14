'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

interface BookingCardProps {
	variants: Variants
}

export function BookingCard({ variants }: BookingCardProps) {
	return (
		<motion.div
			variants={variants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, margin: '-100px' }}
		
			className='relative flex items-center justify-center min-h-87.5 sm:min-h-112.5 md:min-h-120 w-full z-10'
		>
			<div className='absolute w-80 h-80 rounded-full bg-blue-400/10 blur-3xl -z-10 pointer-events-none' />

			<Image
				src='/imgs/photo.svg'
				alt='Trip to Rome progress'
				width={480} 
				height={480}

				className='relative object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.11)] max-w-72 sm:max-w-100 md:max-w-115 w-full h-auto'
				priority
			/>
		</motion.div>
	)
}

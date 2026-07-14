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
			viewport={{ once: true, margin: '-50px' }}
			style={{ translateZ: 0 }}
			className='relative flex items-center justify-center min-h-87.5 sm:min-h-112.5 md:min-h-120 w-full z-10'
		>
			<div className='absolute w-72 h-72 rounded-full bg-blue-400/10 blur-2xl -z-10 pointer-events-none will-change-[filter]' />

			<div className='relative rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden max-w-[288px] sm:max-w-100 md:max-w-115 w-full h-auto'>
				<Image
					src='/imgs/photo.svg'
					alt='Trip to Rome progress'
					width={480}
					height={480}
					className='object-contain w-full h-auto'
					priority
				/>
			</div>
		</motion.div>
	)
}

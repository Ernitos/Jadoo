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
			className='relative flex items-center justify-center min-h-[350px] sm:min-h-[450px] md:min-h-[480px] w-full z-10'
		>
			<div className='absolute w-72 h-72 rounded-full bg-blue-400/10 -z-10 pointer-events-none' />

			<div className='relative rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden max-w-[288px] sm:max-w-[400px] md:max-w-[460px] w-full aspect-square'>
				<Image
					src='/imgs/photo.svg'
					alt='Trip to Rome progress'
					fill 
			
					sizes='(max-w: 640px) 288px, (max-w: 768px) 400px, 460px'
					className='object-contain'
					priority 
					quality={75} 
				/>
			</div>
		</motion.div>
	)
}

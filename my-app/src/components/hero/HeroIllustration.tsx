'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroIllustration() {
	return (
		<div className='relative flex items-center justify-center min-h-87.5 sm:min-h-112.5 md:min-h-150 lg:min-h-175 w-full'>
			<motion.div
				initial={{ opacity: 0, scale: 0.9, y: 40 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{
					type: 'spring',
					stiffness: 60,
					damping: 15,
					delay: 0.4,
				}}
				className='relative z-10 w-full flex justify-center'
			>
				<Image
					src='/imgs/Traveller.svg'
					alt='Traveler with luggage'
					width={1200}
					height={1200}
					quality={100}
					className='object-contain pointer-events-none w-full h-auto max-w-[320px] sm:max-w-100 md:max-w-none'
					priority
				/>
			</motion.div>
		</div>
	)
}

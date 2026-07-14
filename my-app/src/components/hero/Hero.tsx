'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { HeroContent } from './HeroContent'
import { HeroIllustration } from './HeroIllustration'

export function Hero() {
	return (
		<section
			id='home'
			className='relative w-full overflow-x-clip pt-8 md:pt-16 pb-12 md:pb-20'
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.95, y: -20 }}
				animate={{ opacity: 1, scale: 1, y: 0 }}
				transition={{ duration: 1.2, ease: 'easeOut' }}
				className='absolute -top-45 -right-10 md:-top-45 md:-right-20 pointer-events-none z-0 w-[65%] md:w-[53%] max-w-250 h-auto'
			>
				<Image
					src='/imgs/Decore.png'
					alt=''
					width={1000}
					height={1000}
					className='w-full h-auto object-top-right'
					priority
					quality={90}
					style={{ width: '100%', height: 'auto' }}
				/>
			</motion.div>

			<div className='w-5/6 mx-auto relative z-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-4'>
					<HeroContent />
					<HeroIllustration />
				</div>
			</div>
		</section>
	)
}

export default Hero

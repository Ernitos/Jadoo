'use client'

import { motion, Variants } from 'framer-motion'
import { CiPlay1 } from 'react-icons/ci'

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15, 
			delayChildren: 0.2, 
		},
	},
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 70, damping: 14 },
	},
}

export function HeroContent() {
	const handlePlayDemo = () => {
	}

	return (
		<motion.div
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			className='flex flex-col relative gap-4  md:gap-6 mt-10 items-center text-center md:items-start md:text-left z-10'
		>
			<motion.span
				variants={itemVariants}
				className='text-coral font-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider'
			>
				Best Destinations around the world
			</motion.span>

			<motion.h1
				variants={itemVariants}
				className='font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight md:leading-[1.1]'
			>
				Travel, enjoy
				<br className='hidden sm:inline' /> and live a new
				<br /> and full life
			</motion.h1>

			<motion.p
				variants={itemVariants}
				className='text-gray-text text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0'
			>
				Built Wicket longer admire do barton vanity itself do in it. Preferred
				to sportsmen it engrossed listening. Park gate sell they west hard for
				the.
			</motion.p>

			<motion.div
				variants={itemVariants}
				className='flex mt-2 gap-4 sm:gap-6 items-center justify-center md:justify-start flex-wrap'
			>
				<button className='bg-amber rounded-2xl text-white py-3.5 px-6 font-medium cursor-pointer hover:bg-coral hover:shadow-coral/20 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base active:scale-95'>
					Find out more
				</button>

				<button
					onClick={handlePlayDemo}
					className='flex items-center gap-3 cursor-pointer group py-2'
				>
					<div className='bg-coral rounded-full group-hover:bg-coral-light w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shadow-md shadow-coral/20 group-hover:scale-105 active:scale-95 transition-all duration-300'>
						<CiPlay1 className='text-white w-4 h-4 sm:w-5 sm:h-5 translate-x-px' />
					</div>
					<span className='font-medium text-navy text-sm sm:text-base group-hover:text-coral transition-colors duration-300'>
						Play Demo
					</span>
				</button>
			</motion.div>
		</motion.div>
	)
}

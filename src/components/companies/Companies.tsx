'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { COMPANIES_DATA } from './CompaniesData'

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const logoVariants: Variants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { type: 'spring', stiffness: 100, damping: 15 },
	},
}

export function Companies() {
	return (
		<section className='w-5/6 mx-auto py-16 md:py-16 overflow-visible'>
			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, margin: '-100px' }}
				className='flex flex-wrap items-center justify-center gap-10 md:gap-14 lg:gap-20'
			>
				{COMPANIES_DATA.map(comp => (
					<motion.div
						key={comp.id}
						variants={logoVariants}
						whileHover={{ y: -6, scale: 1.05 }} 
					
						className='relative w-36 sm:w-44 md:w-48 h-14 sm:h-20 md:h-24 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer'
					>
						<Image
							src={comp.img}
							alt='company logo'
							fill
							sizes='(max-w-640px) 144px, (max-w-768px) 176px, 192px'
							className='object-contain'
							quality={85}
						/>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}

export default Companies

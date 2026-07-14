'use client'

import { Variants } from 'framer-motion'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CATEGORY_DATA } from './TypeCategoryData'
import { CategoryCard } from './CategoryCard'

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
}

const itemVariants: Variants = {
	hidden: { y: 30, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { type: 'spring', stiffness: 100, damping: 15 },
	},
}

export function Category() {
	return (
		<section
			id='services'
			className='relative mx-auto flex w-5/6 flex-col items-center text-center gap-3 py-16 overflow-visible'
		>
			<Image
				src='/imgs/plus.png'
				alt=''
				width={150}
				height={150}
				className='absolute -top-6 -right-6 md:-right-20 pointer-events-none object-contain opacity-40 md:opacity-60 w-24 md:w-36 h-auto z-0'
			/>

			<motion.div
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.6 }}
				className='z-10 flex flex-col items-center gap-2'
			>
				<span className='text-gray-nav font-semibold text-xs sm:text-sm uppercase tracking-widest'>
					Category
				</span>

				<h2 className='font-display text-3xl sm:text-4xl font-bold text-navy md:text-5xl leading-tight'>
					We Offer Best Services
				</h2>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, margin: '-50px' }}
				className='grid grid-cols-1 gap-8 mt-12 sm:mt-16 w-full sm:grid-cols-2 lg:grid-cols-4 z-10'
			>
				{CATEGORY_DATA.map(category => (
					<motion.div key={category.id} variants={itemVariants}>
						<CategoryCard
							icon={category.icon}
							title={category.title}
							desc={category.desc}
						/>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}

export default Category

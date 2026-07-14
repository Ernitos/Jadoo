'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { FaLocationArrow } from 'react-icons/fa'
import { DESTINATIONS_DATA } from './TopDestinationsData'

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2, 
		},
	},
}

const cardVariants: Variants = {
	hidden: { y: 40, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { type: 'spring', stiffness: 80, damping: 15 },
	},
}

export function TopDestinations() {
	return (
		<section
			id='flights'
			className='relative w-5/6 mx-auto flex flex-col items-center text-center gap-3 py-16'
		>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ duration: 0.6 }}
				className='flex flex-col items-center gap-2'
			>
				<span className='text-gray-nav font-semibold text-xs sm:text-sm uppercase tracking-widest'>
					Top Selling
				</span>
				<h2 className='font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy'>
					Top Destinations
				</h2>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, margin: '-50px' }}
				className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full'
			>
				{DESTINATIONS_DATA.map(dest => (
					<motion.div key={dest.id} variants={cardVariants} className='h-full'>
						<div className='group flex flex-col overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 bg-white h-full cursor-pointer'>
							<div className='relative w-full h-72 sm:h-80 overflow-hidden'>
								<Image
									src={dest.image}
									alt={`${dest.city}${dest.country ? `, ${dest.country}` : ''}`}
									fill
									sizes='(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw'
									className='object-cover transition-transform duration-500 ease-out group-hover:scale-105'
									quality={85}
								/>
							</div>

							<div className='flex items-center justify-between p-6 bg-white z-10'>
								<div className='flex flex-col items-start gap-2 text-left'>
									<span className='font-bold text-lg text-navy group-hover:text-coral transition-colors duration-200'>
										{dest.city}
										{dest.country ? `, ${dest.country}` : ''}
									</span>
									<span className='flex items-center gap-2 text-gray-text text-sm font-medium'>
										<FaLocationArrow className='text-xs text-black/70 group-hover:text-coral transition-colors' />
										{dest.duration}
									</span>
								</div>
								<span className='font-bold text-navy text-lg'>
									{dest.price}
								</span>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}

export default TopDestinations

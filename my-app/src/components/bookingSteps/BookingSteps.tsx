'use client'

import { motion, Variants } from 'framer-motion'
import { STEPS_DATA } from './stepsData'
import { StepItem } from './StepItem'
import { BookingCard } from './BookingCard'

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
}

const textLeftVariants: Variants = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: 'spring', stiffness: 60, damping: 15 },
	},
}

const stepItemVariants: Variants = {
	hidden: { opacity: 0, x: -30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { type: 'spring', stiffness: 80, damping: 14 },
	},
}

const cardAnimationVariants: Variants = {
	hidden: { opacity: 0, scale: 0.9, y: 50 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 50, damping: 15, delay: 0.3 },
	},
}

export function BookingSteps() {
	return (
		<section
			id='bookings'
			className='w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center py-16 md:py-24 overflow-visible'
		>
			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, margin: '-100px' }}
				className='flex flex-col gap-6 md:gap-8 text-left z-10'
			>
				<motion.div variants={textLeftVariants} className='flex flex-col gap-3'>
					<span className='text-coral font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider'>
						Easy and Fast
					</span>
					<h2 className='font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight'>
						Book Your Next Trip
						<br /> In 3 Easy Steps
					</h2>
				</motion.div>

				<div className='flex flex-col gap-6 mt-2'>
					{STEPS_DATA.map(step => (
						<StepItem
							key={step.id}
							icon={step.icon}
							title={step.title}
							desc={step.desc}
							variants={stepItemVariants}
						/>
					))}
				</div>
			</motion.div>

			<BookingCard variants={cardAnimationVariants} />
		</section>
	)
}

export default BookingSteps

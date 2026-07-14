'use client'

import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { TESTIMONIALS } from './TestimonialsData'
import { TestimonialCard } from './TestimonialCard'
import { SliderDots, SliderArrows } from './SliderControls'

const cardVariants: Variants = {
	enter: {
		y: 50,
		opacity: 0,
		scale: 0.9,
	},
	center: {
		zIndex: 10,
		y: 0,
		x: 0,
		opacity: 1,
		scale: 1,
		transition: {
			type: 'spring',
			stiffness: 150,
			damping: 20,
		},
	},
	exit: {
		zIndex: 0,
		y: -80,
		opacity: 0,
		scale: 0.9,
		transition: {
			duration: 0.3,
		},
	},
}

export function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0)

	const handlePrev = () => {
		setActiveIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setActiveIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
	}

	const currentIndex = activeIndex
	const nextIndex = (activeIndex + 1) % TESTIMONIALS.length

	const current = TESTIMONIALS[currentIndex]
	const next = TESTIMONIALS[nextIndex]

	return (
		<section
			id='testimonials'
			className='mx-auto grid w-5/6 grid-cols-1 items-center gap-16 md:grid-cols-2 py-16 md:py-24 overflow-visible'
		>
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className='flex flex-col gap-6 md:gap-8 text-left'
			>
				<span className='text-coral text-base sm:text-lg font-bold uppercase tracking-wider'>
					Testimonials
				</span>
				<h2 className='font-display text-navy text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
					What people say
					<br /> about Us.
				</h2>

				<div className='hidden md:block mt-2'>
					<SliderDots
						total={TESTIMONIALS.length}
						activeIndex={activeIndex}
						onChange={setActiveIndex}
					/>
				</div>
			</motion.div>

			<div className='relative pt-8 pr-0 md:pr-16 flex flex-col items-center'>
				<div className='relative w-full min-h-75 sm:min-h-65flex items-center justify-center'>
					<AnimatePresence mode='popLayout'>
						<motion.div
							key={current.id}
							variants={cardVariants}
							initial='enter'
							animate='center'
							exit='exit'
							className='absolute top-0 left-0 w-full cursor-grab active:cursor-grabbing z-10'
							drag='x'
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={0.2}
							onDragEnd={(_, info) => {
								if (info.offset.x < -50) handleNext()
								if (info.offset.x > 50) handlePrev()
							}}
						>
							<TestimonialCard {...current} />
						</motion.div>
					</AnimatePresence>

					<div className='absolute top-10 left-6 sm:top-12 sm:left-8 w-full -z-10 opacity-45 scale-[0.96] translate-y-2 translate-x-2 sm:translate-y-4 sm:translate-x-4 pointer-events-none transition-all duration-500'>
						<TestimonialCard {...next} isBehind />
					</div>

					<SliderArrows onPrev={handlePrev} onNext={handleNext} />
				</div>

				<div className='mt-16 flex justify-center md:hidden'>
					<SliderDots
						total={TESTIMONIALS.length}
						activeIndex={activeIndex}
						onChange={setActiveIndex}
					/>
				</div>
			</div>
		</section>
	)
}

export default Testimonials

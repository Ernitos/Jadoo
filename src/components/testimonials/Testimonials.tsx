// Testimonials.tsx
'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import { TestimonialCard } from './TestimonialCard'
import { SliderDots, SliderArrows } from './SliderControls'
import { useTestimonials } from './useTestimonials'

const cardVariants: Variants = {
	enter: {
		y: 20,
		opacity: 0,
	},
	center: {
		zIndex: 10,
		y: 0,
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 24,
		},
	},
	exit: {
		zIndex: 0,
		y: -40,
		opacity: 0,
		transition: {
			duration: 0.25,
		},
	},
}

export function Testimonials() {
	const {
		activeIndex,
		setActiveIndex,
		current,
		next,
		handlePrev,
		handleNext,
		handleDragEnd,
		totalCount,
	} = useTestimonials()

	return (
		<section
			id='testimonials'
			className='mx-auto grid w-5/6 grid-cols-1 items-center gap-16 md:grid-cols-2 py-16 md:py-24 overflow-visible select-none'
		>
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '-50px' }}
				transition={{ duration: 0.5 }}
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
						total={totalCount}
						activeIndex={activeIndex}
						onChange={setActiveIndex}
					/>
				</div>
			</motion.div>

			<div className='relative pt-8 pr-0 md:pr-16 flex flex-col items-center w-full'>
				
				<div className='relative w-full pb-14 md:pb-0 flex items-center justify-center will-change-transform'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={current.id}
							variants={cardVariants}
							initial='enter'
							animate='center'
							exit='exit'
							style={{ translateZ: 0 }}
							className='relative w-full cursor-grab active:cursor-grabbing z-10 touch-pan-y'
							drag='x'
							dragConstraints={{ left: 0, right: 0 }}
							dragElastic={0.15}
							onDragEnd={handleDragEnd}
						>
							<TestimonialCard {...current} />
						</motion.div>
					</AnimatePresence>

					<div className='absolute top-10 left-6 sm:top-12 sm:left-8 w-full -z-10 opacity-30 scale-[0.96] translate-y-2 translate-x-2 sm:translate-y-4 sm:translate-x-4 pointer-events-none hidden sm:block'>
						<TestimonialCard {...next} isBehind />
					</div>

					<SliderArrows onPrev={handlePrev} onNext={handleNext} />
				</div>

			
				<div className='mt-6 flex justify-center md:hidden'>
					<SliderDots
						total={totalCount}
						activeIndex={activeIndex}
						onChange={setActiveIndex}
					/>
				</div>
			</div>
		</section>
	)
}

export default Testimonials

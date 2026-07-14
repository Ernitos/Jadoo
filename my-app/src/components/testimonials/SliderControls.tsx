'use client'

import { IoChevronUp, IoChevronDown } from 'react-icons/io5'
import { SliderDotsProps } from './types'

export function SliderDots({ total, activeIndex, onChange }: SliderDotsProps) {
	return (
		<div className='flex gap-2.5'>
			{Array.from({ length: total }).map((_, index) => (
				<button
					key={index}
					onClick={() => onChange(index)}
					className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-all duration-300 ${
						index === activeIndex
							? 'bg-navy scale-110'
							: 'bg-gray-200 hover:bg-gray-300'
					}`}
					aria-label={`Go to slide ${index + 1}`}
				/>
			))}
		</div>
	)
}

interface SliderArrowsProps {
	onPrev: () => void
	onNext: () => void
}

export function SliderArrows({ onPrev, onNext }: SliderArrowsProps) {
	return (
		<div className='absolute -right-14 top-1/2  -translate-y-1/2 flex-col gap-3 hidden md:flex z-30'>
			<button
				onClick={onPrev}
				className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm transition-all hover:bg-gray-50 active:scale-95'
				aria-label='Previous testimonial'
			>
				<IoChevronUp className='text-gray-400 text-lg' />
			</button>

			<button
				onClick={onNext}
				className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm transition-all hover:bg-gray-50 active:scale-95'
				aria-label='Next testimonial'
			>
				<IoChevronDown className='text-gray-400 text-lg' />
			</button>
		</div>
	)
}

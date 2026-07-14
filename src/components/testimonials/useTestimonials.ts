// useTestimonials.ts
'use client'

import { useState } from 'react'
import { TESTIMONIALS } from './TestimonialsData'

import { PanInfo } from 'framer-motion'

export function useTestimonials() {
	const [activeIndex, setActiveIndex] = useState(0)

	const handlePrev = () => {
		setActiveIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setActiveIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
	}

	const handleDragEnd = (
		event: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo,
	) => {
		if (info.offset.x < -40) handleNext()
		if (info.offset.x > 40) handlePrev()
	}

	const currentIndex = activeIndex
	const nextIndex = (activeIndex + 1) % TESTIMONIALS.length

	const current = TESTIMONIALS[currentIndex]
	const next = TESTIMONIALS[nextIndex]

	return {
		activeIndex,
		setActiveIndex,
		current,
		next,
		handlePrev,
		handleNext,
		handleDragEnd,
		totalCount: TESTIMONIALS.length,
	}
}

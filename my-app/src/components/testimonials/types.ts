import { ComponentType } from 'react'

export interface TestimonialItem {
	id: number
	text: string
	name: string
	location: string
	avatar: string | ComponentType<{ className?: string }>
}
export interface SliderDotsProps {
	total: number
	activeIndex: number
	onChange: (index: number) => void
}
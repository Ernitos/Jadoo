'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

interface StepItemProps {
	icon: string
	title: string
	desc: string
	variants: Variants
}

export function StepItem({ icon, title, desc, variants }: StepItemProps) {
	return (
		<motion.div
			variants={variants}
			style={{ translateZ: 0 }}
			className='flex items-start gap-4 group cursor-pointer'
		>
	
			<div className='shrink-0 transition-transform duration-200 group-hover:scale-105 w-12 h-12 relative will-change-transform'>
				<Image
					src={icon}
					alt={title}
					fill
					sizes='48px'
					className='object-contain'
					quality={80} 
				/>
			</div>
			<div className='flex flex-col gap-1'>
				<h3 className='font-bold text-navy text-base sm:text-lg group-hover:text-coral transition-colors duration-200'>
					{title}
				</h3>
				<p className='text-gray-text text-xs sm:text-sm leading-relaxed max-w-md'>
					{desc}
				</p>
			</div>
		</motion.div>
	)
}

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface CategoryCardProps {
	icon: string
	title: string
	desc: string
}

export function CategoryCard({ icon, title, desc }: CategoryCardProps) {
	return (
		<motion.div
			whileHover={{ y: -10 }}
			className='group relative flex flex-col items-center text-center gap-4 p-8 rounded-3xl bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-300 cursor-pointer h-full'
		>
			<div className='relative h-20 w-20 flex items-center justify-center'>
				<Image
					src={icon}
					alt={title}
					width={80}
					height={80}
					className='object-contain w-auto h-16 sm:h-20'
				/>
			</div>

			<h3 className='font-display font-bold text-lg md:text-xl text-navy mt-2'>
				{title}
			</h3>

			<p className='text-gray-text text-sm leading-relaxed max-w-55`'>{desc}</p>

			<div className='absolute -bottom-2 -left-2 -z-10 h-16 w-16 rounded-3xl rounded-tr-md bg-coral opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out' />
		</motion.div>
	)
}

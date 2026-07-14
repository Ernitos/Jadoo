'use client'

import Image from 'next/image'
import { TestimonialItem } from './types'

interface TestimonialCardProps extends TestimonialItem {
	isBehind?: boolean
}

export function TestimonialCard({
	id,
	text,
	name,
	location,
	avatar,
	isBehind = false,
}: TestimonialCardProps) {
	const AvatarIcon = typeof avatar !== 'string' ? avatar : null

	return (
		<div
			className={`w-full bg-white p-6 sm:p-8 pt-10 sm:pt-10 rounded-3xl transition-shadow duration-500 text-left ${
				isBehind
					? 'shadow-md border border-gray-100'
					: 'shadow-[0_20px_50px_rgba(0,0,0,0.06)]'
			}`}
		>
			<div className='absolute -top-6 -left-4 sm:-left-6 z-20 flex h-12 w-12 sm:h-16 sm:w-16 overflow-hidden rounded-full border-4 border-white bg-white shadow-md items-center justify-center'>
				{typeof avatar === 'string' ? (
					<Image
						src={avatar}
						alt={name}
						width={64}
						height={64}
						className='h-full w-full object-cover'
						priority={id === 1}
					/>
				) : (
					AvatarIcon && <AvatarIcon className='h-1/2 w-1/2 text-gray-500' />
				)}
			</div>

			<p className='text-gray-text text-sm sm:text-base leading-relaxed italic font-medium'>
				&ldquo;{text}&rdquo;
			</p>

			<div className='mt-6'>
				<h4 className='font-bold text-navy text-base sm:text-lg'>{name}</h4>
				<p className='text-gray-text text-xs sm:text-sm'>{location}</p>
			</div>
		</div>
	)
}

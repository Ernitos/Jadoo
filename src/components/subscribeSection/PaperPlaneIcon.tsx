'use client'

import { motion } from 'framer-motion'
import { IoPaperPlaneOutline } from 'react-icons/io5'

export function PaperPlaneIcon() {
	return (
		<motion.div
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			viewport={{ once: true }}
			
			whileHover={{ scale: 1.1, rotate: -15 }}
			transition={{
				scale: { type: 'spring', stiffness: 100, damping: 15 },
				rotate: { type: 'spring', stiffness: 200, damping: 15 },
			}}
	
			className='absolute top-20 right-5 z-11 hidden sm:flex h-16 w-16 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-linear-to-tr from-[#59B2FF] to-[#7B61FF] shadow-lg cursor-pointer'
			aria-hidden='true'
		>
			<IoPaperPlaneOutline className='h-6 w-6 text-white -translate-x-0.5 translate-y-px' />
		</motion.div>
	)
}

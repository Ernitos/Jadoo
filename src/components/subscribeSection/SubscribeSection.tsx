'use client'

import { motion } from 'framer-motion'
import { BackgroundCircles } from './BackgroundCircles'
import { PaperPlaneIcon } from './PaperPlaneIcon'
import { SubscribeForm } from './SubscribeForm'

export function SubscribeSection() {
	return (
		<section className='relative mx-auto w-5/6 py-16 overflow-x-clip sm:overflow-visible'>
			<PaperPlaneIcon />

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-100px' }}
				transition={{ type: 'spring', stiffness: 50, damping: 15 }}
				className='relative z-10 flex min-h-87.5 flex-col items-center justify-center gap-8 overflow-hidden bg-linear-to-br from-[#F9F7FE] to-[#F3EEFE] p-6 text-center rounded-2xl rounded-tl-[40px] sm:rounded-tl-[100px] md:p-16'
			>
				<BackgroundCircles />

				<h2 className='font-display relative z-10 max-w-2xl text-xl sm:text-2xl md:text-3.5xl font-semibold leading-relaxed text-[#5E6282] md:leading-relaxed'>
					Subscribe to get information, latest news and other interesting offers
					about Jadoo
				</h2>

				<SubscribeForm />
			</motion.div>
		</section>
	)
}

export default SubscribeSection

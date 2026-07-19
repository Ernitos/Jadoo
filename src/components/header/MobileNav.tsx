'use client'

import React from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { NAV_LINKS } from './NavData'
import { useMobileNav } from './useMobileNav'

interface MobileNavProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

const menuVariants: Variants = {
	closed: {
		x: '100%',
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 30,
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
	opened: {
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 28,
			staggerChildren: 0.08,
			delayChildren: 0.1,
		},
	},
}

const itemVariants: Variants = {
	closed: { opacity: 0, y: 15 },
	opened: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
}

export function MobileNav({ isOpen, setIsOpen, onScrollTo }: MobileNavProps) {
	const { handleMobileClick, handleClose, handleToggle } = useMobileNav({
		isOpen,
		setIsOpen,
		onScrollTo,
	})

	return (
		<>
			<button
				onClick={() => handleToggle(isOpen)}
				className={`md:hidden focus:outline-none p-2 cursor-pointer flex flex-col gap-1.5 ${
					isOpen ? 'hidden' : 'relative z-50'
				}`}
				aria-label='Toggle menu'
			>
				<span className='h-0.5 w-6 bg-navy rounded' />
				<span className='h-0.5 w-6 bg-navy rounded' />
				<span className='h-0.5 w-6 bg-navy rounded' />
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						variants={menuVariants}
						initial='closed'
						animate='opened'
						exit='closed'
						className='fixed top-0 left-0 w-screen h-dvh bg-white flex flex-col items-center justify-center gap-10 md:hidden z-50 touch-none'
					>
						<button
							onClick={handleClose}
							className='absolute top-6 right-[8.33%] text-navy font-bold text-lg cursor-pointer hover:opacity-80 transition-opacity'
						>
							✕ Close
						</button>

						<nav className='flex flex-col items-center gap-6'>
							{NAV_LINKS.map(link => (
								<motion.div key={link.id} variants={itemVariants}>
									<a
										href={link.href}
										onClick={e => handleMobileClick(e, link.href)}
										className='text-2xl text-navy hover:text-coral font-bold tracking-wide transition-colors duration-200'
									>
										{link.label}
									</a>
								</motion.div>
							))}
						</nav>

						<motion.div
							variants={itemVariants}
							className='flex flex-col items-center gap-4 w-2/3'
						>
							<button className='w-full border border-gray-300 rounded-full py-3 text-navy font-semibold text-lg hover:bg-navy/5 active:scale-95 transition-all duration-200 cursor-pointer'>
								Login
							</button>
							<button className='w-full bg-navy text-white rounded-full py-3 font-semibold text-lg hover:bg-navy/90 active:scale-95 transition-all duration-200 shadow-md cursor-pointer'>
								Sign up
							</button>
							<button className='w-full border border-gray-200 rounded-full py-3 text-navy font-semibold text-lg hover:bg-navy/5 active:scale-95 transition-all duration-200 cursor-pointer'>
								English
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default MobileNav

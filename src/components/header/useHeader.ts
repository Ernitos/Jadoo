'use client'

import { useState, useEffect } from 'react'

export function useHeader() {
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleScrollTo = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		if (href.startsWith('#')) {
			e.preventDefault()
			const targetId = href.replace('#', '')
			const elem = document.getElementById(targetId)

			if (elem) {
				const yOffset = -80 
				const y =
					elem.getBoundingClientRect().top + window.pageYOffset + yOffset

				window.scrollTo({ top: y, behavior: 'smooth' })
			}
		}
	}

	return {
		isOpen,
		setIsOpen,
		isScrolled,
		handleScrollTo,
	}
}

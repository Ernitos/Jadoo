'use client'

import { useEffect } from 'react'

interface UseMobileNavProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function useMobileNav({
	isOpen,
	setIsOpen,
	onScrollTo,
}: UseMobileNavProps) {
	useEffect(() => {
		if (!isOpen) return

		const prevOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = prevOverflow
		}
	}, [isOpen])

	const handleMobileClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		setIsOpen(false)
		onScrollTo(e, href)
	}

	const handleClose = () => setIsOpen(false)
	const handleToggle = (currentOpenState: boolean) =>
		setIsOpen(!currentOpenState)

	return { handleMobileClick, handleClose, handleToggle }
}

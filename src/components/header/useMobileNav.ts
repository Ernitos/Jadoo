'use client'

interface UseMobileNavProps {
	setIsOpen: (isOpen: boolean) => void
	onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function useMobileNav({ setIsOpen, onScrollTo }: UseMobileNavProps) {
	const handleMobileClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		setIsOpen(false)
		onScrollTo(e, href)
	}

	const handleClose = () => {
		setIsOpen(false)
	}

	const handleToggle = (isOpen: boolean) => {
		setIsOpen(!isOpen)
	}

	return {
		handleMobileClick,
		handleClose,
		handleToggle,
	}
}

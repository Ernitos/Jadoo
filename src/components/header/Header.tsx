'use client'

import { useHeader } from './useHeader'
import { Logo } from './Logo'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

export function Header() {
	const { isOpen, setIsOpen, isScrolled, handleScrollTo } = useHeader()

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100/50 py-3'
					: 'bg-transparent py-5'
			}`}
		>
			<div className='w-5/6 flex items-center justify-between mx-auto'>
				<Logo />
				<DesktopNav onScrollTo={handleScrollTo} />
				<MobileNav
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					onScrollTo={handleScrollTo}
				/>
			</div>
		</header>
	)
}

export default Header

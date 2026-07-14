'use client'

import { NAV_LINKS } from './NavData'

interface DesktopNavProps {
	onScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}

export function DesktopNav({ onScrollTo }: DesktopNavProps) {
	return (
		<div className='hidden md:flex items-center justify-end flex-1 gap-8 lg:gap-10'>
			<nav>
				<ul className='flex flex-row gap-6 lg:gap-8 items-center list-none'>
					{NAV_LINKS.map(link => (
						<li key={link.id} className='relative group'>
							<a
								href={link.href}
								onClick={e => onScrollTo(e, link.href)}
								className='text-gray-600 hover:text-navy transition-colors duration-200 font-medium py-2 block'
							>
								{link.label}
							</a>
							<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-coral transition-all duration-300 group-hover:w-full' />
						</li>
					))}
				</ul>
			</nav>

			<div className='flex items-center gap-4'>
				<button className='cursor-pointer border border-transparent hover:border-gray-200 rounded-full px-5 py-2 text-gray-600 hover:text-navy transition-all duration-200 font-medium text-sm lg:text-base'>
					Login
				</button>
				<button className='cursor-pointer border border-gray-300 hover:border-navy rounded-full px-5 py-2 text-gray-600 hover:text-navy hover:bg-navy/5 transition-all duration-200 font-medium text-sm lg:text-base'>
					Sign up
				</button>
				<button className='cursor-pointer flex items-center gap-1 border border-gray-200 hover:border-gray-400 rounded-full px-4 py-2 text-gray-600 hover:text-navy transition-all duration-200 font-medium text-sm lg:text-base'>
					En
				</button>
			</div>
		</div>
	)
}

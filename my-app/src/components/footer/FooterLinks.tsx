'use client'

import Link from 'next/link'
import { FOOTER_SECTIONS } from './FooterData'

export function FooterLinks() {
	return (
		<>
			{FOOTER_SECTIONS.map(section => (
				<div key={section.title} className='flex flex-col gap-5 text-left'>
					<h3 className='font-bold text-black text-xl'>{section.title}</h3>
					<ul className='flex flex-col gap-3 text-base font-medium'>
						{section.links.map(link => (
							<li key={link.label}>
								<Link
									href={link.href}
									onClick={e => {
										if (link.href === '#') {
											e.preventDefault()
										}
									}}
									className='text-gray-text hover:text-coral hover:translate-x-1 inline-block transition-all duration-200'
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</>
	)
}

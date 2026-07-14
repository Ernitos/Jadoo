'use client'

import { FooterLogo } from './FooterLogo'
import { FooterLinks } from './FooterLinks'
import { FooterAppsAndSocials } from './FooterAppsAndSocials'

export function Footer() {
	return (
		<footer className='mx-auto w-5/6 py-16 text-[#5E6282] overflow-hidden'>
			<div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 items-start'>
				<FooterLogo />
				<FooterLinks />
				<FooterAppsAndSocials />
			</div>

			<div className='mt-16 text-center text-sm font-medium text-gray-text border-t border-gray-100 pt-8'>
				<p>All rights reserved @ jadoo.co</p>
			</div>
		</footer>
	)
}

export default Footer

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { RiInstagramLine } from 'react-icons/ri'

export function FooterAppsAndSocials() {
	const preventJump = (e: React.MouseEvent) => e.preventDefault()

	return (
		<div className='flex flex-col gap-6 items-start text-left lg:col-span-1'>
			<div className='flex items-center gap-5'>
				<Link
					href='#'
					onClick={preventJump}
					className='flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md hover:text-white hover:bg-[#1877F2] hover:scale-110 active:scale-95 transition-all duration-300'
					aria-label='Facebook'
				>
					<FaFacebookF className='text-sm' />
				</Link>

				<Link
					href='#'
					onClick={preventJump}
					style={{
						background:
							'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
					}}
					className='flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg hover:scale-110 hover:rotate-6 active:scale-95 transition-all duration-300'
					aria-label='Instagram'
				>
					<RiInstagramLine className='text-xl' />
				</Link>

				<Link
					href='#'
					onClick={preventJump}
					className='flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md hover:text-white hover:bg-[#1DA1F2] hover:scale-110 active:scale-95 transition-all duration-300'
					aria-label='Twitter'
				>
					<FaTwitter className='text-sm' />
				</Link>
			</div>

			<div className='flex flex-col gap-3 items-start'>
				<span className='text-lg font-medium text-gray-text tracking-wide'>
					Discover our app
				</span>
				<div className='flex items-center gap-3'>
					<Link
						href='#'
						onClick={preventJump}
						className='hover:scale-105 active:scale-95 transition-transform duration-200'
					>
						<Image
							src='/imgs/google-play.webp'
							alt='Get it on Google Play'
							width={108}
							height={35}
							className='object-contain'
						/>
					</Link>
					<Link
						href='#'
						onClick={preventJump}
						className='hover:scale-105 active:scale-95 transition-transform duration-200'
					>
						<Image
							src='/imgs/app-store.webp'
							alt='Download on the App Store'
							width={108}
							height={35}
							className='object-contain'
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

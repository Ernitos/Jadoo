import Image from 'next/image'
import { NAV_LINKS } from './NavData'
import Link from 'next/link'
export function Header() {
	return (
		<div className='h-22 '>
			<div className='w-5/6 py-5 items-center flex mx-auto justify-between'>
				<div className='flex-1 justify-start'>
					<Image
						src='/imgs/Logo.png'
						alt='Jadoo'
						width={100}
						height={100}
					></Image>
				</div>
				<div className='justify-end    flex-1 gap-10 flex '>
					<ul className=' flex flex-row gap-6   items-center  list-none'>
						{NAV_LINKS.map(link => (
							<li key={link.id}>
								<Link href={link.href} className='nav-link'>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					<button className='border border-gray-300  hover:border-foreground rounded-full px-5 py-2 text-gray-nav hover:text-navy  animate font-medium '>
						Login
					</button>
					<button className='border border-gray-300 hover:border-foreground  text-gray-nav hover:text-navy font-medium px-5 py-2 rounded-full animate '>
						Sign up
					</button>
					<button className='flex items-center gap-1 border border-gray-300 hover:border-foreground  text-gray-nav hover:text-navy font-medium px-4 py-2 rounded-full animate '>
						En
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header

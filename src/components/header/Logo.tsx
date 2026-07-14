import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
	return (
		<div className='shrink-0'>
			<Link href='/'>
				<Image
					src='/imgs/Logo.png'
					alt='Jadoo'
					width={115}
					height={34}
					className='h-auto w-auto object-contain'
					priority
					quality={90}
				/>
			</Link>
		</div>
	)
}

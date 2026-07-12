import Image from 'next/image'
import { CiPlay1 } from 'react-icons/ci'

export function Hero() {
	return (
		<section className='relative w-full overflow-x-clip'>
			<div className='w-5/6 mx-auto relative'>
				<div className='grid grid-cols-2 items-center'>
					<div className='flex flex-col relative gap-6'>
						<span className='text-coral font-bold text-xl uppercase tracking-wider'>
							Best Destinations around the world
						</span>
						<h1 className='font-display text-7xl font-bold text-navy leading-tight'>
							Travel, enjoy
							<br /> and live a new
							<br /> and full life
						</h1>
						<p className='text-gray-text text-base leading-relaxed max-w-md'>
							Built Wicket longer admire do barton vanity itself do in it.
							Preferred to sportsmen it engrossed listening. Park gate sell they
							west hard for the.
						</p>
						<div className='flex mt-2 gap-4'>
							<button className='btn-primary bg-amber rounded-2xl text-background py-3 cursor-pointer hover:bg-coral animate px-3'>
								Find out more
							</button>
							<div className='flex items-center gap-3'>
								<div className='bg-coral rounded-full hover:bg-coral-light animate w-11 h-11 flex items-center justify-center'>
									<CiPlay1 className='text-white w-7 h-7' />
								</div>
								<span className='font-medium text-navy'>Play Demo</span>
							</div>
						</div>
					</div>

					<div className='relative flex items-center justify-center min-h-[700px]'>
						<Image
							src='/imgs/Decore.png'
							alt=''
							width={800}
							height={900}
							className='absolute object-contain -top-64  -right-70 pointer-events-none '
						/>
						<Image
							src='/imgs/Traveller.png'
							alt='Traveler with luggage'
							width={691}
							height={787}
							className='relative z-10 object-contain pointer-events-none'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero

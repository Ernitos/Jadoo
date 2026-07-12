import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa'
import { DESTINATIONS_DATA } from './TopDestinationsData'

const TopDestinations = () => {
	return (
		<section className='w-5/6 mx-auto flex flex-col items-center text-center gap-3'>
			<span className='text-gray-nav font-semibold text-sm uppercase tracking-widest'>
				Top Selling
			</span>
			<h2 className='font-display text-4xl md:text-5xl font-bold text-navy'>
				Top Destinations
			</h2>

			<div className='grid grid-cols-3 gap-6 mt-12 w-full'>
				{DESTINATIONS_DATA.map(dest => (
					<div
						key={dest.id}
						className='group  flex flex-col overflow-hidden rounded-2xl shadow-lg bg-white'
					>
						<div className='relative w-full h-80'>
							<Image
								src={dest.image}
								alt={`${dest.city}${dest.country ? `, ${dest.country}` : ''}`}
								fill
								className='object-cover transition-transform duration-500 group-hover:scale-110'
							/>
						</div>
						<div className='flex items-center justify-between p-5'>
							<div className='flex flex-col items-start gap-1 text-left'>
								<span className='font-bold text-navy'>
									{dest.city}
									{dest.country ? `, ${dest.country}` : ''}
								</span>
								<span className='flex items-center gap-1 text-gray-text text-sm'>
									<FaLocationArrow className='text-xs' />
									{dest.duration}
								</span>
							</div>
							<span className='font-bold text-navy'>{dest.price}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default TopDestinations

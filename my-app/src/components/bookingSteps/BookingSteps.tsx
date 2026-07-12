import Image from 'next/image'
import { STEPS_DATA } from './stepsData'

const BookingSteps = () => {
	return (
		<section className='w-5/6 mx-auto grid grid-cols-2 gap-16 items-center'>
			<div className='flex flex-col gap-8'>
				<span className='text-coral font-bold text-sm uppercase tracking-wider'>
					Easy and Fast
				</span>
				<h2 className='font-display text-4xl md:text-5xl font-bold text-navy leading-tight'>
					Book Your Next Trip
					<br /> In 3 Easy Steps
				</h2>

				<div className='flex flex-col gap-6 mt-4'>
					{STEPS_DATA.map(step => (
						<div key={step.id} className='flex items-start gap-4'>
							<Image
								src={step.icon}
								alt={step.title}
								width={48}
								height={48}
								className='object-contain flex-shrink-0'
							/>
							<div className='flex flex-col gap-1'>
								<h3 className='font-bold text-navy'>{step.title}</h3>
								<p className='text-gray-text text-sm leading-relaxed'>
									{step.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='relative flex items-center justify-center min-h-[500px] mt-50'>
				<Image
					src='/imgs/photo.svg'
					alt='Trip to Rome progress'
					width={700}
					height={700}
					className='relative object-contain drop-shadow-2xl'
				/>
			</div>
		</section>
	)
}

export default BookingSteps

import BookingSteps from '@/components/bookingSteps/BookingSteps'
import Category from '@/components/category/Category'
import TopDestinations from '@/components/destinations/TopDestinations'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'

export default function Home() {
	return (
		<div className='flex flex-col gap-24'>
			<div className='relative z-20'>
				<Header />
			</div>
			<Hero />
			<Category />
			<TopDestinations />
			<BookingSteps />
		</div>
	)
}

import dynamic from 'next/dynamic'


import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'


const Category = dynamic(() => import('@/components/category/Category'))
const TopDestinations = dynamic(
	() => import('@/components/destinations/TopDestinations'),
)
const BookingSteps = dynamic(
	() => import('@/components/bookingSteps/BookingSteps'),
)
const Testimonials = dynamic(
	() => import('@/components/testimonials/Testimonials'),
)
const Companies = dynamic(() => import('@/components/companies/Companies'))
const SubscribeSection = dynamic(
	() => import('@/components/subscribeSection/SubscribeSection'),
)
const Footer = dynamic(() => import('@/components/footer/Footer'))

export default function Page() {
	return (
		<div className='flex flex-col min-h-screen overflow-x-hidden'>
			<div className='relative z-20'>
				<Header />
			</div>

		
			<main className='flex-1'>
				<Hero />
				<Category />
				<TopDestinations />
				<BookingSteps />
				<Testimonials />
				<Companies />
				<SubscribeSection />
			</main>

			<Footer />
		</div>
	)
}

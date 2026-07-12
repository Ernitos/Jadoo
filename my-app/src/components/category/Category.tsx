import Image from 'next/image'
import { CATEGORY_DATA } from './TypeCategoryData'

const Category = () => {
	return (
		<section className='w-5/6 mx-auto flex flex-col items-center text-center gap-3 relative'>
	<span className='text-gray-nav font-semibold text-sm uppercase tracking-widest'>
		Category
	</span>
	<h2 className='font-display text-4xl md:text-5xl font-bold text-navy'>
		We Offer Best Services
	</h2>

	<Image
		src='/imgs/plus.png'
		alt=''
		width={200}
		height={200}
		className='absolute object-contain -top-10 -right-40 pointer-events-none'
	/>

	<div className='grid grid-cols-4 gap-6 mt-16 w-full'>
		{CATEGORY_DATA.map(category => (
			<div
				key={category.id}
				className='flex flex-col shadow-md items-center text-left gap-4 p-6 rounded-2xl'
			>
				<div className='flex items-center justify-center'>
					<Image
						src={category.icon}
						alt={category.title}
						width={40}
						height={40}
						className='object-contain'
					/>
				</div>
				<h3 className='font-bold text-lg text-navy'>{category.title}</h3>
				<p className='text-gray-text text-sm leading-relaxed'>
					{category.desc}
				</p>
			</div>
		))}
	</div>
</section>
  )
}

export default Category

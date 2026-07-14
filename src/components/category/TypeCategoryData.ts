export type CategoryType = {
	id: number
	icon: string
	title: string
	desc: string
}

export const CATEGORY_DATA: CategoryType[] = [
	{
		id: 1,
		icon: '/imgs/Weather.png',
		title: 'Calculated Weather',
		desc: 'Built Wicket longer admire do barton vanity itself do in it.',
	},
	{
		id: 2,
		icon: '/imgs/plane.png',
		title: 'Best Flights',
		desc: 'Engrossed listening. Park gate sell they west hard for the.',
	},
	{
		id: 3,
		icon: '/imgs/local.png',
		title: 'Local Events',
		desc: 'Barton vanity itself do in it. Preferd to men it engrossed listening.',
	},
	{
		id: 4,
		icon: '/imgs/micro.png',
		title: 'Customization',
		desc: 'We deliver outsourced aviation services for military customers',
	},
]

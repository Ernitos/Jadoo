export type StepType = {
	id: number
	icon: string
	title: string
	desc: string
}

export const STEPS_DATA: StepType[] = [
	{
		id: 1,
		icon: '/imgs/square.webp',
		title: 'Choose Destination',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
	},
	{
		id: 2,
		icon: '/imgs/swim.webp',
		title: 'Make Payment',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
	},
	{
		id: 3,
		icon: '/imgs/car.webp',
		title: 'Reach Airport on Selected Date',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.',
	},
]

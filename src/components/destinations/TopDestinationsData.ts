export type DestinationType = {
	id: number
	image: string
	city: string
	country: string
	price: string
	duration: string
}

export const DESTINATIONS_DATA: DestinationType[] = [
	{
		id: 1,
		image: '/imgs/rome.webp',
		city: 'Rome',
		country: 'Italy',
		price: '$5,42k',
		duration: '10 Days Trip',
	},
	{
		id: 2,
		image: '/imgs/london.webp',
		city: 'London',
		country: 'UK',
		price: '$4.2k',
		duration: '12 Days Trip',
	},
	{
		id: 3,
		image: '/imgs/Europe.webp',
		city: 'Full Europe',
		country: '',
		price: '$15k',
		duration: '28 Days Trip',
	},
]

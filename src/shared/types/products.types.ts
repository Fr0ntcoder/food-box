export interface IProduct {
	id: string
	img: string
	title: string
	description: string
	price: number
	discount: number
	rating: number
	actions: boolean
	category: string
	weight?: string
	volume?: string
}

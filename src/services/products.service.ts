import { api } from '@/api/api.config'
import type { IProduct } from '@/shared/types/products.types'

export const productsService = {
	async getProductActions() {
		const { data } = await api.get<IProduct[]>('/products', {
			params: { actions: true }
		})

		return data
	}
}

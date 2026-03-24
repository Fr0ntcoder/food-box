import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
	/* const items = ref<IProduct[]>([])
	const isLoading = ref<boolean>(false)
	const error = ref<string | null>(null)

	const fetchProducts = async () => {
		isLoading.value = true
		error.value = null

		try {
			items.value = await productsService.getProductActions()
		} catch (e) {
			error.value = 'Не удалось загрузить продукты'
		} finally {
			isLoading.value = false
		}
	}

	return { items, isLoading, error, fetchProducts } */
})

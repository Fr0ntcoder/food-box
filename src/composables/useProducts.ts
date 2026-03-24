import { productsService } from '@/services/products.service'
import { useQuery } from '@tanstack/vue-query'
import { computed } from 'vue'

export const useProducts = () => {
	const { data, isPending, error } = useQuery({
		queryKey: ['products_actions'],
		queryFn: () => productsService.getProductActions()
	})

	const errorMessage = computed(() => error.value?.message ?? null)
	return {
		items: data,
		isPending,
		error: errorMessage
	}
}

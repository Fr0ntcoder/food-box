import { defineStore } from 'pinia'
import { ref } from 'vue'

const LS_KEY = 'favorite_product_ids'

type FavoriteId = string
export const useFavoriteStore = defineStore('favorites', () => {
	const ids = ref<Set<FavoriteId>>(new Set())

	const isFavorite = (id: FavoriteId) => ids.value.has(id)

	const init = () => {
		const storage = localStorage.getItem(LS_KEY)
		const parsed: FavoriteId[] = storage ? JSON.parse(storage) : []
		ids.value = new Set(parsed)
	}

	const persist = () => {
		localStorage.setItem(LS_KEY, JSON.stringify([...ids.value]))
	}

	const add = (id: FavoriteId) => {
		ids.value.add(id)
		persist()
	}

	const remove = (id: FavoriteId) => {
		ids.value.delete(id)
		persist()
	}

	const toggle = (id: FavoriteId) => {
		ids.value.has(id) ? ids.value.delete(id) : ids.value.add(id)
		persist()
	}

	return { isFavorite, init, add, remove, toggle }
})

<script lang="ts" setup>
import { Button, FavoriteButton, Rating } from '@/components/ui'

import type { IProduct } from '@/shared/types/products.types'
import { formatPrice } from '@/shared/utils'
import { useFavoriteStore } from '@/stores/favorites.store'
import { ref } from 'vue'

const props = defineProps<IProduct>()
const rating = ref(0)
const favorites = useFavoriteStore()

</script>
<template>
	<div class="relative px-2 py-5 shadow-md">
		<FavoriteButton
			:favorite="favorites.isFavorite(props.id)"
			@update:favorite="favorites.toggle(props.id)"
			class="absolute top-1 right-1"
		/>
		<img :src="props.img" :alt="props.title" class="mx-auto mb-2" />
		<div class="mb-2 flex justify-between">
			<div class="flex flex-col">
				<span class="text-lg font-bold">{{
					formatPrice(props.price / 1.9)
				}}</span>
				<span class="text-sm text-gray-300">С картой</span>
			</div>
			<div class="flex flex-col">
				<span class="text-md text-right font-bold text-gray-500">{{
					formatPrice(props.price)
				}}</span>
				<span class="text-sm text-gray-300">Обычная</span>
			</div>
		</div>
		<RouterLink
			to="/"
			class="mb-3.5 block transition-all duration-300 hover:opacity-50"
			>{{ props.title }}</RouterLink
		>
		<Rating class="mb-5" v-model="rating" />
		<Button class="w-full" :variant="props.price === 89 ? 'outline' : 'primary'"
			>В корзину</Button
		>
	</div>
</template>
<style lang="scss" scoped></style>

<script lang="ts" setup>
import type { IProduct } from '@/shared/types/products.types'
import { ProductCard } from '../ProductCard'

interface Props {
	title: string
	text: string
	link: string
	items?: IProduct[]
	isLoading?: boolean
	error?: string | null
}

const props = defineProps<Props>()
</script>

<template>
	<div v-if="isLoading">Загрузка...</div>
	<div v-else-if="error">{{ error }}</div>
	<div v-else>
		<div>
			<div class="mb-5 flex items-center justify-between">
				<h3 class="text-2xl">{{ props.title }}</h3>
				<RouterLink :to="props.link" class="text-lg">{{
					props.text
				}}</RouterLink>
			</div>
			<div class="grid grid-cols-4 gap-5">
				<ProductCard v-for="item in props.items" :key="item.id" v-bind="item" />
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped></style>

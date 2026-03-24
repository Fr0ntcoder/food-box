<script lang="ts" setup>
import { ProductsBlock } from '@/components/common/Products/ProductsBlock'
import { Container } from '@/components/ui'
import { useProducts } from '@/composables/useProducts'

import { HomeBannerSlider } from './HomeBannerSlider'

const { items, isPending, error } = useProducts()
</script>
<template>
	<div>
		<HomeBannerSlider class="mb-5" />
		<Container>
			<ProductsBlock
				title="Акции"
				text="Все акции"
				link="/"
				:items="items"
				:is-loading="isPending"
				:error="error"
			/>
		</Container>
	</div>
</template>
<style lang="scss" scoped></style>

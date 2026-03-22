<script lang="ts" setup>
import { ROUTES } from '@/shared/contstants'
import type { MenuItem } from '@/shared/types/menu.types'
import { Box, Heart, ShoppingCart } from '@lucide/vue'
import { CartMenuItem } from './CartMenuItem'

const menuItems: MenuItem[] = [
	{
		id: 'favorites',
		text: 'Избранное',
		icon: Heart,
		link: ROUTES.favorites,
		count: 1
	},
	{
		id: 'orders',
		text: 'Заказы',
		icon: Box,
		link: ROUTES.orders,
		count: 2
	},
	{
		id: 'cart',
		text: 'Корзина',
		icon: ShoppingCart,
		link: ROUTES.cart,
		count: 1
	}
]
</script>
<template>
	<div class="flex items-center gap-10">
		<CartMenuItem v-for="item in menuItems" :key="item.id" v-bind="item" />
	</div>
</template>
<style lang="scss" scoped></style>

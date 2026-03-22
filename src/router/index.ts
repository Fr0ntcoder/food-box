import { MainLayout } from '@/components/layouts/MainLayout'
import { ROUTES } from '@/shared/contstants'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: ROUTES.home,
			component: MainLayout,
			children: [
				{
					path: '',
					name: 'home',
					component: () => import('@/views/HomePage.vue')
				},
				{
					path: ROUTES.cart,
					name: 'cart',
					component: () => import('@/views/CartPage.vue')
				},
				{
					path: ROUTES.favorites,
					name: 'favorites',
					component: () => import('@/views/FavoritesPage.vue')
				},
				{
					path: ROUTES.orders,
					name: 'orders',
					component: () => import('@/views/OrdersPage.vue')
				}
			]
		}
	]
})

export default router

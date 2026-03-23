<script lang="ts" setup>
import ImgBanner1 from '@/assets/images/home/banner-1.png'
import ImgBanner2 from '@/assets/images/home/banner-2.png'
import ImgBanner3 from '@/assets/images/home/banner-3.png'
import Button from '@/components/ui/Button/Button.vue'
import Container from '@/components/ui/Container/Container.vue'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

interface IHomeBannerSlide {
	text: string
	img: string
}
const slides: IHomeBannerSlide[] = [
	{
		text: 'Быстрая доставка еды',
		img: ImgBanner1
	},
	{
		text: 'Всё самое вкусное в одном месте',
		img: ImgBanner2
	},
	{
		text: 'Свежие блюда каждый день',
		img: ImgBanner3
	}
]
const modules = [Autoplay]
</script>
<template>
	<Swiper
		:modules="modules"
		:slides-per-view="1"
		:loop="true"
		:autoplay="{ delay: 4000, disableOnInteraction: false }"
		class="h-100"
	>
		<SwiperSlide class="relative" v-for="slide in slides">
			<div class="absolute top-0 left-0 h-full w-full bg-black/50">
				<Container class="flex h-full flex-col items-start justify-center">
					<h2 class="mb-5 text-4xl text-white">{{ slide.text }}</h2>
					<Button class="text-xl">Заказать</Button>
				</Container>
			</div>
			<img
				:src="slide.img"
				:alt="slide.text"
				class="h-full w-full object-cover object-center"
			/>
		</SwiperSlide>
	</Swiper>
</template>
<style lang="scss" scoped></style>

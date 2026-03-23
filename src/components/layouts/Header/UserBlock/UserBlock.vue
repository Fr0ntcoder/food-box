<script lang="ts" setup>
import UserImage from '@/assets/images/user.png'
import Button from '@/components/ui/Button/Button.vue'
import { ROUTES } from '@/shared/contstants'
import type { IUser } from '@/shared/types/user.types'
import { ChevronDown, SquareArrowRightExit } from '@lucide/vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const data = ref<IUser>({
	id: 'dfdfd',
	name: 'Илья',
	surname: 'Скутин',
	email: 'jambox767@mail.ru'
})

const isOpen = ref<boolean>(false)
const root = ref<HTMLElement | null>(null)

const handleToogleMenu = () => {
	isOpen.value = !isOpen.value
}

onClickOutside(root, () => {
	isOpen.value = false
})
</script>
<template>
	<div
		class="relative flex flex-none cursor-pointer items-center pr-8"
		ref="root"
		@click="handleToogleMenu"
	>
		<div
			class="mr-2.5 h-10 w-10 flex-none cursor-pointer overflow-hidden rounded-full"
		>
			<img :src="UserImage" alt="Пользователь" />
		</div>
		<div>{{ data.surname }} {{ data.name }}</div>
		<ChevronDown
			class="absolute top-1/2 right-0 -translate-y-1/2 transition-transform duration-300"
			:class="{ 'rotate-180': isOpen }"
		/>
		<Transition
			enter-active-class="transition-opacity duration-200"
			enter-from-class="opacity-0"
			enter-to-class="opacity-100"
			leave-active-class="transition-opacity duration-150"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div class="absolute top-full right-0 z-10 w-full bg-white" v-if="isOpen">
				<ul class="flex flex-col items-center p-1">
					<li>
						<RouterLink :to="ROUTES.profile">Мой профиль</RouterLink>
					</li>
					<li>
						<Button variant="ghost" class="flex items-center gap-2">
							<SquareArrowRightExit :size="20" />
							Выйти
						</Button>
					</li>
				</ul>
			</div>
		</Transition>
	</div>
</template>
<style lang="scss" scoped></style>

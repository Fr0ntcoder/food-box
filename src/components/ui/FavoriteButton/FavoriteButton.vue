<script lang="ts" setup>
import { Button } from '@/components/ui'
import { HeartIcon } from '@lucide/vue'

const props = withDefaults(defineProps<{ favorite?: boolean }>(), {
	favorite: false
})

const emit = defineEmits<{ (e: 'update:favorite', value: boolean): void }>()

const toggleFavorite = () => {
	emit('update:favorite', !props.favorite)
}
</script>
<template>
	<Button variant="ghost" @click="toggleFavorite">
		<HeartIcon
			class="h-6 w-6"
			:class="
				props.favorite
					? 'fill-red-500 text-red-500'
					: 'fill-transparent text-gray-500'
			"
		/>
	</Button>
</template>
<style lang="scss" scoped></style>

<script lang="ts" setup>
import { Star } from '@lucide/vue'
import { ref } from 'vue'

const props = withDefaults(
	defineProps<{
		modelValue?: number
	}>(),
	{
		modelValue: 0
	}
)
const hover = ref(0)

const emit = defineEmits<{
	(e: 'update:modelValue', value: number): void
}>()

const setRating = (value: number) => {
	emit('update:modelValue', value)
}
</script>
<template>
	<div @mouseleave="hover = 0" class="flex items-center gap-1">
		<button
			v-for="n in 5"
			:key="n"
			@click="setRating(n)"
			class="transition hover:scale-110"
			@mouseenter="hover = n"
		>
			<Star
				class="h-5 w-5 cursor-pointer"
				:class="
					n <= (hover || props.modelValue)
						? 'fill-amber-400 text-amber-400'
						: 'fill-transparent text-gray-300'
				"
			/>
		</button>
	</div>
</template>
<style lang="scss" scoped></style>

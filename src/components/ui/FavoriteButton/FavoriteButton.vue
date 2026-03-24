<script lang="ts" setup>
import { Button } from '@/components/ui'
import { HeartIcon } from '@lucide/vue'
const props = withDefaults(defineProps<{ modelValue?: boolean }>(), {
	modelValue: false
})
const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()

const toogleFavorite = () => {
	emit('update:modelValue', !props.modelValue)
}
</script>
<template>
	<Button variant="ghost" @click="toogleFavorite">
		<HeartIcon
			class="h-6 w-6"
			:class="
				props.modelValue
					? 'fill-red-500 text-red-500'
					: 'fill-transparent text-gray-500'
			"
		/>
	</Button>
</template>
<style lang="scss" scoped></style>

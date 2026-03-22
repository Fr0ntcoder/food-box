<script lang="ts" setup>
import { computed } from 'vue'

type Variants = 'primary' | 'secondary' | 'ghost' | 'danger'
type Sizes = 'sm' | 'md' | 'lg'
type Types = 'button' | 'submit' | 'reset'

interface Props {
	variant?: Variants
	size?: Sizes
	type?: Types
}

const props = withDefaults(defineProps<Props>(), {
	variant: 'primary',
	size: 'md',
	type: 'button'
})

const classes = computed(() => {
	const variantClasses = {
		primary: 'bg-primary text-primary-foreground hover:bg-primary/80',
		secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
		ghost: 'bg-transparent text-black',
		danger: 'bg-red-500 text-white hover:bg-red-600'
	}

	const sizeClasses = {
		sm: 'px-2 py-1 text-sm',
		md: 'px-4 py-2',
		lg: 'px-6 py-3 text-lg'
	}

	return `${variantClasses[props.variant]} ${sizeClasses[props.size]} rounded cursor-pointer min-h-10`
})
</script>
<template>
	<button
		:type="props.type"
		:size="props.size"
		:class="classes"
	>
		<slot />
	</button>
</template>

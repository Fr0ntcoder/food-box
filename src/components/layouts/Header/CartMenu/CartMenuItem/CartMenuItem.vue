<script lang="ts" setup>
import type { MenuItem } from '@/shared/types/menu.types'
import { RouterLink } from 'vue-router'

const props = defineProps<MenuItem>()
</script>
<template>
	<RouterLink
		:to="props.link"
		class="hover:text-primary flex flex-col items-center gap-1 text-sm transition-all duration-300"
	>
		<component :is="props.icon" />
		{{ props.text }}
	</RouterLink>
</template>
<style lang="scss" scoped></style>

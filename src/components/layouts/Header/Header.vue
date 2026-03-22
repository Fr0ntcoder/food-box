<script lang="ts" setup>
import { Logo } from '@/components/common/Logo'
import { Container } from '@/components/ui/Container'
import { CartMenu } from './CartMenu'

import { UserBlock } from './UserBlock'

import { SearchBlock } from './SearchBlock'
</script>
<template>
	<header>
		<Container class="flex items-center gap-20 py-2">
			<Logo />
			<SearchBlock />
			<CartMenu />
			<UserBlock />
		</Container>
	</header>
</template>
<style lang="scss" scoped></style>

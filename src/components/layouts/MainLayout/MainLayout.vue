<script lang="ts" setup>
import { RouterView } from 'vue-router'
import { Footer } from '../Footer'
import { Header } from '../Header'
</script>
<template>
	<div class="flex h-full flex-col">
		<Header />
		<main class="flex-1">
			<RouterView />
		</main>
		<Footer />
	</div>
</template>
<style lang="scss" scoped></style>

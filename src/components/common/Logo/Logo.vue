<script lang="ts" setup>
import Logo from '@/assets/images/logo.png'
import { RouterLink } from 'vue-router'
</script>
<template>
	<RouterLink to="/" class="block w-20 flex-none">
		<img :src="Logo" alt="Логотип" />
	</RouterLink>
</template>

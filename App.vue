<script setup lang="ts">
import { useFavoriteStore } from '@/stores/favorites.store'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
const favorites = useFavoriteStore()

onMounted(() => {
	favorites.init()
})
</script>

<template>
	<RouterView />
</template>

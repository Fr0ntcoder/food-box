import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './src/assets/styles/main.css'
import router from './src/router'
const app = createApp(App)

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			/* staleTime: 60_000,
			gcTime: 5 * 60_000,
			retry: 1, */
			refetchOnWindowFocus: false
		}
	}
})

app.use(router)
app.use(createPinia())
app.use(VueQueryPlugin, { queryClient })

app.mount('#app')

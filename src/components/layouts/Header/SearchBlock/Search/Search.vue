<script lang="ts" setup>
import { Search } from '@lucide/vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import z from 'zod'

const searchScheme = toTypedSchema(
	z.object({
		search: z
			.string()
			.min(2, 'Минимум 2 символа')
			.max(100, 'Максимум 100 символов')
	})
)
const { defineField, handleSubmit, resetForm } = useForm({
	validationSchema: searchScheme,
	initialValues: {
		search: ''
	}
})

const [query, queryAttrs] = defineField('search')

const onSubmit = handleSubmit(async values => {
	console.log(values)
	resetForm()
})
</script>
<template>
	<form
		@submit.prevent="onSubmit"
		class="border-primary flex min-h-10 w-120 items-center rounded border px-2 py-1"
	>
		<input
			name="search"
			v-model="query"
			v-bind="queryAttrs"
			type="text"
			placeholder="Найти товар..."
			class="w-full"
		/>
		<button type="submit" class="flex-none">
			<Search :size="20" />
		</button>
	</form>
</template>
<style lang="scss" scoped></style>

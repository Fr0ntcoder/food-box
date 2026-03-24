import axios, { AxiosError } from 'axios'

export interface ApiError {
	message: string
	status?: number
	details?: unknown
}

export const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL
})

api.interceptors.response.use(
	res => res,
	(error: AxiosError) => {
		const result: ApiError = {
			message:
				(error.response?.data as { message?: string } | undefined)?.message ??
				error.message ??
				'API error',
			status: error.response?.status,
			details: error.response?.data
		}

		return Promise.reject(result)
	}
)

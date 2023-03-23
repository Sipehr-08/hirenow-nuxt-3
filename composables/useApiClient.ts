import { UseFetchOptions } from 'nuxt/dist/app/composables'
import { storeToRefs } from 'pinia'

export const useApiClient = <B>(url: string, options?: UseFetchOptions<B>) => {
  const config = useRuntimeConfig()
  const { token } = storeToRefs(useAuthStore())

  return useFetch(url, {
    baseURL: config.public.baseUrl,
    ...options,
    credentials: 'include',
    headers: [['Authorization', 'Bearer ' + token.value]],
  })
}

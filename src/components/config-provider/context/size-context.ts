import { computed, inject, provide, ref } from 'vue'
import type { InjectionKey, Ref } from 'vue'

export type SizeType = 'small' | 'middle' | 'large' | undefined
const SizeContextKey: InjectionKey<Ref<SizeType>> = Symbol('SizeContextKey')

export const useInjectSize = () => inject(SizeContextKey, ref(undefined as SizeType))
export const useSizeProvider = (size: Ref<SizeType>) => {
  const prevSize = useInjectSize()
  provide(
    SizeContextKey,
    computed(() => size.value || prevSize.value)
  )
  return size
}

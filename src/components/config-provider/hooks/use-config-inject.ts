import { computed } from 'vue'
import { useInjectSize } from '../context/size-context'

export default (key: string, props: Record<string, any> = {}) => {
  const sizeContext = useInjectSize()
  const size = computed(() => props.size || sizeContext.value)

  return { size }
}

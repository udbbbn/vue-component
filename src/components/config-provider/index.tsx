import { defineComponent, type ComponentObjectPropsOptions, type PropType, computed } from 'vue'
import { useSizeProvider, type SizeType } from './context/size-context'
import { noop } from '../util'

interface Props {
  componentSize?: SizeType
}

export default defineComponent(
  (props: Props, ctx) => {
    const componentSize = computed(() => props.componentSize)

    useSizeProvider(componentSize)

    return () => ctx.slots.default?.()
  },
  {
    name: 'config-provider',
    props: {
      componentSize: String as PropType<SizeType>
    } as ComponentObjectPropsOptions<Props>,
    emits: [],
    slots: {
      [Symbol()]: {
        default: noop
      }
    }
  }
)

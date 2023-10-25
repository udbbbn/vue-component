import { computed, defineComponent, ref, type PropType, watch } from 'vue'
import spinImg from './imgs/spin.svg'
import { Classes, StyledVcSpinImg, StyledVcSpinWrapper } from './styles'
import { getDefaultProps, noop, type DefaultProps } from '../util'
import cn from 'classnames'
import useConfigInject from '../config-provider/hooks/use-config-inject'
import { ImageSize } from '../styles'

interface Props extends DefaultProps {
  spinning?: boolean
}

export default defineComponent(
  (props: Props, ctx) => {
    const { size } = useConfigInject('')
    const spinning = computed(() => props.spinning)

    const isNestedLoading = computed(() => !!ctx.slots.default)
    return () => (
      <StyledVcSpinWrapper class={cn(Classes.vcSpinWrapper, props.rootClassName)}>
        <div
          class={cn({
            [Classes.vcSpinNestedLoading]: isNestedLoading.value
          })}
        >
          <div
            class={cn(Classes.vcSpinContent, {
              [Classes.vcSpinBlur]: spinning.value
            })}
          >
            {ctx.slots.default?.()}
          </div>
          {spinning.value && (
            <div class={cn(Classes.vcSpin)}>
              <div class={cn(Classes.vcSpinDot)}>
                <StyledVcSpinImg
                  size={size.value}
                  margin={
                    isNestedLoading.value
                      ? Number(ImageSize[size.value as keyof typeof ImageSize].replace('px', '')) /
                          2 +
                        'px'
                      : '0px'
                  }
                  class={cn(Classes.vcSpinImg, { spinning: spinning.value })}
                  src={spinImg}
                ></StyledVcSpinImg>
              </div>
            </div>
          )}
        </div>
      </StyledVcSpinWrapper>
    )
  },
  {
    name: 'spin',
    props: {
      ...getDefaultProps(),
      spinning: {
        type: Boolean as PropType<boolean>,
        default: true
      }
    },
    emits: [],
    slots: {
      [Symbol()]: {
        default: noop
      }
    }
  }
)

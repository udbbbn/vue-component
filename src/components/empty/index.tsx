import { defineComponent, type CSSProperties, type PropType, toRefs } from 'vue'
import EmptyImg from './imgs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg'
import cn from 'classnames'
import { getDefaultProps, noop, type DefaultProps } from '../util'
import { Classes, StyledVcEmptyWrapper } from './styles'

interface Props extends DefaultProps {
  description?: string
  image?: string
  imageStyle?: CSSProperties
}

const DefaultDescription = '暂无数据'

export default defineComponent(
  (props: Props, ctx) => {
    return () => (
      <StyledVcEmptyWrapper class={cn(Classes.vcEmptyWrapper, props.rootClassName)}>
        {ctx.slots.imgSlot && ctx.slots.imgSlot(Classes.vcEmptyImg)}
        {!ctx.slots.imgSlot && (
          <img
            class={cn(Classes.vcEmptyImg)}
            style={{ ...props.imageStyle }}
            src={props.image || EmptyImg}
            alt=""
          />
        )}
        {ctx.slots.desSlot && ctx.slots.desSlot(Classes.vcEmptyTips)}
        {!ctx.slots.desSlot && (
          <div class={cn(Classes.vcEmptyTips)}>{props.description || DefaultDescription}</div>
        )}
        {ctx.slots.default && ctx.slots.default()}
      </StyledVcEmptyWrapper>
    )
  },
  {
    props: {
      ...getDefaultProps(),
      description: { type: String },
      image: { type: String },
      imageStyle: { type: Object as PropType<CSSProperties>, default: () => ({}) }
    },
    emits: [],
    slots: {
      [Symbol()]: {
        default: noop,
        desSlot: (className: string) => {},
        imgSlot: (className: string) => {}
      }
    }
  }
)

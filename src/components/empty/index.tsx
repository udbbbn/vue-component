import { defineComponent, type CSSProperties } from 'vue'
import EmptyImg from './imgs/TB1l1LcM3HqK1RjSZJnXXbNLpXa-50-50.svg'
import cn from 'classnames'
import { noop } from '../util'
import { Classes, StyledVcEmptyWrapper } from './styles'

interface Props {
  rootClassName?: string
  description?: string
  image?: string
  imageStyle?: CSSProperties
}

const DefaultDescription = '暂无数据'

export default defineComponent(
  (props: Props, ctx) => {
    const { rootClassName, description, image, imageStyle } = props
    return () => (
      <StyledVcEmptyWrapper class={cn(Classes.vcEmptyWrapper, rootClassName)}>
        {ctx.slots.imgSlot && ctx.slots.imgSlot(Classes.vcEmptyImg)}
        {!ctx.slots.imgSlot && (
          <img
            class={cn(Classes.vcEmptyImg)}
            style={{ ...imageStyle }}
            src={image || EmptyImg}
            alt=""
          />
        )}
        {ctx.slots.desSlot && ctx.slots.desSlot(Classes.vcEmptyTips)}
        {!ctx.slots.desSlot && (
          <div class={cn(Classes.vcEmptyTips)}>{description || DefaultDescription}</div>
        )}
        {ctx.slots.default && ctx.slots.default()}
      </StyledVcEmptyWrapper>
    )
  },
  {
    props: {
      rootClassName: { type: String },
      description: { type: String },
      image: { type: String },
      imageStyle: { type: Object, default: () => ({}) }
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

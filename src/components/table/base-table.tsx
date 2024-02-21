import { defineComponent, ref, watch, type CSSProperties, type Ref } from 'vue'
import { Classes, StyledVcTableWrapper, type BaseTableCssVariables } from './styles'
import cn from 'classnames'
import TableHeader from './header'
import TableBody from './main-table'
import { getComponentProps } from './util'
import useConfigInject from '../config-provider/hooks/use-config-inject'

export interface Column {
  code: string
  width: number
  name: string
  align?: 'left' | 'right'
  lock?: boolean
}

export interface Components {
  EmptyContent: () => JSX.Element
}

export interface BaseTableProps<T> {
  dataSource: T[]
  columns: Column[]
  rootClassName?: string
  hasHeader?: boolean
  components?: Components
  style?: CSSProperties & BaseTableCssVariables
  onScroll?: (e: UIEvent) => void
  containerRef?: Ref
}

export type DefaultBaseTableProps = BaseTableProps<Record<string, unknown>>
export type ColsType = DefaultBaseTableProps['columns']

const colSort = (cols: ColsType) => [...cols].sort((a, b) => Number(~~b.lock!) - Number(~~a.lock!))

export default defineComponent(
  <T extends Record<string, unknown>>(props: BaseTableProps<T>) => {
    const { size } = useConfigInject('')
    const headerContainer = ref<HTMLDivElement | null>(null)
    const bodyContainer = ref<HTMLDivElement | null>(null)
    const showShadow = ref(false)
    const cols = ref(colSort(props.columns))
    const leftLockWidth = ref(cols.value.reduce((t, c) => t + (c.lock ? c.width : 0), 0))
    console.log('size', size.value)

    watch(
      () => props.columns,
      (newCols: ColsType) => {
        cols.value = colSort(newCols)
        leftLockWidth.value = cols.value.reduce((t, c) => t + (c.lock ? c.width : 0), 0)
      },
      {
        deep: true
      }
    )

    function onScroll(e: UIEvent) {
      const { scrollLeft } = e.target as HTMLElement
      showShadow.value = scrollLeft !== 0
      headerContainer.value && (headerContainer.value.scrollLeft = scrollLeft)
      bodyContainer.value && (bodyContainer.value.scrollLeft = scrollLeft)
    }

    return () => (
      <StyledVcTableWrapper
        style={{ ...(props.style || {}) }}
        class={cn(Classes.vcTableWrapper, props.rootClassName, { 'has-header': props.hasHeader })}
      >
        <div class={cn(Classes.vcTable)}>
          {props.hasHeader && (
            <TableHeader columns={cols.value} onScroll={onScroll} containerRef={headerContainer} />
          )}
          <TableBody
            columns={cols.value}
            dataSource={props.dataSource}
            components={props.components}
            onScroll={onScroll}
            containerRef={bodyContainer}
          ></TableBody>
          <div class={cn(Classes.vcTableLockShadow)}>
            <div
              style={{
                width: leftLockWidth.value + 'px'
              }}
              class={cn(Classes.vcTableLeftLockShadow, { 'show-shadow': showShadow.value })}
            ></div>
          </div>
        </div>
      </StyledVcTableWrapper>
    )
  },
  {
    name: 'base-table',
    props: getComponentProps()
  }
)

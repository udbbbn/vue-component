import { defineComponent } from 'vue'
import { Classes, StyledVcTableWrapper } from './styles'
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
}

export type DefaultBaseTableProps = BaseTableProps<Record<string, unknown>>

export default defineComponent(
  <T extends Record<string, unknown>>(props: BaseTableProps<T>) => {
    const { size } = useConfigInject('')
    console.log('size', size.value)
    return () => (
      <StyledVcTableWrapper
        class={cn(Classes.vcTableWrapper, props.rootClassName, { 'has-header': props.hasHeader })}
      >
        <div class={cn(Classes.vcTable)}>
          {props.hasHeader && <TableHeader columns={props.columns} />}
          <TableBody
            columns={props.columns}
            dataSource={props.dataSource}
            components={props.components}
          ></TableBody>
        </div>
      </StyledVcTableWrapper>
    )
  },
  {
    name: 'base-table',
    props: getComponentProps()
  }
)

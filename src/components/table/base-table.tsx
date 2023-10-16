import { defineComponent } from 'vue'
import { Classes, StyledVcTableWrapper } from './styles'
import cn from 'classnames'
import TableHeader from './header'
import TableBody from './main-table'
import { getComponentProps } from './util'

export interface Column {
  code: string
  width: number
  name: string
  align?: 'left' | 'right'
}

export interface BaseTableProps<T> {
  dataSource: T[]
  columns: Column[]
  hasHeader?: boolean
}

export type DefaultBaseTableProps = BaseTableProps<Record<string, unknown>>

export default defineComponent(
  <T extends Record<string, unknown>>(props: BaseTableProps<T>) => {
    const { columns, dataSource, hasHeader } = props
    return () => (
      <StyledVcTableWrapper class={cn(Classes.vcTableWrapper, { 'has-header': hasHeader })}>
        <div class={cn(Classes.vcTable)}>
          {hasHeader && <TableHeader columns={columns} />}
          <TableBody columns={columns} dataSource={dataSource}></TableBody>
        </div>
      </StyledVcTableWrapper>
    )
  },
  {
    props: getComponentProps()
  }
)

import { defineComponent } from 'vue'
import cn from 'classnames'
import { Classes } from './styles'
import type { DefaultBaseTableProps } from './base-table'
import { getComponentProps } from './util'

export default defineComponent(
  (props: DefaultBaseTableProps) => {
    const { EmptyContent } = props.components!
    const colKeys = props.columns.map((el) => el.code)
    return () => (
      <div class={cn(Classes.vcTableBody)}>
        <table>
          <colgroup>
            {props.columns.map((col) => (
              <col
                key={col.code}
                style={{
                  width: `${col.width}px`
                }}
              ></col>
            ))}
          </colgroup>
          <tbody>
            {props.dataSource.length ? (
              props.dataSource.map((data, idx) => (
                <tr class={cn(Classes.vcTableRow, { first: idx === 0 })} key={idx}>
                  {colKeys.map((key, i) => (
                    <td class={cn(Classes.vcTableCell, { first: i === 0 })}>{data[key]}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr class={cn(Classes.vcTableRow, 'first')}>
                <td class={cn(Classes.vcTableCell, 'first')} colspan={props.columns.length}>
                  <EmptyContent />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  },
  {
    name: 'main-table',
    props: getComponentProps(),
    emits: []
  }
)

import { defineComponent } from 'vue'
import cn from 'classnames'
import { Classes } from './styles'
import type { Column } from './base-table'

interface Props {
  columns: Column[]
}

export default defineComponent(
  (props: Props) => {
    return () => (
      <div class={cn(Classes.vcTableHeader)}>
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
          <thead>
            <tr class={cn(Classes.vcTableHeaderRow)}>
              {props.columns.map((col, i) => (
                <th class={cn(Classes.vcTableHeaderCell, { first: i === 0 })} key={col.code}>
                  {col.name}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    )
  },
  {
    props: {
      columns: {
        type: Array,
        default: () => []
      }
    },
    emits: []
  }
)

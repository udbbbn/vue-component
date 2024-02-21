import { defineComponent, type PropType, type Ref } from 'vue'
import cn from 'classnames'
import { Classes } from './styles'
import type { Column } from './base-table'

interface Props {
  columns: Column[]
  containerRef: Ref
  onScroll: (e: UIEvent) => void
}

export default defineComponent(
  (props: Props) => {
    return () => (
      <div
        class={cn(Classes.vcTableHeader, 'no-scrollBar')}
        onScroll={props.onScroll}
        ref={props.containerRef}
      >
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
                <th
                  class={cn(Classes.vcTableHeaderCell, {
                    first: i === 0,
                    [Classes.vcTableCellLock]: col.lock
                  })}
                  key={col.code}
                  style={
                    col.lock
                      ? {
                          left: props.columns.slice(0, i).reduce((t, c) => t + c.width, 0) + 'px'
                        }
                      : {}
                  }
                >
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
      },
      onScroll: {
        type: Function as PropType<Props['onScroll']>
      },
      containerRef: {
        type: Object as PropType<Props['containerRef']>
      }
    },
    emits: []
  }
)

import { defineComponent } from 'vue'

export interface Column {
  code: string
  width: number
  name: string
  align?: 'left' | 'right'
}

interface Props<T = Record<string, unknown>> {
  dataSource: T[]
  columns: Column[]
}

export default defineComponent<Props>({
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  setup(props: Props) {
    const { columns, dataSource } = props
    const colKeys = columns.map((el) => el.code)
    return () => (
      <table>
        <tr>
          {columns.map((col) => (
            <td key={col.code}>{col.name}</td>
          ))}
        </tr>
        {dataSource.map((data, idx) => (
          <tr key={idx}>
            {colKeys.map((key) => (
              <td key={idx + '_' + key}>{data[key]}</td>
            ))}
          </tr>
        ))}
      </table>
    )
  }
})

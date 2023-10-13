import type { ComponentObjectPropsOptions } from 'vue'
import type { DefaultBaseTableProps } from './base-table'

export const getComponentProps: () => ComponentObjectPropsOptions<DefaultBaseTableProps> = () => ({
  columns: {
    type: Array,
    default: () => []
  },
  dataSource: {
    type: Array,
    default: () => []
  },
  hasHeader: {
    type: Boolean,
    default: true
  }
})

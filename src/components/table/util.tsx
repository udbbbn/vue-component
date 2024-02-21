import type { ComponentObjectPropsOptions, PropType } from 'vue'
import type { Column, Components, DefaultBaseTableProps } from './base-table'
import EmptyContent from '../empty'
import { getDefaultProps } from '../util'

export const getComponentProps: () => ComponentObjectPropsOptions<DefaultBaseTableProps> = () => ({
  ...getDefaultProps(),
  columns: {
    type: Array as PropType<Column[]>,
    default: () => []
  },
  dataSource: {
    type: Array as PropType<Record<string, unknown>[]>,
    default: () => []
  },
  hasHeader: {
    type: Boolean,
    default: true
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  components: {
    type: Object as PropType<Components>,
    default: {
      EmptyContent: (
        <EmptyContent
          v-slots={{
            desSlot: (className: string) => (
              <div class={className}>
                没有符合查询条件的数据
                <br />
                请修改条件后重新查询
              </div>
            )
          }}
        ></EmptyContent>
      )
    }
  }
})

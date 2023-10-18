import type { ComponentObjectPropsOptions } from 'vue'
import type { DefaultBaseTableProps } from './base-table'
import EmptyContent from '../empty'

export const getComponentProps: () => ComponentObjectPropsOptions<DefaultBaseTableProps> = () => ({
  rootClassName: { type: String, default: '' },
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
  },
  components: {
    type: Object,
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

import { defineComponent, reactive } from 'vue'
import BaseTable, { type Column } from './baseTable'

export default defineComponent({
  // props: {},
  emits: [],
  components: {},
  setup() {
    const dataSource = [
      { prov: '湖北省', confirmed: 54406, cured: 4793, dead: 1457, t: '2020-02-15 19:52:02' },
      { prov: '广东省', confirmed: 1294, cured: 409, dead: 2, t: '2020-02-15 19:52:02' },
      { prov: '河南省', confirmed: 1212, cured: 390, dead: 13, t: '2020-02-15 19:52:02' },
      { prov: '浙江省', confirmed: 1162, cured: 428, dead: 0, t: '2020-02-15 19:52:02' },
      { prov: '湖南省', confirmed: 1001, cured: 417, dead: 2, t: '2020-02-15 19:52:02' }
    ]

    const columns: Column[] = reactive([
      { code: 'prov', name: '省份', width: 150 },
      { code: 'confirmed', name: '确诊', width: 100, align: 'right' },
      { code: 'cured', name: '治愈', width: 100, align: 'right' },
      { code: 'dead', name: '死亡', width: 100, align: 'right' },
      { code: 't', name: '最后更新时间', width: 180 }
    ])
    setTimeout(() => {
      columns.push({ code: 't22', name: '最后更新222时间', width: 180 })
    }, 1000)
    console.log('dataSource', dataSource)
    return () => <BaseTable dataSource={dataSource} columns={columns}></BaseTable>
    // return () => <div>3333</div>
  }
})

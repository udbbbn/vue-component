<template>
  <ConfigProvider :componentSize="'middle'">
    <Spin :spinning="tableInfo.loading">
      <div @click="reset">重置</div>
      <div @click="click">左侧列固定效果查看</div>
      <Table
        :dataSource="tableInfo.dataSource"
        :columns="tableInfo.columns"
        :style="tableInfo.style"
    /></Spin>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { reactive, onMounted, type CSSProperties } from 'vue'
import ConfigProvider from '../components/config-provider/index'
import Table from '../components/table'
import { dataSource, columns } from '../components/table/demo/index.vue'
import Spin from '../components/spin'

const initialState = {
  loading: true,
  dataSource: [] as typeof dataSource,
  columns: [...columns],
  style: {} as CSSProperties
}

const tableInfo = reactive({ ...initialState })

onMounted(() => {
  setTimeout(() => {
    tableInfo.loading = false
    tableInfo.dataSource = [...dataSource]
  }, 1000)
})

function click() {
  tableInfo.columns[2] = { ...tableInfo.columns[2], lock: true }
  tableInfo.style.width = '400px'
}

function reset() {
  Object.assign(tableInfo, { ...initialState, columns: [...columns], dataSource: [], style: {} })
  setTimeout(() => {
    tableInfo.loading = false
    tableInfo.dataSource = [...dataSource]
  }, 1000)
}
</script>

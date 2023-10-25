<template>
  <ConfigProvider :componentSize="'middle'">
    <Spin :spinning="tableInfo.loading"
      ><Table :dataSource="tableInfo.dataSource" :columns="tableInfo.columns"
    /></Spin>
    <Spin></Spin>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import ConfigProvider from '../components/config-provider/index'
import Table from '../components/table'
import { dataSource, columns } from '../components/table/demo/index.vue'
import Spin from '../components/spin'

const tableInfo = reactive({
  loading: true,
  dataSource: [],
  columns
})

onMounted(() => {
  setTimeout(() => {
    tableInfo.loading = false
    tableInfo.dataSource = dataSource
  }, 1000)
})
</script>

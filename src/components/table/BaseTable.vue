<template>
  <table>
    <tr>
      <td v-for="(item, index) in props.columns" :key="index">{{ item.name }}</td>
    </tr>
    <tr v-for="(item, index) in props.dataSource" :key="index">
      <td v-for="(k, kIdx) in colKeys" :key="kIdx">{{ item[k] }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
interface Column {
  code: string
  width: number
  name: string
  align?: 'left' | 'right'
}

export type { Column }
</script>
<script setup lang="ts" generic="T extends Record<string, any>">
const props = defineProps<{
  dataSource: T[]
  columns: Column[]
}>()
console.log('props', props)
const colKeys = props.columns.map((el) => el.code)
</script>

<style></style>

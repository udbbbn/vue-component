<template>
  <div>
    <button @click="click">2</button>
    <Spin :spinning="bool"></Spin>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const bool = ref(false)

const click = () => {
  bool.value = !bool.value
  console.log('bool', bool.value)
}
</script>

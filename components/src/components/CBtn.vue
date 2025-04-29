<template>
  <div class="btn" @click="showMsg">{{ msg }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  msg: string
}>()

const emits = defineEmits<{
  (e:'confirm', msg:string):void
}>()

const showMsg = () => {
  emits('confirm', props.msg)
}
</script>
<style scoped>
.btn {
  display: inline-block;
  margin: 8px;
  padding: 4px 16px;
  border-radius: 50px;
  background-color: skyblue;
  border: 1px solid darkmagenta;
}
</style>

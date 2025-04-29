<template>
  <main>
    <!-- <TheWelcome /> -->
     <CBtn msg="我是按钮哟" @confirm="onclick" />
  </main>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
import { CBtn } from '@m2maomao/components';
import {userApi} from '@m2maomao/apis';
import { arrayUtil } from '@m2maomao/utils';

const callApi = () => {
  userApi.getUser(20).then(res => {
    console.log('res1:', res);
  })
  userApi.getUserById('uid-2025').then(res => {
    console.log('res2:', res);
  })
}

const onclick = (msg: string) => {
  console.log(25, msg);
}
onMounted(() => {
  // callApi();
  const names = ['jimmy', 'tom', 'young'];
  console.log(arrayUtil.findIndex('jimmy', names));
})
</script>

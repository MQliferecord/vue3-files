<template>
  <div class="box">
    <Header></Header> 
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, onMounted, shallowRef } from '@vue/runtime-core';
import Header from './components/Header.vue'
export default defineComponent({
  components:{
    Header,
  },
  setup(){
    return{
    }
  }
  })
</script>

<style lang="scss">
.box {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
}
</style>

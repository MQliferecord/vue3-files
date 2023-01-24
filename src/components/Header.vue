<template>
  <div class="header">
    <van-nav-bar title="Nav">
      <template #left> 
        <van-icon
          name="arrow-left"
          color="black"
          size="0.22rem"
          @click="redirect"
        />
      </template>
      <template #right>
        <van-icon
          name="closed-eye"
          color="black"
          size="0.22rem"
          @click="changeTheme"
        />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import {useRouter} from 'vue-router'

export default defineComponent({
  name: "Header",
  setup() {
    const router = useRouter()
    const redirect = ()=>{
        router.push({path:"/"})
    }
    const changeTheme = () => {
      console.log("changeTheme");
    };
    return {
      changeTheme,
      redirect
    };
  },
});
</script>

<style>
.header {
}
</style>
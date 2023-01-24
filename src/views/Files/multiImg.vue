<template>
  <div class="multiImg-box">
    <van-uploader @change="fileipt($event)" multiple>
      <van-button icon="plus" round type="default"> </van-button>
    </van-uploader>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { Files } from "../../api/fileAPI";

export default defineComponent({
  name: "multiImg",
  setup() {
    console.log("111");
    const url = "uploads";
    const fileipt = (e) => {
      const file = e.target.files;
      console.log(file);
      let formData = new FormData();
      file.forEach((items) => {
        formData.append("file", items);
      });
      Files(url, formData);
    };
    return {
      fileipt,
    };
  },
});
</script>

<style lang="scss" scoped>
.multiImg-box {
  width: 100%;
  overflow: hidden;
  flex: 1;
  padding: 0 0.34rem;
  box-sizing: border-box;
}
</style>
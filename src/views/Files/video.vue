<template>
  <div class="item-box">
    <div class="video-box">
      <van-button
        icon="plus"
        round
        type="default"
        @click="videoUpload"
      ></van-button>
      <a href="javascript:;" class="fileMask">
        <input type="file" ref="video" />Files Upload
      </a>
    </div>
    <div class="progress-box">
      <van-progress v-model:percentage="percentage" pivot-color="#696969"/>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  nextTick,
  onMounted,
  ref,
  watch,
} from "@vue/runtime-core";
import { Files, getSize } from "../../api/fileAPI";
//import hashWorker from '@/hooks/useHash' 

export default defineComponent({
  name: "video",
  setup() {
    console.log("111");
    const url = "video";
    const video = ref();
    const percentage = ref(0);
    onMounted(() => {
      video.value;
    });
/** 
    const calculateHash = (fileList)=>{
      return new Promise(resolve=>{
        const worker = new Worker(hashWorker)
        worker.postMessage({fileList})
        worker.onmessage = e =>{
          const {hash} = e.data
          if(hash){
            resolve(hash)
          }
        }
      })
    }
*/
    const videoUpload = async () => {

      console.log(video.value.files[0]);
      const file = video.value.files[0];

      const sectionLength = 100;
      let fileList = [];
      let itemSize = Math.ceil(file.size / sectionLength);
      let current = 0;
      for (current; current < file.size; current += itemSize) {
        fileList.push({
          file: file.slice(current, current + itemSize),
        });
      }
      debugger
      const hash = await calculateHash(fileList)
      const fileData = {
        fileName: file.name,
        //hash:hash
      };
      const getSizeAns = await getSize(fileData);
      const count = getSizeAns.data;
      console.log(count);
      fileList = count === 0 ? fileList : fileList.slice(count, sectionLength);
      for (const [index, item] of fileList.entries()) {
        let formData = new FormData();
        //formData.append("hash",hash)
        formData.append("file", item.file);
        formData.append("filename", file.name);
        formData.append("total", sectionLength);
        formData.append("index", index + count + 1);
        Files(url, formData).then((res) => {
          console.log(res.data);
          percentage.value = res.data;
        });
      }
    };
    return {
      video,
      percentage,
      videoUpload,
    };
  },
});
</script>

<style lang="scss" scoped>
.item-box {
  display: flex;
  flex-flow: column;
  width: 100%;
  .video-box {
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    .fileMask {
      height: 0.44rem;
      width: 2.628rem;
      border-radius: 0.15rem;
      text-align: center;
      line-height: 0.44rem;
      font-size: 0.2rem;
      text-decoration: none;
    }
    input {
      position: absolute;
      height: 0.44rem;
      line-height: 0.44rem;
      flex: 1;
      opacity: 0;
    }
    van-buttton {
      flex: 1;
    }
  }
  .progress-box {
    margin-top: 0.22rem;
    width: 100%;
    van-progress {

    }
  }
}
</style>
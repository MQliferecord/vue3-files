<template>
  <div class="singleImg-box">
    <a href="javascript:;" class="singleimg">
        <van-uploader @change="fileipt($event)">
            <van-button icon="plus" round type="default">
            </van-button>
        </van-uploader>
    </a>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import {Files} from '../../api/fileAPI' 

export default defineComponent({
    name:"singleImg",
    setup(){
        console.log("111")
        const url = 'upload';
        const fileipt = (e)=>{
            const file = e.target.files[0]
            console.log(file)
            let formData = new FormData();
            formData.append("file",file) 
            Files(url,formData);
        }
        return{
            fileipt,
        }
    }
})
</script>

<style lang="scss" scoped>
.singleImg-box{
    width:100%;
    overflow:hidden;
    display: flex;
    padding:0 0.34rem;
    box-sizing:border-box;
}
</style>
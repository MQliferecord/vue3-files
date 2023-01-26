<template>
  <div class="img-items" v-for="img in imgs" :key="img.id">
    <img v-lazyImg="img.content" alt="">
  </div>
</template>

<script lang="ts">
import {useStore} from 'vuex'
import {GlobalState} from '@/store/index'
import useImg from '@/hooks/useImgState'
import { defineComponent, onMounted, reactive } from '@vue/runtime-core'

export default defineComponent({
    name:"image",
    setup(props,ctx){
        let store = useStore<GlobalState>();
        let {imgs,isLoading,getImgByPage} = useImg(store)
        const state = reactive({
            page:1,
            size:5,
        })
        if(store.state.img.imgs.length === 0){
            console.log('1111')
            getImgByPage({
                page:state.page,
                size:state.size
            })
        }
        return{
            imgs,
            isLoading,
            getImgByPage
        }
    }
})
</script>

<style lang="scss">
.img-items{
    height:3.904rem;
    width:3.904rem;
}
</style>
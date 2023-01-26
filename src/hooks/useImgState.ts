import {Store} from 'vuex'
import {computed} from 'vue'
import { GlobalState} from '@/store'
import {Page} from '../store/typings'
import * as Types from '../store/actionTypes'

export default function useImg(store:Store<GlobalState>){
    console.log('imgs2222')
    let imgs = computed(()=>store.state.img.imgs)
    console.log(imgs)
    let isLoading = computed(()=>store.state.img.isLoading)

    function getImgByPage(payload:Page){
        console.log('dispatch')
        return store.dispatch(`img/${Types.SEARCHBY_PAGESIZE}`,payload)
    }
    return {
        imgs,
        isLoading,
        getImgByPage
    }
}
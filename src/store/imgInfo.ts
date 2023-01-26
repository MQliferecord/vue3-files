import * as FileAPI from "@/api/fileAPI"
import {Module} from "vuex"
import {ImgState,Img,Page, Result} from "./typings"
import {GlobalState} from './index'
import * as Types from './actionTypes'


const state:ImgState={
    imgs:[],
    isLoading:false
}
const img:Module<ImgState,GlobalState>={
    namespaced:true,
    state,
    mutations:{
        [Types.SEARCHBY_PAGESIZE](state,payload:Img[]){
            state.imgs.push(...payload)
        },
        [Types.GET_IMGS](state,payload:Img[]){
            state.imgs = payload
        },
        [Types.SET_LOADING](state,payload:boolean){
            state.isLoading = payload
        }
    },
    actions:{
        //分页加载
        [Types.SEARCHBY_PAGESIZE]({commit},payload:Page){
            console.log('0000')
            FileAPI.getImg<Result<Img[]>>(payload.page,payload.size).then(data=>{
                if(payload.page===1){
                    console.log(data)
                    commit(Types.GET_IMGS,data.data)
                }else{
                    commit(Types.SEARCHBY_PAGESIZE,data.data)
                }
            })
        }
    }
}
export default img
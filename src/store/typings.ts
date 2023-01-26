import {ref} from 'vue'

export interface Img{
    id:number,
    imgContent:string,
}

export interface ImgState{
    imgs:Img[],
    isLoading:boolean
}

export interface Page{
    page:number,
    size:number
}

export interface Result<T>{
    status:number,
    message:string,
    data:T
}
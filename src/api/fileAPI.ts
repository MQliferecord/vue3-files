import axios from './index';

// 文件请求上传

export function getSize(data:any) {
    return axios.post(`/upload/getSize`,data,{
        headers:{'Content-Type':'application/json; charset = utf-8'}
    });
}

export function Files(url:string,formData:any){
    return axios.post(`/upload/${url}`,formData)
}

export function getImg<T>(page:number,size:number){
    return axios.post<T,T>(`/upload/img/${page}/${size}`)
}
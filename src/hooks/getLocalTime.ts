export default function getLocalTime(key:string){
    let val = localStorage.getItem(key)
    if(!val){
        return val
    }
    val = JSON.parse(val)
    //@ts-ignore
    if(Date.now()>val.time+val.expire){
        localStorage.removeItem(key)
        return
    }
    //@ts-ignore
    return val.data
}
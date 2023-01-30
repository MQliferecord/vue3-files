export default function setLocalTime(key:string,value:any,expire:number){
    if(isNaN(expire)||expire<1){
        throw new Error("有效期必须是数字并且大于一天")
    }
    let time = expire*1000*24*60*60
    let obj = {
        data:value,
        time:Date.now(),//存取时间
        expire:time,//过期时间
    }
    localStorage.setItem(key,JSON.stringify(obj))
}
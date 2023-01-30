/**
const hashWorker = () => {
    console.log("1kpkp11")
    //@ts-ignore
    self.importScripts("./spark-md5.min.js")

    self.onmessage = e => {
        console.log("44444")
        const { fileList } = e.data;
        //@ts-ignore
        const spark = new self.SparkMD5.ArrayBuffer();
        let count = 0;
        const loadNext = (index:number)=> {
            const reader = new FileReader();
            reader.readAsArrayBuffer(fileList[index].file)
            reader.onload = e => {
                count++;
                //@ts-ignore
                spark.append(e.target.result);
                if (count === fileList.length) {
                    self.postMessage({
                        hash: spark.end()
                    })
                    self.close()
                } else {
                    loadNext(count)
                }
            }
        }
        loadNext(0)
    }
}
export default hashWorker
*/
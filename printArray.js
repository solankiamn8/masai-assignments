function printArray(arr,N,M){
    for(let i=0;i<N;i++){
        console.log(arr[i].join(" "))
    }
}

let arr = [[1,2],[3,4],[4,5]]
printArray(arr,3,2)
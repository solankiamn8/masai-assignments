function printArray(arr,N,M){
    let bag = ""
    for(let i=0;i<N;i++){
        bag = ""
        for(let j=0;j<M;j++){
            let sum = i+j
            bag += sum + " "
        }
        console.log(bag)
    }
}

let arr = [[1,2],[3,4],[4,5]]
printArray(arr,3,2)
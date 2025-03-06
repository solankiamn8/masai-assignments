function printIII(N){
    let temp = ""
    for(let i=0;i<N;i++){
        temp += "* "
    }
    console.log(temp)
    console.log(" ")
    for(let i=1;i<N-1;i++){
        console.log("*")
        console.log(" ")
    }
    console.log(temp)
}

printIII(5)
function extractAndReverse(arr){
    let narr = arr.slice(2,4)
    return narr.reverse()
}


let arr = [15, 30, 45, 60, 75, 90]
console.log(extractAndReverse(arr))
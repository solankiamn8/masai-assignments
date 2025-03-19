function filterEvenNumbers(arr){
    return arr.filter(ele => ele%2 === 0)
}

function sumOfArray(arr){
    return arr.reduce((acc,num) => acc + num, 0)
}

function sortAndConcat(arr1, arr2){
    return arr1.concat(arr2)
}
let A = [1,2,3,4,5]
let B = [6,7,8,9,10]
console.log(filterEvenNumbers(A))
console.log(sumOfArray(A))
console.log(sortAndConcat(A, B))

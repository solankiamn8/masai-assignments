function multiply(a,b){
    return a*b
}

function multiplyNumbers(x,y){
    return multiply.apply(null, [x,y])
}

console.log(multiplyNumbers(3,5))
function countReps(){
    let arrCount = arr.reduce((counts, name) => {
        counts[name] = (counts[name] || 0) + 1
        return counts
    },{})

    
    let arrSorted = Object.entries(arrCount).sort((a,b) => b[1] - a[1])
    console.log(arrSorted)
}

let arr = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

countReps(arr)


// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data Not Succesfully")
//     }, 2000)
// })

// myPromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log("Completed")
// })


// callback hell
function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1")
            resolve()
        }, 2000)
    })
}
// fetchData(()=>{
//     console.log("2")
//     fetchData(()=>{
//         console.log("3")
//         fetchData(()=>{
//             console.log("End")
//         })
//     })
// })

fetchData().then(()=>{
        console.log("1")
        return fetchData()
    }).then(()=>{
        console.log("2")
        return fetchData()
    }).then(()=>{
        console.log("3")
    })
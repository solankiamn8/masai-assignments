// asyn prog
// console.log("Task1")
// setTimeout(() => {
//     console.log("Task2")
// }, 2000)

// console.log("Task3")

//event loop

//async callbacks
// function fetchData(callback){
//     setTimeout(() => {
//         callback("Data recieved")
//     }, 1000)
// }

// fetchData((data) => {
//     console.log(data)
// })

// let fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data recieved")
//     }, 1000)
// })

// fetchData.then((data) => {
//     console.log(data)
// })

function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data recieved")
        }, 1000)
    })
}
async function displayData() {
    let data = await fetchData()
    console.log(data)
}

function deepClone(obj){
    let clone = JSON.parse(JSON.stringify(obj))
    clone.hobbies.push("coding")
    console.log("Original:", obj)
    console.log("Clone:", clone)
}

let obj = { name: "Alice", hobbies: ["reading", "traveling"] }
deepClone(obj)
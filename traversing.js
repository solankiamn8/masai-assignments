let book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };

let temp = ""
for(detail in book){
    temp += `${detail}: ${book[detail]} `
}

console.log(temp)
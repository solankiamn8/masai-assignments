function removeSpamWords(comments, spamWords){
    return comments.filter(comment => {
        return !spamWords.some(spam => comment.toLowerCase().includes(spam.toLowerCase()))
    })
}

const comments = [

"Buy now and get 50% OFF!",

"This is a great product",

"Limited-time OFFER, visit now!",

"Nice blog post!",

"Get cheap deals now!"

];


const spamWords = ["buy", "offer", "cheap"];

let cleaned = removeSpamWords(comments, spamWords)
console.log(cleaned)

// Expected Output: ["This is a great product", "Nice blog post!"]



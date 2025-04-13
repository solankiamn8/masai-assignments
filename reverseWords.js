function reverseWords(str){
    let N = str.length
    let words = []
    let word = ""

    for(let i=0; i<N; i++){
        let char = str[i]

        if(char!==" "){
            word += char
        }else if(word.length > 0){
            words.push(word)
            word = ""
        }
    }
    let temp = ""
    for(let i=words.length-1; i>=0; i--){
        temp += words[i] + " "
    }
    console.log(temp)
}

let s = "  the   sky  is blue  "
reverseWords(s)
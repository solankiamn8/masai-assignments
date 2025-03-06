function reverse(num) {
  
    let temp = num
    let bag = ""
    while(temp>0){
      bag = bag + temp%10
      temp = Math.floor(temp/10)
    }
    console.log(bag)
}

reverse(971)


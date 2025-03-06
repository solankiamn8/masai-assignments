function isHappyNumber(n) {
    let repeat = {};  

    while (n !== 1 && !repeat[n]) {
        repeat[n] = true;

        let sum = 0;
        let temp = n;
        while (temp > 0) {
            let digit = temp % 10;
            sum += digit * digit;
            temp = Math.floor(temp / 10);
        }
        n = sum; 
    }
    return n === 1;
}


console.log(isHappyNumber(19));
console.log(isHappyNumber(2)); 

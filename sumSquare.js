function sumSquare(k){
    let a = 0;
    while (a * a <= k) { 
        let bb = k - (a * a);

        let b = 0;
        while (b * b <= bb) {
            if (b * b === bb) {
                return true;
            }
            b++;
        }
        a++;
    }

    return false;

}

console.log(sumSquare(25))
console.log(sumSquare(7))

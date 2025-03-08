function outerFunction(){
    let message = "variable message in outerFunction"

    function innerFunction(){
        console.log(message)
    }

    return innerFunction
}

let closure = outerFunction()
closure()
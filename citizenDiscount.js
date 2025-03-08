function citizenDiscount(age){
    if(age <= 0) console.log("Invalid Age")
    else {
        let message = age >= 60 ? "Eligible for Senior Discount" : "Not Eligible for Senior Discount"
        console.log(message)
    }
}

citizenDiscount(65)
citizenDiscount(27)
citizenDiscount(0)
citizenDiscount(-12)

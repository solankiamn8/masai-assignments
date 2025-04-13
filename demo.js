function demo() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("User not found")
            }
        })
        .then(data=> {
            uniq = {}

            // if(user.company.name)
        })

}
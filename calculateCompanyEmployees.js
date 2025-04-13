
function calculateCompanyEmployees() {
    let link = 'https://jsonplaceholder.typicode.com/users'
    fetch(link)
        .then(response => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Username not found")
            }
        })
        .then(data => {
            let unique = {}

            data.forEach(user=> {
                unique[user.company.name] = true
            });
            console.log(Object.keys(unique).length)
        })
        .catch(error => {
            console.log("Error:", error)
        });
}

calculateCompanyEmployees()





function searchUser(username) {
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
            let user = data.filter(user => user.username == username)
            if(user.length > 0){
                console.log(user)
            }
        })
        .catch(error => {
            console.log("Error:", error)
        });
}

searchUser("Bret")












// **1. Search for a User**\n
// Create a function `searchUser(username)` that:\n
// \n
// - Takes a **search username (username)** as input.\n
// - **Checks** if a user with that **username** exists in `data`.\n
// - If found, **print the user details**; otherwise, print `"User not found"`.\n
// **Example:**\n
// \n
// ```\n
// searchUser("Bret");\n
// \n
// ```\n
// \n
// **Output (if exists):**\n
// \n
// ```json\n
// {\n
//  "id": 1,\n
//  "name": "Leanne Graham",\n
//  "username": "Bret",\n
//  "email": "Sincere@april.biz",\n
//  ...\n
// }\n
// \n
// ```\n
// \n
// Else:\n
// \n
// ```\n
// "User not found"\n
// \n
// ```\n
// \n
// ---\n
// \n
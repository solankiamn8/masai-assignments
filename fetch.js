fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        users.forEach(element => {
            console.log(element.name)
        });
    })
    .catch(err => console.log('Error :', err))
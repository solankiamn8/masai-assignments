async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        if(!response.ok){
            throw new Error('Response not ok')
        }
        const products = await response.json()
        products.forEach(element => {
            console.log(element)
        });
    } catch (error) {
        console.log('Error: ', error)
    }
}

fetchProducts()
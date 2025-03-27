async function fetchProducts() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error("Response was not ok");
        }
        
        let products = await response.json();
        console.log("Products:", products);
        
        let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
        console.log("Total:", totalPrice);
        
    } catch (error) {
        console.log("Error:", error)
    }
}

fetchProducts();

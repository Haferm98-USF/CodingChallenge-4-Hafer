// Task 1: Initialize inventory with product objects

let inventory = [
    {name: "goPro", price: 89.99, quantity: 50, lowStockLevel: 8},
    {name: "Lenovo Laptop", price: 799.99, quantity: 40, lowStockLevel: 5}, 
    {name: "Speaker Bar", price: 199.99, quantity: 25, lowStockLevel: 4}, 
    {name: "Apple Watch", price: 399.99, quantity: 45, lowStockLevel: 8}, 
    {name: "Sony Television", price: 649.99, quantity: 11, lowStockLevel: 6}];

   

// Task 2: Create displayProductDetails function
function displayProductDetails(input)
{
    let productDetails = inventory.rind(element => element.name = input);
    console.log("Product: " + productDetails.name)
    console.log("Price: $" + productDetails.price)
    console.log("Quantity: " + productDetails.quantity)
   
    if (productDetails.quantity > productDetails.lowStockLevel)
        console.log("In Stock")
    else    
        console.log("Low Stock")   
} ;

displayProductDetails(goPro);


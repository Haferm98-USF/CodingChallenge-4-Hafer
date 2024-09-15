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
    let productDetails = inventory.find(element => element.name = input);
    console.log("Product: " + productDetails.name)
    console.log("Price: $" + productDetails.price)
    console.log("Quantity: " + productDetails.quantity)
   
    if (productDetails.quantity > productDetails.lowStockLevel)
        console.log("In Stock")
    else    
        console.log("Low Stock")   
};

console.log(displayProductDetails(input,));

//Task 3: Create a Function to Update Product stock after Sales

function updateStock(input, unitsSold)
{
    let product = inventory.find(element => element.name = input);
    product.quantity -= unitsSold;
    if (productDetails.quantity > productDetails.lowStockLevel)
        console.log("In Stock")
    else if (productDetails.quantity = 0)
        console.log("Out of Stock")  
    else 
        console.log("Low Stock")
};
//Task 4: Create a Function to Check Low Stock Products

function calculateInventoryValue
{
    let inventoryValue = 0;
    for (let i = 0; i < inventory.length; i++)
    {
        inventoryValue += inventory[i].price * inventory[i].quantity;
    }
console.log('Total Value of Inventory: $' + inventoryValue);
}
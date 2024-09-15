// Task 1: Initialize inventory with product objects

let inventory = [
    {name: goPro, price: 89.99, quantity: 50, lowStockLevel: 8},
    {name: lenovoLaptop, price: 799.99, quantity: 40, lowStockLevel: 5}, 
    {name: speakerBar, price: 199.99, quantity: 25, lowStockLevel: 4}, 
    {name: appleWatch, price: 399.99, quantity: 45, lowStockLevel: 8}, 
    {name: sonyTelevision, price: 649.99, quantity: 11, lowStockLevel: 6}];

   

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

function checkLowStock (input)
{
    console.log("Products with Low Stock:");
    inventory.forEach(product.quantity <= product.lowStockLevel)
    {console.log(inventory.name)};
};

//Task 5: Create a Function to Calculate  Total Inventory Value

function calculateInventoryValue()
{
    let inventoryValue = 0;
    for (let i = 0; i < inventory.length; i++)
    {
        inventoryValue += inventory[i].price * inventory[i].quantity;
    }
console.log('Total Value of Inventory: $' + inventoryValue);
};

//Task 6: Create a Function to Process a Sale

function processSale(input, unitsSold) 
{
    let productDetails = inventory.find(element => element.name = input);
    if (productDetails <= 0)
        console.log("This Item is Out of Stock")
    else     
    updateStock(input, unitsSold);
}
console.log(processSale(appleWatch, 2));
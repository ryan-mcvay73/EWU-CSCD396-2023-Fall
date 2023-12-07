const readline = require('readline');

// Dummy menu data
const menuItems = [
    { id: 1, name: "Burger", price: 10 },
    { id: 2, name: "Pizza", price: 12 },
    { id: 3, name: "Salad", price: 8 },
];

// Initialize menu options
function initializeMenu() {
    console.log("Menu:");
    menuItems.forEach(item => {
        console.log(`${item.id}. ${item.name} - $${item.price}`);
    });
}

// Function to calculate total cost
function calculateTotal(orderItems) {
    let total = 0;

    orderItems.forEach(item => {
        // Extracting the price from the item text
        const price = parseFloat(item.match(/\$([\d.]+)/)[1]);
        total += price;
    });

    // Display the total cost
    console.log(`Total Cost: $${total.toFixed(2)}`);
}

// Function to add selected item to the order list
function addToOrder(selectedItem, quantity, orderList) {
    const orderItem = `${selectedItem.name} x${quantity} - $${selectedItem.price * quantity}`;
    orderList.push(orderItem);
    console.log(`Added to order: ${orderItem}`);
}

// Main function
function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const orderList = [];

    rl.question("Enter the item number to add to the order: ", function (itemId) {
        const selectedItem = menuItems.find(item => item.id === parseInt(itemId));

        if (selectedItem) {
            rl.question("Enter the quantity: ", function (quantity) {
                addToOrder(selectedItem, parseInt(quantity), orderList);
                calculateTotal(orderList);
                rl.close();
            });
        } else {
            console.log("Invalid item number. Please select a valid item.");
            rl.close();
        }
    });

    initializeMenu();
}

// Run the main function
main();

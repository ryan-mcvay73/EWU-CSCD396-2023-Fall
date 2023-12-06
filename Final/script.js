// Dummy menu data
const menuItems = [
    { id: 1, name: "Burger", price: 10 },
    { id: 2, name: "Pizza", price: 12 },
    { id: 3, name: "Salad", price: 8 },
];

// Initialize menu options
document.addEventListener("DOMContentLoaded", function () {
    const menuList = document.getElementById("item");

    menuItems.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.text = `${item.name} - $${item.price}`;
        menuList.appendChild(option);
    });
});

function calculateTotal() {
    const orderItems = document.querySelectorAll("#order-list li");
    let total = 0;

    orderItems.forEach(item => {
        // Extracting the price from the item text
        const price = parseFloat(item.innerText.match(/\$([\d.]+)/)[1]);
        total += price;
    });

    // Display the total cost
    document.getElementById("total-cost").innerText = `Total Cost: $${total.toFixed(2)}`;
}

// Function to add selected item to the order list
function addToOrder() {
    const selectedItem = menuItems.find(item => item.id === parseInt(document.getElementById("item").value));
    const quantity = parseInt(document.getElementById("quantity").value);

    if (selectedItem) {
        const orderItem = document.createElement("li");
        orderItem.innerText = `${selectedItem.name} x${quantity} - $${selectedItem.price * quantity}`;
        document.getElementById("order-list").appendChild(orderItem);
        calculateTotal();
    }

    // Optional: Clear the form after adding an item to the order
    document.getElementById("order-form").reset();
}

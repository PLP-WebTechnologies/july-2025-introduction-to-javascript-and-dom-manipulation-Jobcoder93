// ==================== Part 1: Basics ====================
// Demonstrates variables, conditionals, and basic output
function checkNumber() {
    let number = document.getElementById('userNumber').value;
    let result = document.getElementById('result');

    if (number > 0) {
        result.textContent = "The number is positive ✅";
    } else if (number < 0) {
        result.textContent = "The number is negative ❌";
    } else {
        result.textContent = "The number is zero ⚪";
    }
}

// ==================== Part 2: Functions ====================
// Custom function to calculate total price
function calculateTotal() {
    let price = parseFloat(document.getElementById('price').value);
    let quantity = parseInt(document.getElementById('quantity').value);
    let totalResult = document.getElementById('totalResult');

    if (!isNaN(price) && !isNaN(quantity)) {
        let total = price * quantity;
        totalResult.textContent = `Total Price: $${total.toFixed(2)}`;
    } else {
        totalResult.textContent = "Please enter valid numbers.";
    }
}

// ==================== Part 3: Loops ====================
// Loop to generate a list of numbers
function generateList() {
    let list = document.getElementById('numberList');
    list.innerHTML = ""; // Clear previous content
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement('li');
        li.textContent = `Number ${i}`;
        list.appendChild(li);
    }
}

// ==================== Part 4: DOM Manipulation ====================
// 1. Toggle Dark Mode
document.getElementById('toggleBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// 2. Add a new element dynamically
function addNewElement() {
    let container = document.getElementById('dynamicContent');
    let newElement = document.createElement('p');
    newElement.textContent = "New element added dynamically!";
    container.appendChild(newElement);
}

// 3. Event listener example (already included above for dark mode)

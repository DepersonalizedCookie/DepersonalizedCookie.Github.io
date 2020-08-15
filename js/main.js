function calcAmount() {
    let price = 2000;
    let amountInput = document.querySelector("input[name='amount']");
    let amountNumber = parseInt(amountInput.value)
    
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber)
}

function showSumPrice(price = 2000, amountNumber= 1) {

    let showPrice = document.querySelector("span.show-price")
    if (amountNumber > 10) {
        alert("You can only purchase up to 10 burgers in one order!");
        return;
    } else if (amountNumber < 1) {
        alert("You must purchase at least 1 burger!");
    } else {
        let amount = amountNumber * price;
        showPrice.innerHTML = amount;
    }
    
}




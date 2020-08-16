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

//Window events

let sendButton = document.querySelector("form .btn.btn-success");
/*sendButton.onclick = function() {
    alert("Thank you! You order is on the way!")
}*/
sendButton.addEventListener("click", function(){
    alert("Thank you! Your order is on the way!");
});

window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth);
});

//Űrlap események
let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();
    
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
    console.log( values );
});

//Parent element kezelése
let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function(ev) {
    this.parentElement.style.display = "none";
}
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction);
}

//Select elem kitöltése
let toppings = [
    "Ketchup",
    "Hot chili sauce",
    "Vegan cheese",
    "Vegan bacon",
    "Pickles",
    "Mustard",
    "Vegan Mayo"
];

let toppingSelect = document.querySelector("#toppingSelect");
let index = 0;
while(index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}
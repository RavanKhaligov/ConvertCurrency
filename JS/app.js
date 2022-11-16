const currencyForm = document.getElementById("currency-form");
const amountElement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");
const output = document.getElementById("outputResult");
const icon = document.getElementsByClassName("fa-solid")[0];

const currency = new Currency(firstSelect,secondSelect,amountElement);

eventListeners();

function eventListeners(){
    currencyForm.addEventListener("submit",exchangeCurrency); 
    icon.addEventListener("click",changeSelects);
}
function changeSelects(){
    let newValue = firstSelect.value;
    firstSelect.value = secondSelect.value;
    secondSelect.value = newValue;
    exchangeCurrency();
}
function exchangeCurrency(e){
    currency.exchange()
    .then(result => {
        UI.changeResult(result);
    })
    .catch(err => console.log(err));


    e.preventDefault();
}
class Currency{
    constructor(firstCurrency,secondCurrency,amount){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.amount = amount;
    }
     async exchange(){
        const resolve = await fetch(`https://open.er-api.com/v6/latest/${this.firstCurrency.options[this.firstCurrency.selectedIndex].textContent}`);
        const result = await resolve.json();
        return result.rates[this.secondCurrency.options[this.secondCurrency.selectedIndex].textContent]*this.amount.value;
       
    }
    
}
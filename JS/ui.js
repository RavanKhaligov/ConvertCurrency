class UI{
    static changeResult(newAmount){
        document.getElementById("outputResult").textContent = `${amountElement.value} ${firstSelect.options[firstSelect.selectedIndex].textContent} = ${newAmount} ${secondSelect.options[secondSelect.selectedIndex].textContent}` 
    }
}
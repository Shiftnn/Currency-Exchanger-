let currency1 = document.getElementById('currency-one')
let currency2 = document.getElementById('currency-two')
let amount1 = document.getElementById('amount-one')
let amount2 = document.getElementById('amount-two')

let swapper = document.getElementById('swap')
let rate = document.getElementById('rate')

// fetch exchange rates and updates the DOM
function calculate() {
    let currencyEl_oneValue = currency1.value
    let currencyEl_twoValue = currency2.value

    fetch(`https://open.er-api.com/v6/latest/${currencyEl_oneValue}`)
        .then(res => res.json())
        .then(data => {
            const rates = data.rates[currencyEl_twoValue]
            
            rate.innerText = `1 ${currencyEl_oneValue} = ${rates} ${currencyEl_twoValue}`;

            amount2.value = (amount1.value * rates).toFixed(2)
        })
}

// event listeners
currency1.addEventListener('change',calculate)
amount1.addEventListener('input',calculate)

currency2.addEventListener('change',calculate)
amount2.addEventListener('input',calculate)

swapper.addEventListener('click',() => {
    const cur1 = currency1.value
    const cur2 = currency2.value

    currency1.value = cur2
    currency2.value = cur1

    calculate()
})

calculate()
const fib_button = document.getElementById('btnFib')
const fact_button = document.getElementById('btnFact')
const res_area = document.getElementById('res_area')

fib_button.addEventListener('click', () => {
    const num_fib = document.getElementById('fib_number').value;
    var n1 = 0;
    var n2 = 1;
    if (num_fib == 0) {
        res_area.innerHTML = "Not 0!!!";
    } else if (num_fib == 1) {
        res_area.innerHTML = "1 = 0 taquitos";
    } else if (num_fib <= 3) {
        res_area.innerHTML = "🌮";
    } else if (num_fib > 10) {
        for (var i=0; i<num_fib-1; i++){
            nextNumber = n1 + n2;
            n1 = n2;
            n2 = nextNumber;
            res_area.innerHTML = "Well, that's a lot of 🌮... <br>"+n1+ " to be exact.";
            }
    } else {
        for (var i=0; i<num_fib-1; i++){
            nextNumber = n1 + n2;
            n1 = n2;
            n2 = nextNumber;
            res_area.innerHTML = "🌮".repeat(n1);
            }
        }
})

fact_button.addEventListener('click', () => {
    
    const num_fact = document.getElementById('fact_number').value;
    console.log(num_fact);
    const res = factorial(num_fact);
    if (num_fact > 5 && num_fact <= 21 ) {
        res_area.innerHTML = "We're talking about <br>"+res+ " 🌮 to be exact.";
    } else if (num_fact >= 22) { 
        res_area.innerHTML = "Now that's a looooong number. You won't even read it. <br> Here's one taquito: 🌮";
    } else if (num_fact <= 5) {
        res_area.innerHTML = "🌮".repeat(res);
    }
})

function factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

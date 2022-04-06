const fib_button = document.getElementById('btnFib')
const fact_button = document.getElementById('btnFact')

const num_fact = document.getElementById('fact_number').value;
const res_area = document.getElementById('res_area')

fib_button.addEventListener('click', () => {
    const num_fib = document.getElementById('fib_number').value;
    console.log("number: "+num_fib);
    var n1 = 0;
    var n2 = 1;
    if (num_fib == 0) {
        res_area.innerHTML = "Not 0!!!";
    } else if (num_fib == 1) {
        res_area.innerHTML = "1 = 0 taquitos"
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

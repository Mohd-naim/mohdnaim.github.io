const cel = document.getElementById('input');
const fah = document.getElementById('output');
const convert = document.getElementById('convert');
const clear = document.getElementById('clear');

convert.addEventListener('click', function() {
    let c = parseFloat(cel.value);
    if(c == '')  {
        fah.value = alert('Please enter a number');
    } 
    if(isNaN(c)) {
        fah.value = 'Invalid Input';
    } else {
        fah.value = (c * 9 / 5 + 32).toFixed(2);
    }
    let f = (c * 9/5) + 32;
    fah.value = f;
    });

    clear.addEventListener('click', function() {
        cel.value = '';
        fah.value = '';
    });

    cel.addEventListener('keyup', function() {  //keyup is a event listener
        let c = parseFloat(cel.value);
        let f = (c * 9/5) + 32;
        fah.value = f;
    }); 

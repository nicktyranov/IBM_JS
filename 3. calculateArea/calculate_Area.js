let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;
    if (area){
        document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
    } 
}

function calculate(){
    let x1 = +document.getElementById('amount1').value
    let x2 = +document.getElementById('amount2').value
    let x3 = +document.getElementById('amount3').value

    let rez = x1 + x2 + x3;
    console.log(`The sum is: ${rez}`)
    if (rez){
        document.getElementById('result2').innerText = `The sum is: ${rez}`;
    }
}
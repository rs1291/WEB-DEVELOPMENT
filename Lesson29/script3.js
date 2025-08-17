function myDisplayer(value) {
    document.getElementById("result").innerHTML = value;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
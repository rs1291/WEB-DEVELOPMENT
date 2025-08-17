async function add(a, b) {
    let response = await (a + b);
    display(response);
}

function display(value) {
    document.getElementById("result").innerHTML = value;
}

function myFunction() {
    var greeting;
    var time = new Date().getHours();

    if (time < 10) {
        greeting = "Good morning";
    }
    else if (time < 20) {
        greeting = "Good day";
    }
    else {
        greeting = "Good evening";
    }

    document.getElementById("hour").innerHTML = "Current Hour is : " + time;
    document.getElementById("greet").innerHTML = greeting;
}


function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function sum(a, b) {
    var sum = a + b;
    myDisplayer(sum);
}

function runPromise() {
    let myPromise = new Promise(function (myResolve, myReject) {
        let x = 0; // change this to 5 to see error

        if (x == 0) {
            myResolve("OK");
        } else {
            myReject("Error");
        }
    });

    myPromise.then(
        function (value) { sum(5, 5); },  // success
        function (error) { sum(error); }  // error
    );
}
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        document.getElementById("message").innerHTML = "⚠️ Name must be filled out";
        document.getElementById("message").style.color = "red";
        return false;
    } else {
        document.getElementById("message").innerHTML = "✅ Form submitted successfully!";
        document.getElementById("message").style.color = "green";
        return true;
    }
}
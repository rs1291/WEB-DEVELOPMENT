var myObj = { name: "Riya", age: 12, grade: 7};
var myJSON = JSON.stringify(myObj);
var newObj = JSON.parse(myJSON);

document.getElementById("result").innerHTML = newObj.name;
const student = {
    name: "Aarav Singh",
    age: 16,
    grade: "10th",
    school: "Green Valley High School"
};

// Function to display object data
function showStudentInfo() {
    let output = `
        <strong>Name:</strong> ${student.name}<br>
        <strong>Age:</strong> ${student.age}<br>
        <strong>Grade:</strong> ${student.grade}<br>
        <strong>School:</strong> ${student.school}
    `;
    document.getElementById("info").innerHTML = output;
}

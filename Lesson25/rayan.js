function runDemo() {
    const output = document.getElementById("output");
    let result = "";


    const name = "Shalaka";       
    const age = 30;               
    const isTeacher = true;       
    const skills = ["HTML", "JavaScript", "Python"]; 
    const profile = {    
        city: "Mumbai",
        subject: "Coding"
    };

    result += "Data Types:\n";
    result += "Name (string): " + name + "\n";
    result += "Age (number): " + age + "\n";
    result += "Is Teacher (boolean): " + isTeacher + "\n";
    result += "Skills (array): " + skills.join(", ") + "\n";
    result += "Profile (object): City = " + profile.city + ", Subject = " + profile.subject + "\n\n";

    
    const school = "LMES";       
    let counter = 0;        

    result += "Using while loop to count from 1 to 5:\n";

    while (counter < 5) {
        counter++;               
        result += "Count: " + counter + "\n";
    }

    output.textContent = result;
}



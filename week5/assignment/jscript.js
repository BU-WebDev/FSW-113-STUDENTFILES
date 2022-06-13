
let student;
let certificate = document.getElementById("print");

certificate.addEventListener("click", function () {
    newStudent();
    printCertificate();
    prevent();
});

function printCertificate() {
    document.getElementById("certStudentName").innerHTML = student.studentName;
    document.getElementById("certClassName").innerHTML = student.className;
    document.getElementById("certGrade").innerHTML = student.totalValue();
}

function convertAry(names) {
    let nameArr = names.value.split(",");
    nameArr = nameArr.map(function (x) {
        return parseInt(x);
    });
    return nameArr;
}

function newStudent() {
    student = new Student(
        document.getElementById("studentName").value,
        document.getElementById("className").value,
        convertAry(document.getElementById("studentScores")),
        convertAry(document.getElementById("possibleScores"))
    );
}

function resetForm() {
    console.log(resetForm);
    (document.getElementById("certStudentName").innerHTML = ""),
        (document.getElementById("certClassName").innerHTML = ""),
        (document.getElementById("certGrade").innerHTML = ""),
        (document.getElementById("studentName").value = ""),
        (document.getElementById("className").value = ""),
        (document.getElementById("studentScores").value = ""),
        (document.getElementById("possibleScores").value = "");
}

//!       Rules
// Declare any necessary variables.
// Add am event listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
// Create a function that instantiates a new student object with the input from the HTML form.
// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.

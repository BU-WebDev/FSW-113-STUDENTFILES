//!    JavaScript Page

document.querySelector("#submit").addEventListener("click", curveGrades);

document.querySelector("#reset").addEventListener("click", function () {
    document.querySelector("#scores").value = "";
    document.querySelector("#grades").textContent = "Curved Grades Show Here";
});
function applyBell(grade, index, ary) {
    switch (true) {
        case grade >= mean + gradeSlice * 2:
            ary[index] = "A";
            break;
        case grade >= mean + gradeSlice:
            ary[index] = "B";
            break;
        case grade >= mean:
            ary[index] = "C";
            break;
        case grade >= mean - gradeSlice:
            ary[index] = "D";
            break;
        default:
            ary[index] = "F";
            break;
    }
}
function convertArray(obj) {
    ary = obj.value.split(",");
    ary = ary.map(function (x) {
        return parseInt(x);
    });
    return ary;
}

function curveGrades() {
    const sumGrades = (array) =>
        array.reduce((accumulator, currentValue) => accumulator + currentValue);
    let aryGrades = convertArray(document.querySelector("#scores"));
    const minGrade = aryGrades.reduce((a, b) => Math.min(a, b));
    const maxGrade = aryGrades.reduce((a, b) => Math.max(a, b));
    mean = sumGrades(aryGrades) / aryGrades.length;
    gradeSlice = (maxGrade - minGrade) / 5;
    aryGrades.forEach(applyBell);
    document.querySelector("#grades").textContent = aryGrades.join(",");
}

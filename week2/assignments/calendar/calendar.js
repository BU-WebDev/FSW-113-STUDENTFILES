document.getElementById("go").addEventListener("click", printCalendar);
function printCalendar() {
    var selectedYear = document.getElementById("year");
    var selectedMonth = document.getElementById("month");

    selectedYear = parseInt(selectedYear.value);

    selectedMonth = parseInt(selectedMonth.value);

    const today = new Date(`${selectedMonth + 1}/1/${selectedYear}`);
    const month = today.getMonth();
    let days;
    switch (month) {
        case 1:
            days = 28;
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            days = 30;
            break;
        default:
            days = 31;
    }

    let x;
    const weekday = today.getDay();
    for (x = 0; x < weekday; x++) {
        document.getElementById("calendarDays").innerHTML +=
            "<div class='blankDay'>&nbsp;</div>";
    }

    let dt = 0;
    do {
        dt++;
        document.getElementById(
            "calendarDays"
        ).innerHTML += `<div class='calendarCell'>${dt}</div`;
    } while (dt < days);

    const monthName = today.toLocaleDateString("default", { month: "long" });
    const year = today.getFullYear();
    document.querySelector(".calendarTitle").innerText = `${monthName} ${year}`;

    const remainder = 7 - ((x + dt) % 7);
    let y = 0;
    while (y < remainder) {
        document.getElementById("calendarDays").innerHTML +=
            "<div class='blankDay'>&nbsp;</div>";
        y++;
    }
}

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let select = document.getElementById("month");
for (let i = 0; i < months.length; i++) {
    let newOptions = document.createElement("option");
    newOptions.innerHTML = months[i];
    newOptions.setAttribute("value", months.indexOf(months[i]));
    select.append(newOptions);
}
printCalendar(months[i]);

/* Was trying to reset to chosen month!
document.getElementById("#go").addEventListener("onClick", myFunction);

function myFunction() {
    var x = document.getElementById("#go");
    return x.printCalendar(months[i]).reset();
}
*/

/* !  Directions
1 modify this script to populate the month select you create in the HTML page from an array of month names
2 you can use either a for loop or an array.map to populate the select. remember that while arrays start with
3 zero, month numbers go from 1-12
4 modify this script to run a function called printCalendar() when the user clicks the "Go" button
5 modify this script to use the first day of the month the user selects in place of the const today
*/

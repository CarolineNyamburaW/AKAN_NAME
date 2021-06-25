const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function birthIndex(d, m, yr) {
    let dd = parseInt(d);
    let mm = parseInt(m);
    let cc = Math.floor(yr / 100);
    let yy = parseInt(yr.slice(2, 4));
    let dayOfTheWeek = Math.floor((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7);
    return dayOfTheWeek;
}

function UserData() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    if (day < 0 || day > 31 || month < 0 || month > 12) {
        alert("Invalid day or month") & document.querySelector("form").reset()
    }
    
    let dayIndex = birthIndex(day, month, year);
    return dayIndex;
}

function output(event) {
    event.preventDefault();
    let data = UserData();
    if (document.getElementById("male").checked) {
        alert("You were Born on "+ daysOfTheWeek[data] +"\nYour Akan Name is " + maleNames[data]);

    } else if (document.getElementById("female").checked) {
        alert("You were Born on "+ daysOfTheWeek[data] + "\nYour Akan Name is " + femaleNames[data]);
    }
    document.querySelector("form").reset()

}
document.getElementById("submit").addEventListener("click", output)
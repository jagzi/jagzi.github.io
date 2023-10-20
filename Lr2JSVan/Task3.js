function getLastDayOfMonth(year, month) {
    let date = new Date(year, month+1);
    date.setDate(0);
    return date.getDate();
}

document.write("<br><br>Завдання 3: ", getLastDayOfMonth(2020, 1))
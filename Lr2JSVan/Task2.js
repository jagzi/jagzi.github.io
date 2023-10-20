function getWeekDay(date) {
    switch(date.getDay()) {
        case 0: return "НД";
        case 1: return "ПН";
        case 2: return "ВТ";
        case 3: return "СР";
        case 4: return "ЧТ";
        case 5: return "ПТ";
        case 6: return "СБ";
    }
}

let dateVar = new Date(2012, 0, 3)
document.write("<br><br>Завдання 2: ", getWeekDay(dateVar))
function sumSalaries(salaries) {
    let sum = 0;
    for (const iterator of Object.values(salaries)) {
        sum += iterator
    }
    return sum
}

let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
}

alert(sumSalaries(salaries));

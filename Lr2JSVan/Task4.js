function formatDate(date) {
    bench = Date.now() - date;
    if(bench < 1000) {
        return "Прямо зараз"
    } else if(bench < 60000) {
        return Math.floor(bench/1000) + " секунд назад";
    } else if(bench < 3600 * 1000) {
        return Math.floor(bench/60000) + " хвилин назад";
    } else {
        const pad = (n) => n < 10 ? '0' + n : n;

        let day = pad(date.getDate());
        let month = pad(date.getMonth() + 1); // Місяці починаються з 0
        let year = String(date.getFullYear()).substr(2, 2); // Беремо останні дві цифри року
        let hours = pad(date.getHours());
        let minutes = pad(date.getMinutes());

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}

document.write("<br><br>Завдання 4: ")
document.write("<br>new Date(): ", formatDate(new Date()))
document.write("<br>new Date(2021, 11, 31, 10): ", formatDate(new Date(2021, 11, 31, 10)))
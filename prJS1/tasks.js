function task18() {
    var styles = ["Jazz", "Blues"]
    console.log(styles)

    styles.push("Rock-n-Roll")
    console.log(styles)

    styles[Math.ceil(styles.length/2)-1] = "Classics"
    console.log(styles)

    console.log(styles.shift())
    console.log(styles)

    styles.unshift("Rap", "Reggae")
    alert(styles)
}

function task19() {
    function camelize(str) {
        var arr = str.split('-')
        for(var i = 1; i < arr.length; i++)
            arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase())
        return arr.join('');
    }
    
    let text;
    while(text = prompt("Введіть текст (напр. list-style-image)")) {
        alert(camelize(text))
    }
}

function task20() {
    function filterRange(arr, a, b) {
        var filtered = []
        arr.forEach(element => {
            if(element >= a && element <= b) filtered.push(element)
        });
        return filtered
    }
    
    let arr = [5, 3, 8, 1];
    
    let filtered = filterRange(arr, 1, 4)
    
    console.log(filtered)
    console.log(arr)

    alert("Початковий масив: " + arr)
    alert("Відфільтрований: " + filtered)
}

function task21() {
    function copySorted(arr) {
        var sorted = []
        arr.forEach(element => {
            sorted.push(element)
        });
    
        return sorted.sort();
    }
    
    let arr = ["HTML", "JavaScript", "CSS"]
    
    let sorted = copySorted(arr)
    
    console.log(arr)
    console.log(sorted)

    alert("Початковий масив: " + arr)
    alert("Відсортований: " + sorted)
}

function task22() {
    function sortByAge(users) {
        return users.sort((a, b) => {return a.age - b.age;})
    }
    
    let ivan = { name: "Iвaн", age: 25 };
    let petro = { name: "Пeтpо", age: 30 };
    let mariya = { name: "Mapiя", age: 28 };
    let arr = [ petro, ivan, mariya ];
    alert("Було: " + arr[0].name + ", " + arr[1].name + ", " + arr[2].name)
    sortByAge (arr);
    alert("Стало: " + arr[0].name + ", " + arr[1].name + ", " + arr[2].name)
}

function task23() {
    function getAverageAge(arr) {
        var sum = 0;
        arr.forEach(element => {
            sum += element.age;
        });
    
        return sum/arr.length;
    }
    
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };
    
    let arr = [ john, pete, mary ];
    
    alert(getAverageAge(arr) ); // (25 +30 + 29) / 3 = 28
}

function task24() {
    function groupById(users) {
        obj = {}
        return users.reduce((obj, current) => {
            obj[current.id] = current
            return obj;
        }, {})
    
    }
    
    let users = [
        {id: 'іван', name: "Іван Іванко", age: 20},
        {id: 'ганна', name: "Ганна Іванко", age: 24},
        {id: 'петро', name: "Петро Петренко", age: 31}
    ]
    
    console.log(groupById(users))

    alert("Результат в консолі :)")
}

function task25() {
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
}
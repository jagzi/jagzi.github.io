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
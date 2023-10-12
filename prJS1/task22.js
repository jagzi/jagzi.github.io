function sortByAge(users) {
    return users.sort((a, b) => {return a.age - b.age;})
}

let ivan = { name: "Iвaн", age: 25 };
let petro = { name: "Пeтpо", age: 30 };
let mariya = { name: "Mapiя", age: 28 };
let arr = [ petro, ivan, mariya ];

sortByAge (arr);

// now: [ivan, mariya, petro]
alert(arr[0].name); // Iвaн
alert(arr[1].name); // Mapiя
alert(arr[2].name); // Пeтpo
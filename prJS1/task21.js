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
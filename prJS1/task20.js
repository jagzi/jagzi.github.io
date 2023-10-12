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
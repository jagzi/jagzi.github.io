function camelize(str) {
    var arr = str.split('-')
    for(var i = 1; i < arr.length; i++)
        arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase())
    return arr.join('');
}

console.log(camelize("background-color")); 
console.log(camelize("list-style-image")); 
console.log(camelize ("-webkit-transition"));
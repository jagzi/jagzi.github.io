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
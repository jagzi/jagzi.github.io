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
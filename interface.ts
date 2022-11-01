interface Person {
    first: string
    last: string
    role: string
}

const user: Person = {
    first: "Konstantin",
    last: "Läufer",
    role: "Professor",
}

console.log(`${user.first}'s role is ${user.role}`)
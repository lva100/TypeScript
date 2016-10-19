interface Person {
    firstName: string;
    lastName: string;
    id: number;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jane", lastName: "User", id: 1 };

document.body.innerHTML = greeter(user);
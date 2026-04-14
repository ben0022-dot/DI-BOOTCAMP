const message = "Hello, World!";
console.log(message);

let age: number = 25;
let name: string = "Anakin";

console.log(`Name: ${name}, Age: ${age}`);

let id: string | number;

id = 101;       // Valid
id = "AZ-99";   // Also valid

function checkNumber(num: number): string {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

console.log(checkNumber(10)); // Output: positive
console.log(checkNumber(-5)); // Output: negative
console.log(checkNumber(0));  // Output: zero

function getDetails(name: string, age: number): [string, number, string] {
    const greeting = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
}

const details = getDetails("Alice", 25);
console.log(details);

type Person = {
    name: string;
    age: number;
};

function createPerson(name: string, age: number): Person {
    return {
        name: name,
        age: age
    };
}

const newPerson = createPerson("Obi-Wan", 35);
console.log(newPerson);

// Use 'as' to assert the type
const userInput = document.getElementById("user-email") as HTMLInputElement;

if (userInput) {
    userInput.value = "hello@galaxy.com";
}

function getAction(role: string): string {
    switch (role) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
}

// Overload signatures
function greet(): string;
function greet(name: string): string;

// Implementation
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    }
    return "Hello there!";
}

console.log(greet());        // "Hello there!"
console.log(greet("Yoda"));  // "Hello, Yoda!"

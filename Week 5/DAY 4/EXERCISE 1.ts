type    person = { name: string; age: number };
type Address = { street: string; city: string };

// Combine them
type PersonWithAddress = Person & Address;

const user: PersonWithAddress = {
    name: "Leia Organa",
    age: 19,
    street: "Royal Palace",
    city: "Alderaan"
};

function describeValue(value: number | string): string {
    if (typeof value === "number") {
        return "This is a number";
    } else {
        return "This is a string";
    }
}

let someValue: any = "I am a hidden string";

// Casting any to string
let strLength: number = (someValue as string).length;

console.log(strLength);

function getFirstElement(arr: (number | string)[]): string {
    // Asserting that the first element is a string
    return arr[0] as string;
}

console.log(getFirstElement(["Star", 1, "Wars"])); // "Star"

function logLength<T extends { length: number }>(item: T): void {
    console.log(`Length is: ${item.length}`);
}

logLength("Hello"); // Works (string has length)
logLength([1, 2, 3]); // Works (array has length)
// logLength(10); // Error: number does not have a length property

type Person = { name: string; age: number };
type Job = { position: "Manager" | "Developer"; department: string };

type Employee = Person & Job;

function describeEmployee(emp: Employee): string {
    // Narrowing based on a specific literal value
    if (emp.position === "Manager") {
        return `${emp.name} manages the ${emp.department} department.`;
    } else {
        return `${emp.name} is a developer in ${emp.department}.`;
    }
}

const dev: Employee = { name: "Luke", age: 22, position: "Developer", department: "X-Wing" };
console.log(describeEmployee(dev));

function formatInput<T extends { toString(): string }>(input: T): string {
    // We assert that the result of toString() is the string we want to format
    const result = (input as T).toString();
    return `Formatted: ${result.toUpperCase()}`;
}

console.log(formatInput(123)); // "Formatted: 123"
console.log(formatInput(true)); // "Formatted: TRUE"
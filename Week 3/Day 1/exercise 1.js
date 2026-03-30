const people = ["Greg", "Mary", "Devon", "James"];

// 1. Remove "Greg"
people.shift(); 

// 2. Replace "James" with "Jason"
people[people.indexOf("James")] = "Jason";

// 3. Add your name to the end
people.push("Alex"); 

// 4. Console.log Mary's index
console.log(people.indexOf("Mary")); // 0 (since Greg was removed)

// 5. Slice copy (Not including "Mary" or "Alex")
// Current state: ["Mary", "Devon", "Jason", "Alex"]
// Slice starts at index 1 and stops BEFORE index 3
const peopleCopy = people.slice(1, 3);
console.log(peopleCopy); // ["Devon", "Jason"]

// 6. Index of "Foo"
console.log(people.indexOf("Foo")); 
// Why -1? Because the .indexOf() method returns -1 whenever the element is not found in the array.

// 7. Create variable 'last'
let last = people[people.length - 1];
console.log(last); // "Alex"

// 1. Iterate and log everyone
for (let person of people) {
    console.log(person);
}

// 2. Iterate and exit after "Devon"
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}

const colors = ["blue", "green", "black", "purple", "silver"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    let suffix = (i < 3) ? suffixes[i] : suffixes[4];
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}

let number;

// We use a 'do...while' loop because we want to ask at least once.
do {
    number = prompt("Please enter a number:");
    console.log(typeof number); // This will be "string" initially
    number = Number(number);    // Convert to actual number for comparison
} while (number < 10);

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 1. Number of floors
console.log(building.numberOfFloors);

// 2. Apartments on floor 1 and 3
console.log(`Floors 1 & 3: ${building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor}`);

// 3. Second tenant (Dan) and his rooms
const secondTenant = building.nameOfTenants[1]; // "Dan"
const danRooms = building.numberOfRoomsAndRent.dan[0];
console.log(`${secondTenant} has ${danRooms} rooms.`);

// 4. Rent check
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if ((sarahRent + davidRent) > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

const family = {
    father: "John",
    mother: "Jane",
    son: "Billy"
};

for (let key in family) {
    console.log("Key:", key);
}

for (let key in family) {
    console.log("Value:", family[key]);
}

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
}

let sentence = "";
for (let key in details) {
    sentence += `${key} ${details[key]} `;
}
console.log(sentence.trim());

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let acronym = [];

for (let name of names) {
    acronym.push(name[0]); // Get first letter
}

// Sort alphabetically and join into a string
console.log(acronym.sort().join("")); // "ABJKPS"0
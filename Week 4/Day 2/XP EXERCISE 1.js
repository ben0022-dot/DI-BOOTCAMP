//analyze the code below. what will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// The output of the code will be:
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//Display student information
//Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'
function displayStudentInfo(student) {
    const {first, last} = student;
    return `Your full name is ${first} ${last}`;
}

const student = {
    first: 'Elie',
    last: 'Schoppik'
};

console.log(displayStudentInfo(student));


//Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }
const {user1, user2, user3} = users;
console.log(user1, user2, user3);
//The output of the code will be:
// 18273 92833 90315

//Modify the outcome of part 1, by multipling the user’s ID by 2.
const modifiedUsers = {
    user1: user1 * 2,
    user2: user2 * 2,
    user3: user3 * 2
};

console.log(modifiedUsers);
// The output of the code will be:
// { user1: 36546, user2: 185666, user3: 180630 }
//Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

//Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
//Analyze the options below. Which constructor will successfully extend the Dog class?
//Option 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
}

//Option 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

//Option 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
}

//The correct option is Option 2. It correctly calls the super() method to initialize the name property inherited from the Dog class before setting the size property specific to the Labrador class.
//Evaluate these (ie True or False)

JSON.stringify([2]) === JSON.stringify([2])
JSON.stringify({}) === JSON.stringify({})
//What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)
//Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin etc …
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

//CrCreate a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.
//Create a farmerCow object that is an instance of the class Mammal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
//For example: Moooo I'm a cow, named Lily and I'm brown and white in color.

class Mammal extends Animal {
  sound(animalSound) {
    return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color} in color. I make the sound ${animalSound}`;
  }
}

const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('moos'));

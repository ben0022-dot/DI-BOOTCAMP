//Write a JavaScript program to find the sum of all elements in an array.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(`The sum of the array is: ${sum}`); 
// Output: The sum of the array is: 15

//Write a JavaScript program to find the maximum number in an array.
const maxNumber = numbers.reduce((max, current) => {
    return current > max ? current : max;
}, numbers[0]);

console.log(`The maximum number in the array is: ${maxNumber}`); 
// Output: The maximum number in the array is: 5
//Write a JavaScript program to remove duplicates from an array.
const arrayWithDuplicates = [1, 2, 3, 4, 5, 2, 3, 1];
const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(`The array with duplicates removed is: ${uniqueArray}`); 
// Output: The array with duplicates removed is: [1, 2, 3, 4, 5]
//Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
const arrayWithFalsyValues = [NaN, 0, 15, false, -22, '', undefined, 47, null];
const filteredArray = arrayWithFalsyValues.filter(Boolean);
console.log(`The array with falsy values removed is: ${filteredArray}`); 
// Output: The array with falsy values removed is: [15, -22, 47]
//Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
function repeatString(str, n = 1) {
    return str.repeat(n);
}
console.log(repeatString("Ha, ", 3)); 
// Output: "Ha, Ha, Ha, "
//turtle & rabbit
const startline= "     ||<- Start line";
const turtle = "     ||🐢";
const rabbit = "     ||🐇";

console.log(startline);
console.log(turtle);
console.log(rabbit);
// Output:
//      ||<- Start line
//      ||🐢
//      ||🐇
//what happens whenyou run turtle =turtle.trim().padStart(9," ")?
// The turtle string will be trimmed of any leading and trailing whitespace (though in this case, there is none), and then it will be padded at the start with spaces until the total length of the string is 9 characters. Since the original turtle string is already 9 characters long (including the spaces), it will remain unchanged. The output will still be "     ||🐢".
turtle = turtle.trim().padStart(9, " ");
console.log(turtle);
// Output: "     ||🐢"
//What happens when you run rabbit = rabbit.trim().padStart(9," ")?
// Similar to the turtle string, the rabbit string will be trimmed of any leading and trailing whitespace (though in this case, there is none), and then it will be padded at the start with spaces until the total length of the string is 9 characters. Since the original rabbit string is already 9 characters long (including the spaces), it will remain unchanged. The output will still be "     ||🐇".
rabbit = rabbit.trim().padStart(9, " ");
console.log(rabbit);
// Output: "     ||🐇"
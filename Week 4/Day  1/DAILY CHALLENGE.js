const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

// 1. Create an array of usernames with an exclamation point using forEach
const usernames = [];
gameInfo.forEach((user) => {
    usernames.push(`${user.username}!`);
});
console.log(usernames); 
// Output: ["john!", "becky!", "susy!", "tyson!"]


// 2. Create an array of usernames with a score bigger than 5 using forEach
const winners = [];
gameInfo.forEach((user) => {
    if (user.score > 5) {
        winners.push(user.username);
    }
});
console.log(winners); 
// Output: ["becky", "susy"]


// 3. Find and display the total score of the users
// Using reduce() is the best "advanced" method for calculating a single total
const totalScore = gameInfo.reduce((accumulator, user) => {
    return accumulator + user.score;
}, 0);

console.log(`The total score is: ${totalScore}`); 
// Output: The total score is: 71

// `usernames` is already declared above with forEach, no redeclaration needed.
// const usernames = gameInfo.map(user => `${user.username}!`);

// `winners` is already declared above with forEach, no redeclaration needed.   
// const winners = gameInfo.filter(user => user.score > 5).map(user => user.username);  
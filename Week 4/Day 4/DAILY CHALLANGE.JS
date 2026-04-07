//Create two functions. Each function should return a promise.
//The first function, "makeAllCaps()", should take an array of words as an argument and capitalize them.
//Esle,reject the promise with a reason.
function makeAllCaps(words)
{
  return new Promise((resolve, reject) => { 
    if (!Array.isArray(words)) {
      reject("Input is not an array");
    } else {
      resolve(words.map(word => word.toUpperCase()));
    }
  });
}
//The second function, "sortWords()", should take an array of words as an argument and sort them in alphabetical order.
//If the array contains anything but strings, reject the promise with a reason.
function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(words)) {
      reject("Input is not an array");
    } else if (words.some(word => typeof word !== "string")) {
      reject("Array contains non-string elements");
    } else {
      resolve(words.sort());
    }
  });
}
//Call the "makeAllCaps()" function, then the "sortWords()" function, and log the result to the console. Handle any errors that may occur.
makeAllCaps(["apple", "banana", "cherry"])
  .then(capitalizedWords => sortWords(capitalizedWords))
  .then(sortedWords => console.log(sortedWords))
  .catch(error => console.error(error));


  const morse = '{"0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.", "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--..""."",",": "--..--", "?": "..--..", "!": "-.-.--", " ": "/""@""(": ".--.-."}';
const morseCode = JSON.parse(morse);
function toMorseCode(str) {
  return new Promise((resolve, reject) => {
    const morseStr = str.toLowerCase().split("").map(char => {
      if (morseCode[char]) {
        return morseCode[char];
      } else {
        reject("Invalid character");
      }
    });
    resolve(morseStr.join(" "));
  });
}
toMorseCode("Hello World")
    .then(morse => console.log(morse))
    .catch(error => console.error(error));
    
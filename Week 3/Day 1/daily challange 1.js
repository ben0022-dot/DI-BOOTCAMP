// 1. Create the variable sentence
let sentence = "The movie is not that bad, I like it";

// 2. Find the position of the word "not"
// .indexOf() returns the starting index of the substring
let wordNot = sentence.indexOf("not");

// 3. Find the position of the word "bad"
let wordBad = sentence.indexOf("bad");

// 4. Check the condition
// If "not" and "bad" exist, and "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    
    /* We want to replace everything from the start of "not" 
       to the end of "bad". 
       - wordNot is the start.
       - (wordBad + 3) is the end because "bad" is 3 letters long.
    */
    
    // We can use .slice() to grab the parts we want to keep
    let firstPart = sentence.slice(0, wordNot);
    let secondPart = sentence.slice(wordBad + 3);
    
    console.log(firstPart + "good" + secondPart);

} else {
    // If the conditions aren't met, log the original sentence
    console.log(sentence);
}


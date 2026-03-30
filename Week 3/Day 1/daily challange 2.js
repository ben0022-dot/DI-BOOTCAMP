console.log("--- One Loop Method ---");

let stars = "";

// Loop 6 times to create 6 rows
for (let i = 1; i <= 6; i++) {
    // Add one star and a space to the existing string
    stars += "* "; 
    // Print the current state of the string
    console.log(stars);
}

console.log("--- Nested Loop Method ---");

// The outer loop handles the number of rows (1 to 6)
for (let i = 1; i <= 6; i++) {
    let rowContent = "";
    
    // The inner loop adds stars based on which row we are currently on.
    // If we are on row 3 (i=3), this loop runs 3 times.
    for (let j = 1; j <= i; j++) {
        rowContent += "* ";
    }
    
    // Print the full row after the inner loop finishes its work
    console.log(rowContent);
}
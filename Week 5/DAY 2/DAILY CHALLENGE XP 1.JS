/**
 * Validates if the 'value' matches any of the types listed in 'allowedTypes'
 * @param value - The variable we want to check
 * @param allowedTypes - An array of strings like ["string", "number", "boolean"]
 * @returns boolean
 */
function validateUnionType(value: any, allowedTypes: string[]): boolean {
    // We use typeof to get the string representation of the value's type
    const valueType = typeof value;

    // We check if that string exists within our allowedTypes array
    return allowedTypes.some(type => type === valueType);
}

// --- Demonstration ---

const myID: any = 101;
const myName: any = "Artoo-Detoo";
const isDroid: any = true;

// 1. Validate a number against [string, number]
console.log(validateUnionType(myID, ["string", "number"])); // Output: true

// 2. Validate a string against [string, number]
console.log(validateUnionType(myName, ["string", "number"])); // Output: true

// 3. Validate a boolean against [string, number]
console.log(validateUnionType(isDroid, ["string", "number"])); // Output: false (Boolean is not allowed)

// 4. Validate against a broader set
console.log(validateUnionType(isDroid, ["string", "number", "boolean"])); // Output: true

function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;

    for (const type of allowedTypes) {
        if (valueType === type) {
            return true; // Match found, exit early
        }
    }
    return false; // No matches found after checking the whole list
}
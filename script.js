function analyzeString(str) {
    return {
        length: str.length,
        lowercase: str.toLowerCase(),
        uppercase: str.toUpperCase(),
        containsJavaScript: str.toLowerCase().includes("javascript"),
        countOfA: (str.match(/a/gi) || []).length
    };
}

// Example usage:
const result = analyzeString("Hello JavaScript, this is an Amazing test!");
console.log(result);

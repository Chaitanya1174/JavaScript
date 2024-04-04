// console.log(2 > 1); // op: true
// console.log("2" > 1); // op: true because js converts string in number before comparison
// console.log(2 >= 1); // op: true

// Irregularities in comparison
    console.log(null > 0); // op: false
    console.log(null < 0); // op: false
    console.log(null = 0); // op: Error

// These operations are different than plain ones
    console.log(null == 0); // op: false
    console.log(null <= 0); // op: true
    console.log(null >= 0); // op: true

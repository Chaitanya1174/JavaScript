// 'for of' loop
    // arr=Array.from("Hello world!")
    arr = "hello world!";
    index = 0;
    // console.log(arr.slice(0,3));
    for (const iterator of arr) {
        // console.log(arr.slice(0,index));
        index = index + 1;
    }
// Map = map only registers unique values and does not recognise duplicate values
    let myMap = new Map();
    myMap.set('in', 'india');
    myMap.set('ur', 'urgentina');
    myMap.set('ur', 'urgentina');
    // console.log(myMap);
    for (const iterator of myMap) {
        // console.log(iterator);
    }
// for in loop on objects
let obj = {
    username: "chaitanya",
    password: "aabbcc",
    isLoggedIn: "false"
};
// for (const iterator of obj) { // op: error because objects are not iterable by for of loop
//  console.log(iterator);
// }
for (const smth in obj) {
    // console.log(smth); // prints keys
}
for (const smth in obj) {
    // console.log(obj[smth]); // prints values
}
// for in loop on Map
for (const key in myMap) {
    // console.log(key);   // op: no output because maps are not iterable by forin loop
}
// for in loop on array
arr = Array.from("CHAVAN");
for (const key in arr) {
    //    console.log(key);      // prints index
}
arr = Array.from("CHAVAN");
for (const ind in arr) {
    //    console.log(arr[ind]);      // prints objects inside array
}

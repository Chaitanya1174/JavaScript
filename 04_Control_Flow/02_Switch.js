let email="chaitanya@gmail.com";
// emails= email.includes("gmail.com")
// (function GorY() {
//     if (email.includes("@gmail.com")) {
//         newEmail= "gmail"
//     } else {
//         newEmail= "yahoo"
//     }
// return newEmail}
// )(email)
switch (email) {
    case email.includes("gmail.com"): // why can't I use this function inside the case?
        console.log("user is from gmail");
        break;
    case email.includes("gmail.com"):
        console.log("user is from yahoo");
        break;

    default:
        console.log("none of the above worked");
        break;
}
// let score= 100;
// switch (score) {
//     case 10:
//         console.log("10");
//         break;

//     default:
//         console.log("20");
//         break;
// }
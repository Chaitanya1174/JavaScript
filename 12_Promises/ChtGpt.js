// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done!");
//   }, 3000);
// });

// console.log(promise); // 👉 Promise { <pending> }

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello...");
  }, 2000);
});

promise.then(()=>{console.log(promise)})

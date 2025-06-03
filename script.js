//Asynchronus javascript
// console.log("First task");
// console.log("second task");
// console.log("third task");
// console.log("forth task");
// // for (let i = 0; i < 100; i++) {
// //     console.log("fifth task");
   
// // }
// const callee = () => {
//     for (let i = 0; i < 10000; i++) {
//     console.log("fifth task");
   
// }
// }
// function call() {
//    setTimeout(() => {
//     callee();
//   }, 1000);
// }
// call();
// console.log("sixth task");

// javascript promises
// const promise = new Promise((resolve, reject) => {
//     const success = true; // Simulate success or failure
//     if (success) {
//         resolve("Operation was successful!");
//     } else {
//         reject("Operation failed.");
//     }

// fetch returns a promise

const fetchData = () => {
    const check = fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error("Error fetching data:", err));
}
fetchData();

//Ecma script 6

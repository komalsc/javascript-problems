// JavaScript — 20 Most Important Coding Questions
// 32. Find the longest word in a string
// const str = "I am learning JavaScript";

// const words = str.split(" ");
// let longest = "";

// for (let word of words) {
//   if (word.length > longest.length) {
//     longest = word;
//   }
// }

// console.log(longest);
// // JavaScript

// Logic: Compare the length of every word and store the longest one.

// 33. Reverse each word in a sentence
// const str = "hello world";

// const words = str.split(" ");
// let result = [];

// for (let word of words) {
//   let reverse = "";

//   for (let i = word.length - 1; i >= 0; i--) {
//     reverse += word[i];
//   }

//   result.push(reverse);
// }

// console.log(result.join(" "));
// // olleh dlrow
// 34. Check whether two strings are anagrams
// const str1 = "listen";
// const str2 = "silent";

// if (str1.length !== str2.length) {
//   console.log(false);
// } else {
//   let count = {};

//   for (let char of str1) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   for (let char of str2) {
//     count[char] = (count[char] || 0) - 1;
//   }

//   let result = true;

//   for (let key in count) {
//     if (count[key] !== 0) {
//       result = false;
//     }
//   }

//   console.log(result);
// }

// // true

// Logic: Both strings should contain the same characters with the same frequency.

// 35. Move all zeros to the end
// const arr = [0, 1, 0, 3, 12];

// let result = [];
// let zeroCount = 0;

// for (let num of arr) {
//   if (num === 0) {
//     zeroCount++;
//   } else {
//     result.push(num);
//   }
// }

// for (let i = 0; i < zeroCount; i++) {
//   result.push(0);
// }

// console.log(result);
// // [1, 3, 12, 0, 0]
// 36. Find a pair whose sum equals target
// const arr = [2, 7, 11, 15];
// const target = 9;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {

//     if (arr[i] + arr[j] === target) {
//       console.log(arr[i], arr[j]);
//     }

//   }
// }

// // 2 7

// Important: This is a very common practical coding question.

// 37. Find all pairs whose sum equals target
// const arr = [1, 2, 3, 4, 5];
// const target = 6;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {

//     if (arr[i] + arr[j] === target) {
//       console.log([arr[i], arr[j]]);
//     }

//   }
// }

// // [1, 5]
// // [2, 4]
// 38. Find the intersection of two arrays
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

// let result = [];

// for (let num of arr1) {
//   if (arr2.includes(num)) {
//     result.push(num);
//   }
// }

// console.log(result);
// // [3, 4]
// 39. Find the union of two arrays
// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];

// let result = [];

// for (let num of arr1) {
//   if (!result.includes(num)) {
//     result.push(num);
//   }
// }

// for (let num of arr2) {
//   if (!result.includes(num)) {
//     result.push(num);
//   }
// }

// console.log(result);
// // [1, 2, 3, 4, 5]
// 40. Find the most frequent element
// const arr = [1, 2, 3, 2, 2, 4, 3];

// let count = {};
// let max = 0;
// let result = null;

// for (let num of arr) {
//   count[num] = (count[num] || 0) + 1;

//   if (count[num] > max) {
//     max = count[num];
//     result = num;
//   }
// }

// console.log(result);
// // 2
// 41. Find the longest substring without repeating characters
// const str = "abcabcbb";

// let current = "";
// let longest = "";

// for (let char of str) {

//   if (current.includes(char)) {
//     current = current.slice(current.indexOf(char) + 1);
//   }

//   current += char;

//   if (current.length > longest.length) {
//     longest = current;
//   }
// }

// console.log(longest);
// // abc

// This is a slightly higher-level question, but worth practicing.

// 42. Find the highest-paid employee
// const employees = [
//   { name: "A", salary: 30000 },
//   { name: "B", salary: 50000 },
//   { name: "C", salary: 40000 }
// ];

// let highest = employees[0];

// for (let employee of employees) {
//   if (employee.salary > highest.salary) {
//     highest = employee;
//   }
// }

// console.log(highest);

// // { name: "B", salary: 50000 }
// 43. Find employees whose salary is greater than 40,000
// const employees = [
//   { name: "A", salary: 30000 },
//   { name: "B", salary: 50000 },
//   { name: "C", salary: 45000 }
// ];

// let result = [];

// for (let employee of employees) {
//   if (employee.salary > 40000) {
//     result.push(employee);
//   }
// }

// console.log(result);

// // B and C

// This type of array-of-objects manipulation is very useful for frontend interviews.

// 44. Group users by age
// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 21 },
//   { name: "C", age: 20 },
//   { name: "D", age: 21 }
// ];

// let result = {};

// for (let user of users) {

//   if (!result[user.age]) {
//     result[user.age] = [];
//   }

//   result[user.age].push(user.name);
// }

// console.log(result);

// // {
// //   20: ["A", "C"],
// //   21: ["B", "D"]
// // }
// 45. Remove duplicate objects based on ID
// const users = [
//   { id: 1, name: "Komal" },
//   { id: 2, name: "Rahul" },
//   { id: 1, name: "Komal" },
//   { id: 3, name: "Amit" }
// ];

// let result = [];
// let ids = [];

// for (let user of users) {

//   if (!ids.includes(user.id)) {
//     ids.push(user.id);
//     result.push(user);
//   }

// }

// console.log(result);

// // [
// //   { id: 1, name: "Komal" },
// //   { id: 2, name: "Rahul" },
// //   { id: 3, name: "Amit" }
// // ]
// 46. Convert array of objects into object using ID
// const users = [
//   { id: 1, name: "Komal" },
//   { id: 2, name: "Rahul" },
//   { id: 3, name: "Amit" }
// ];

// let result = {};

// for (let user of users) {
//   result[user.id] = user;
// }

// console.log(result);

// Output:

// {
//   1: { id: 1, name: "Komal" },
//   2: { id: 2, name: "Rahul" },
//   3: { id: 3, name: "Amit" }
// }
// 47. Find the difference between two arrays
// const arr1 = [1, 2, 3, 4];
// const arr2 = [2, 4];

// let result = [];

// for (let num of arr1) {
//   if (!arr2.includes(num)) {
//     result.push(num);
//   }
// }

// console.log(result);

// // [1, 3]
// 48. Rotate an array by one position
// const arr = [1, 2, 3, 4, 5];

// let last = arr[arr.length - 1];

// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }

// arr[0] = last;

// console.log(arr);

// // [5, 1, 2, 3, 4]

// This is good for testing whether you understand array indexes and loops.

// 49. Find the longest consecutive sequence
// const arr = [1, 2, 3, 5, 6, 7, 10];

// let count = 1;
// let max = 1;

// for (let i = 1; i < arr.length; i++) {

//   if (arr[i] === arr[i - 1] + 1) {
//     count++;
//   } else {
//     count = 1;
//   }

//   if (count > max) {
//     max = count;
//   }
// }

// console.log(max);

// // 3

// Because 5, 6, 7 is the longest consecutive sequence.

// 50. Implement a simple debounce function

// This one is especially important for a React/frontend developer.

// function debounce(fn, delay) {

//   let timer;

//   return function () {

//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn();
//     }, delay);

//   };
// }

// const search = debounce(() => {
//   console.log("API called");
// }, 500);

// search();
// search();
// search();

// Only the final call executes after the user stops calling the function for 500ms.

// Interview explanation:

// "Debouncing delays function execution until the user stops triggering the function for a specific amount of time. It is commonly used in search boxes to avoid making an API call on every keystroke."
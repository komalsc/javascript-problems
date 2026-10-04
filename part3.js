//21 Count vowels and consonants in a string.
//22 Count the frequency of every character.
//23 Find the first non-repeating character.
//24 Find the first repeating character.
//25 Remove duplicate characters from a string.
//26 Find the second-smallest number.
//27 Find the average of an array.
//28 Count even and odd numbers.
//29 Find positive, negative and zero values.
//30 Find the missing number from 1...n.
//31 Find common elements between two arrays.


// let str = "hello";

// let vowels = 0;
// let consonants = 0;

// for (let i = 0; i < str.length; i++) {
//     let ch = str[i];

//     if (
//         ch === "a" ||
//         ch === "e" ||
//         ch === "i" ||
//         ch === "o" ||
//         ch === "u"
//     ) {
//         vowels++;
//     } else {
//         consonants++;
//     }
// }

// console.log("Vowels:", vowels);
// console.log("Consonants:", consonants);


// let str = "swiss";
// function freq(str){
//     let frequency={}

//     for(let ch of str){
//         frequency[ch] = (frequency[ch] || 0) +1
//     }
//   return frequency
// }
// console.log(freq(str))


// let str = "swiss";
// function freq(str){
//     let frequency={}

//     for(let ch of str){
//         frequency[ch] = (frequency[ch] || 0) +1
//     }
//     for(let ch of str){
//         if(frequency[ch] === 1){
//             return ch
//         }
//     }
// }
// console.log(freq(str))

// let str = "miiswiss";
// function freq(str){
//     let frequency={}

//     for(let ch of str){
//         frequency[ch] = (frequency[ch] || 0) +1
//     }
//     for(let ch of str){
//         if(frequency[ch] !== 1){
//             return ch
//         }
//     }
// }
// console.log(freq(str))

// const str="hheelloo";

// function remdup(str){
//     let dup=[];

//     for(ch of str){
//         console.log(ch);
//         if(!dup.includes(ch)){
//             dup.push(ch)
//         }
//     }
//     return dup.join("")
// }
// console.log(remdup(str))

// const arr =[12,11,14,54,43,77]
// function secsmal(arr){
//     let firsm= Infinity;
//     let secsm = Infinity;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < firsm){
//             secsm = firsm;
//             firsm = arr[i]
//         }else if(arr[i] < secsm && arr[i] !== firsm){
//             secsm = arr[i]
//         }
//     }
//   return secsm
// }
// console.log(secsmal(arr))

// const arr= [1,2,3,4]    //2.5

// function avg(arr){
//     let sum=0;

//     for(let i=0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     return sum/arr.length
// }
// console.log(avg(arr))


// let arr =[1,2,3,4,5,6,7,8];

// function count(arr){
//     let even=0;
//     let odd=0;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2===0){
//              even++
//         }else{
//             odd++
//         }
//     }
//     return {
//         even: even,
//         odd: odd
//     }
// }
// console.log(count(arr))

// const arr = [10, -5, 0, 20, -8, 0];
// function findout(arr){
//     let pos=[];
//     let neg=[];
//     let zer=[];

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > 0){
//             pos[pos.length]=arr[i]
//         }else if(arr[i] < 0){
//             neg[neg.length]=arr[i]
//         }else{
//             zer[zer.length]= arr[i]
//         }
//     }
//    return {
//      pos,
//      neg,
//     zer
//    }
// }
// console.log(findout(arr))

// const arr = [1,2,3,5];
// function findmis(arr, start,end){
//     let expected=0
//     for(let i=start; i<=end; i++){
//         expected += i
//     }
//     let actual=0
//     for(let i=0; i<arr.length; i++){
//        actual += arr[i]
//     }

//     return expected - actual
// }
// console.log(findmis(arr,1,5))

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

// function comele(arr1,arr2){
//     let  common=[];

//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 common[common.length] = arr1[i]
//             }
//         }
//     }
//     return common
// }
// console.log(comele(arr1, arr2))
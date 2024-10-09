//array

const myArr=[0,2,3,4,5]
// const myHeroes=["shaktimaan","spiderman","gogomaan"]
// console.log(myArr[3]);

// //Array methods
// myArr.push(6)
// myArr.push(7)
// //console.log(myArr);

// myArr.pop() //it remopves the last value
// console.log(myArr);

// myArr.unshift(9) //it adds ther values to the start
// myArr.shift()
// console.log(myArr);

// //console.log(myArr.includes(9)); //it gives true/false
// //console.log(myArr.indexOf(19));

// const newArr=myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


//slice,splice
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);


const myn2=myArr.splice(1,3) //splice manipulates the original array
console.log(myn2);
console.log("C",myArr);




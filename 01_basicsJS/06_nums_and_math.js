// const score=400
// console.log(score);

// const balance=new Number(100.0) //explicitly define number
// console.log(balance);



// console.log(balance.toString().length); //it converts to string
// console.log(balance.toFixed(2)); //it fixes the decimal value

// const otherNumber=1123.8966
// console.log(otherNumber.toPrecision(3));

// const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));

//***************************Maths******************************** */
// console.log(Math);
// console.log(Math.abs(-4));  //It changes negative values to positive
// console.log(Math.round(6.3)); //It rounds off a number
// console.log(Math.ceil(6.3));  //It rounds off a number to the top value,if it is even a bit larger than 6
// console.log(Math.floor(6.9)); //It rounds off a number to the lower value,even if it is 6.9
// console.log(Math.min(4,3,6,8));
// console.log((Math.max(4,3,6,8)));

console.log(Math.random()); //It always returns an value between 0 and 1
console.log((Math.random()*10)+1); //It returns a random number between 0 and 100


const min=10
const max=20

Math.random()*(max-min+1)+min //+1 is added to avoid 0 values
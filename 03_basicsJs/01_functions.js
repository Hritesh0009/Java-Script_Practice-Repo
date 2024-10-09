// function sayMyName(){
//     console.log("H");
//     console.log("R");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// //sayMyName()
// //sayMyname is the function reference
// //sayMyName() is the execution

// // function addTwoNumbers(number1,number2) //when fnctions definition is created parameters are passed here
// // {
// //     console.log(number1+number2);
// // }

// function addTwoNumbers(number1,number2) //when fnctions definition is created parameters are passed here
// {
//     // let result=number1+number2
//     // return result
//     // console.log("Hritesh"); //it is rule that once return keywird is wwritten the function doesnt executes anything

//     //we can also write thre above as
//     return number1+number2
// }
// const result=addTwoNumbers(3,5) //when function is called arguments are passed into the functions
// console.log("Result :",result);



// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("hritesh"));
// console.log(loginUserMessage()); //if no values are passed it shows undefined

// //or

// function loginUserMessage(username="sam"){
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("hritesh"));
// console.log(loginUserMessage("Hritesh")); //the value overwrites the default value  




///////////////////////IMPPPPPPPPPPPPPP/////////////////



// function calculateCartPrice(val1,val2,...num1)//rest operator is used here //we can also use reest operator to insert all values into the num1 varibal eas an array
// {
//     return num1 //returns the value of num1 so only num1 is printed only in the console
// }
// console.log(calculateCartPrice(200,400,500,2000))  //first two values are assigned to val1,val2 rest to num1

const user={
    username:"hritesh",
    price:99
}
function handleObject(anyObject) 
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
   }
//handleObject(user) //usually check type safety in this type of methods


 //we can also directly pass arguments through below method
/*handleObject({
    username:"hritesh",
    price:100
})
*/

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600])); //we can also pass directly arguments
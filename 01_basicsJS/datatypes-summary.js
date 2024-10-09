//Two datatYpes
//primitive and (nonprimitive datatypes/reference datatypes)

//!-Primitive Datatypes--(Call_by_value Datatypes)
//primitive datatypes are passed by value
//primitive datatypes are stored in stack
//primitive datatypes are not passed by reference
//7 types:String,Number,Boolean,null,undefined,Symbol(Symbol is used to make an value unique),BigInt

const score=100
const scorevalue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;   //we can also write it as let userEmail=undefined;

//Symbol
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);


const bigNumber=432423472374n
//console.log(bigNumber);

//Non Primitive Datatypes--(Call_by_reference Datatypes)
//!-Reference(Non-Primitive)
//Reference datatypes are passed by reference
//Reference datatypes are stored in heap
//Reference datatypes are passed by reference
//types:object,Array,Functions


/*JavaScript is a dynamic language*/

//const heroes=["shaktimaan","naagraaj","doga"]


//values inside curly braces are objects
let myObj={
    name:"hritesh",
    age:18,
}
//objects are reference datatypes

const myFunction=function()
{
   console.log("Hello world");
}

myFunction();

console.log(typeof anotherId);




//**************************MEMory************************************* */

//stack(primitive)    ,     Heap (non_primitive)

let myYoutubename="hriteshmega.com"
let anothername=myYoutubename
anothername="chaiaurcoffee"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    userEmail:"user@oogle.com",
    userPassword:"password123",
}

let userTwo=userOne
console.table([userTwo]);   //we access objects by using dot

userTwo.userEmail="ModifiedTwo@google.com"

console.log(userOne.userEmail);
console.log(userTwo.userEmail);




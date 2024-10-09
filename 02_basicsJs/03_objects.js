//singleton
//Object.create //constructor method

const mySym=Symbol("key1")  //defining a symbol
//object literals
const JsUser={
    name:"John",
    "full name":"hritesh kumar",
    [mySym]:"Key1",
    age:18,
    location:"Jaipur",
    email:"hritesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["email"]); //if the data in object is written in string we dont have a chance to write it with(.)
console.log(JsUser[mySym]) //print a symbol

JsUser.email="hitesh@chatgpt.com" //It is used to cahnge the obhject values
//Object.freeze(JsUser) //It freezes the object values
JsUser.email="hitesh@microsoft.com"

JsUser.greeting=function(){
    console.log(`Hello!JS user,${this.name}`);
    
}
JsUser.greeting() //calling the function
console.log(JsUser.greeting());
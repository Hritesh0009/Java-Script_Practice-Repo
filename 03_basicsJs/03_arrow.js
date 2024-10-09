// const user={ //basic object is created
//     username:"hitesh",
//     price:999,

// welcomeMessage: function() {    
//     //method to login and it is made a function 
// {
//     console.log(`${this.username},welcome to website`);   //this keyword is used to refer to the current context
//     console.log(this); //it shows all the current contexts
    
// }
// }
// }

// // user.welcomeMessage()
// // user.username="sam" //we changed the context here
// // user.welcomeMessage()

// //console.log(this); //it gives empty object {}

// function chai()
// {
//     let username="HArshit"
//     console.log(this.username); //this context works for objct only not inside fuctions
// }
// chai()


// const chai=function()
// {
//     let username="HArshit"
//     console.log(this.username); 
// }
// chai()

//new method in es6
const chai=()=>{
    let username="HArshit"
    console.log(this); 
}
//chai()

// const addTwo=(num1,num2)=>{    //Basic arrow functionn
//     return num1+num2   //if curly braces used we must write return keyword
// }

//const addTwo=(num1,num2)=>num1+num2  //can also be written in this way
                                        //if paranthesis used we need not to write return keyword
                                        //implicit function


const addTwo=(num1,num2)=>({username:"Hritesh"}) //to return an Object  
                                                    //to return an object we must write it within paranthesiss

console.log(addTwo(3,4));


const myArray=[2,4,5,6,7,8]
console.log(myArray);

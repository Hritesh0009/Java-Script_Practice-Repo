const userEmail=""

// if(userEmail)
// {
//     console.log("Got user email") //since value is there inside the userEmail object it is assumed to be true
// }else{
//     console.log("dont have user email"); //if value is not present it is assumed to be false
// }

// falsy values
// =====> false,0,-0,BigInt 0n,"",null,undefined,NaN  

//truthy values
//====> "0",'false',," ",[],{},function(){}        //even a space between" " is considered as truthy values

// if(userEmail.length===0){
//     console.log("Array is Empty")
// }else{
//     console.log("Array is not Empty")
// }

const emptyObj={}

if(Object.keys(emptyObj).length===0){   // to check if a object is empty or not
    console.log("Object is empty");
}

//Nullish Coalescing operator(??) :to handle null or undefined

// let val1;
// // val1=5??10
// // val1=null??10
// // val1=undefined??15
// val1=null?10??15

// console.log(val1);




//Ternary operator

// condition?true:false

const iceTeaPrice=100
iceTeaPrice<=80?console.log("less than 80"): console.log("More than 80");



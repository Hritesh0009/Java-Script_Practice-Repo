//var c=300

// let a=300

// if(true){
//     let a=10
//     const b=20
//     var c=30 //
//     console.log("INNER:-",a);  //it is block scope
// }


//console.log(a);  //it will catch the global scope
// console.log(b);
// console.log(c);


function one(){
    const username="Hritesh"

    function two()
    {
        const website="youtube"
        //console.log(username); //inner functions can access outer function but outer function cannot access inner function
    }
    //console.log(website);  //it gives error
    //two()    
}
//one()

if(true){
    const username="hritesh"
    if(username==="Hritesh")
    {
        const website="youtube"
        //console.log(username+website);
    }
    //console.log(website); //it is out of scope
    }
//console.log(username);  //it is out of scope access

//******************************interesting********************************************************** */

function addOne(num){ //normal declaration of a function
    return num+1
}
addOne(5)

/////////////////////OR

const addTwo=function(){      //declaraing functions and holding them inside a varibale
    return num+2               //hoisiting
}
addTwo(5)
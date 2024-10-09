//Immediately invoked Function Expression(IIFE)

(function chai(){
    //it is a name IIFE as the function has a name
    console.log(`Db connected`);
    
})(); //to reduce gloval scope pollution we use iife 
    //() secnd paranthesis is for execution call
//in above we just wrapped the entire functioin in an () then we gave the () execution call


//we must use a ; in previous function to stop the execution of the previous code
( (name)=>{
    //it is a unnamed IIFE
    console.log(`BD connected to ${name}`);
})('hritesh')  
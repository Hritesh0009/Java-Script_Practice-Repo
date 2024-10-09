const coding=["js","ruby","java","python","cpp"]

coding.forEach( function (item){  //callback function doesnt have name
                                  //it is set on arrays so it is smart enough to iterate on all arrays it automatically executes and brings all arrray into the function body
    //console.log(item);
})

coding.forEach( (item)=>{   //callback functionm doesnt have name
    //console.log(item);
    
})

function printMe(item){
    //console.log(item);
    
}

//coding.forEach(printMe)  //give only the function referene as printMe dont call the fuinction as printMe() ,, it will do rest of the work


// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);     //it prints the compete array with index
    
// })

const myCoding=[
    {languagename:"javscript",
        "languagecode":"js"},
    {
        languagename:"ruby",
        "languagecode":"ruby"},
    {
        languagename:"java",
        "languagecode":"java"},
]


myCoding.forEach( (item)=>{
    //console.log(myCoding);  //it prints the complete array
    console.log(item.languagename);
    
})
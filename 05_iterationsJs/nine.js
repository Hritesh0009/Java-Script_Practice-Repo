 const myNums=[1,2,3,4]

// const mytotal=myNums.reduce(function (accumulator,currentvalue)
// {
//     console.log(`acc:${accumulator} and curr value:${currentvalue}`);
    
//     return accumulator+currentvalue   //both sums are stored in mytotal
// },0)   //initial value 0 goes to the accumulator

// console.log(mytotal);




//writing using arrow functions

// const mytotal=myNums.reduce( (acc,curr)=>acc+curr,0)    //it is same code as above but using arrow function
// console.log(mytotal);


//accumulator exanmple is shopping cart bill adding


const shoppingCart=[
    {
        itemname:"js course",
        price:100
    },
    {
        itemname:"Mobile course",
        price:1200
    }, 
    {
        itemname:"java course",
        price:1000
    },
    {
        itemname:"Python course",
        price:10012
    },
    {
        itemname:"numPy course",
        price:1800
    }
]


const priceToPay=shoppingCart.reduce( (acc,item)=>acc+item.price,0)   //every item denotes every object inside the array
console.log(priceToPay);

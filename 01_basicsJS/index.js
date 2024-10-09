let a=5;
console.log(a);

// console.log('Objects are');

//  let square=
//  {
//     length:1,
//     breadth:2,


//      draw: function() {
//          console.log('drawing square');
//      }
//  };
//  let square1=
//  {
//     length:2,
//     breadth:3,


//      draw: function() {
//          console.log('drawing square');
//      }
//  };
// //factory function
// function createSquare()
// {
//     let square=
//  {
//     length:1,
//     breadth:2,


//      draw: function() {
//          console.log('drawing square');
//      }
//  };
//  return square;
// }

// let squareObj1=createSquare();


//constructor function-->>Pascal Notation
//constructor function-initialise/define
// function Square(len,brd) {
//     this.length=len;
//     this.breadth=brd;
//     this.draw=function()
//     {
//         console.log('drawing square');
//     }
// }
// //object creation using constructor
// let squareObj1=new Square(4,6);
// squareObj1.color='red';
// console.log(squareObj1);

// let Square2=new function('length',
// `this.length=len;
// this.breadth=brd;
// this.draw=function()
// {
// console.log('drawing square');
// }`);

//object creation using Rectangle
//let rectangle={
   // length:2,
   // breadth:4
//};
//for-in loop
// for(let key in rectangle)
//     {
//         //keys are reflected through key variable
//         //values are reflected through rectangle key
//         console.log(key,rectangle[key]);
//     }

 
// console.log("Hello Hritesh it is your first js basic progrsm");
// let array=[1,2,'String',4,5,6,7,8,9,10];
// console.log(array);

// let array1=[1,2,3];
// let array2=[4,5,6];
// let combine=array1.concat(array2);
// console.log(combine);

// let sliced=combine.slice(2,4);
// console.log(sliced);  

// const joined=array.join('|   ');
// console.log(joined);
// console.log(joined);
// console.log("Hello Hritesh it is your first js basic progrsm");

// function run() {
//     console.log('running');
// }
// run();


//  let x=1;
//  x='a';
//  console.log(x);

// function sum(a,b)
// {
//     console.log(arguments)
//     return a+b;
// }
// console.log(sum(100,1));

// function sum(num,num2,...args)
// {
//     console.log(args);
// }
// sum(1,2,3,4,5,6);



// let myDiv=document.createElement('div');
//  for(let i=1;i<=100;i++)
//     {
//          let newElement=document.createElement('p');
//          newElement.textContent='This is a para'+i;

//          newElement.addEventListener('click' ,function(event)
//      {
//         console.log('i have cloicked on para');
//      });
//      myDiv.appendChild(newElement);
//  }
//      document.body.appendChild(myDiv);




// for(let i=1;i<=100;i++)
//     {
//         let newElement=document.createElement('p');
//         newElement.textContent='This is a para'+i;
        
//         document.body.appendChild(newElement);
//     }

// //optimising it
// let myDiv=document.createElement('div');
// for(let i=1;i<=100;i++)
//     {
//         let element=document.createElement('p');
//         newElement.textContent='This is a para'+i;

//         myDiv.appendChild(element);
//     }
//     document.body.appendChild(element);



//call stack
// console.log("Dom last");

// let meraPromise=new Promise(function(resolve,rejecy){
//     console.log("Promise dne");
//     resoleve(1998);
// });
// console.log(pehla);
//console.log("pehla");

//async function utility() {
   // let content=await fetch('https://jsonplaceholder.typicode.com/posts/1');
   // let output=await content.json();
    //console.log(output);
//}
//utility();
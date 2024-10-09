// const tinderUser=new Object() //It is a singleton object
//const tinderUSer={} //it is a non sigleton  object

// tinderUser.id="123abc"
// tinderUser.name="sam"
// tinderUser.age=25
// tinderUser.isLoggedIn=false

// //console.log(tinderUser);

// const regularUser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"Hritesh",
//             lastname:"Kumar"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.lastname);  //we can do n number of chaining 

// const obj1={1:"a",2:"b"}
// const obj2={4:"A",3:"b"}
// const obj4={5:"A",6:"v"}

// //const obj3={obj1,obj2}
// // const obj3=Object.assign({},obj1,obj2,obj4) //we give {} (empty object) in order to assure that all objects are combined and puit inside {}, 
// //                                             //if we dont give {} we can also imagine al values are combined and put inside the first object
// // console.log(obj3);

// const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);

// const users=[
//     {
//         id:1,
//         email:"H@gmail.com"
//     },
//     {
//         id:2,
//         email:"Hk@gmail.com"
//     },
//     {
//         id:3,
//         email:"Hkl@gmail.com"
//     },
// ]

// // console.log(users[1].id);
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.table(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //method to find out whether properties are present or not

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hritesh"
}

course.courseInstructor

const {courseInstructor:instructor} =course //we wxtract the xourse instructor value from course by this syntax
                                            //we can give name acccrdng to our choice like i gave instructor 
//console.log(courseInstructor);
console.log(instructor);

// {
//     name:"hritesh",
//     coursename:"js in hindi",
//     price:"free";

// 

const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);

//spread Operator  //imagine throw a glass it breaks and spreads
const all_new_heros=[...dc_heros,...marvel_heros]
console.log(all_new_heros);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const new_array=another_array.flat(Infinity)  //It spreads out all the arrays together
console.log(new_array);


console.log(Array.isArray("Hritesh"))
console.log(Array.from("Hritesh"))
console.log(Array.from({name:"hritesh"})); //interestinng case as we have to define keys or values


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


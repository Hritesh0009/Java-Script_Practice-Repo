const name="Hritesh"
const repoCount=50

//console.log(name+repoCount+"Value");

// (``) backticks--String interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//${}== dollar sign is used to inbject variables

const gameName=new String('hritesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);  

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)  //we can add negative values in it //it starts from behind
console.log(anotherString);

const newStringOne="       hritesh   "
console.log(newStringOne);
console.log(newString.trim);

const url="https://hritesh.com/hritesh%20kumar"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));





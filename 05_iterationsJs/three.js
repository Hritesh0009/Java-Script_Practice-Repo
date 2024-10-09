//for of
//array specific loops

// ["","",""]
// [{},{},{}]  //objects inside array


const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}


// const greetings="helloworld!"
// for (const greet of greetings) 
//     {
//     console.log(`Each char is ${greet}`);
//     }

//Maps

const map=new Map()
map.set('IN',"India")
map.set('Usa',"United states of america")
map.set('RUS',"Russia")
map.set('JAP',"JApansese")
map.set('IN',"India")  //it wont show in output as maps dont hold duplicate entries

//console.log(map);


for (const [key,value] of map) {
    //console.log(key,'::',value);
    
}


const myObject={
    'game1':'NFS',
    'game2':'pop'
}

for (const [key,value] of myObject) {
    console.log(key,'::',value);
} 
   
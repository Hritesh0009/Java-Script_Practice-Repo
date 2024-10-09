const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}

// for (const key in myObject) {
//     //console.log(`${key} shortcut is fopr ${myObject[key]}`);
//     }


// const programming=["js","rb","py","java","cpp"]

// for (const key in programming) {  //arrays key starts from by default zero
//     console.log(programming[key]);
// }


const map=new Map()
map.set('IN',"India")
map.set('Usa',"United states of america")
map.set('RUS',"Russia")
map.set('JAP',"JApansese")
map.set('IN',"India")  //it wont show in output as maps dont hold duplicate entries

for (const key in map) {
     console.log(key);
     
}
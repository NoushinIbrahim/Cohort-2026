// object => properties=> key:value

const { version } = require("react");

//two ways to create obj
let gemini = new Object()  // object constructor syntax
let cluade = {}  //object literal

let gpt = {
    company: 'openai', //name: value
    version: 5.3

}

console.log(gpt.version);

gpt.type = 'large language model'  // add new property

gpt.isMultiModel = true; //property can be anytype

gpt.type ='llm' //modify

delete gpt.type; //delete the propertty


let sonnet = {
    company: 'antjropi', //
    version: 4.5,
    'released on': 2026, //multiword prop must be quoted
}

console.log(sonnet["released on"]); //square bracket notion

console.log(sonnet['version']);


//experssion as values as property name
const input = 'company';
// console.log(sonnet[input]);


function getLaptop(name, price){// param
    console.log('hehehe');
    return {
      brand: "apple",
      // name: name,
      // price:price
      name,  //shorthand propert
      price,
    };
    
}

let myMac =  getLaptop ('ma air,', 99_999)//args
console.log(myMac);

//search a property

// console.log(myMac.ram === undefined);

console.log('ram' in myMac); //key in object (boolean)

//looping obejct for in

for(key in myMac){
    console.log(myMac[key]);
    
}

//object are ordered in diff fashion
//interger properties are sorted, others appear in creation order.
let codes = {
    //asia
    '+7': 'russia',
    '+32': 'belgium',
    '+91': 'india'
}

console.log(codes);

for (const code in codes){
    console.log(code);
    
}

//ref and copying

//primitives are always copied 'as a value
let like = 'zunair';
let love = like //'zunair'

console.log(love);

like = 'taylor swift'
console.log(love);

//objects are stored and copied by refernce

let artist = {
    name:'zunair',
    country: 'pk'
}

let noshin = artist;  //both are same person

console.log(noshin === artist);

artist.country = 'england'

//store by ref

let a = {};
let b ={};
console.log(a === b); 


//const cant be modified then how we modify obj

const ev ={
    name: 'zoii'
}

ev.name ='zunair';
console.log(ev);

//clone 

const org = {
    k1: 'v1',
    k2: 'v2',
}

let clone ={}
for (let key in org){
    clone[key] = org[key]
}

//object.assign(dest, ...source) //for copy

let clone2 = obejct.assign({}, org)
console.log(clone2);

//nested obje 
const nestobj ={
    mode: 'gpt',
    version: 3.2,
    capabilites: {
        toolise: true
    }
}
const newClone = structuredClone(nestobj)
console.log(newClone);



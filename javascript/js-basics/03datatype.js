const weaponName = 'ak47'
console.log(weaponName, typeof weaponName); //string

const power = 76 //number
const lowPower = 1.5 //number

const power1 = 76n //bigint number

const isLoggedIn = true //boolean
let bonusEffect; //undefined

let curesStatus = null //intentionally not define

const uniqueRuneId = Symbol('rune_of_fire')
console.log(uniqueRuneId.toString());


//non premitive
const hero={ //object
    name: 'zunair',
    age: 20,
    class: 'trainer'
}
console.log(hero, typeof hero);

const inventory = ['ak47', 'm416',  'uzzi',] //array data type is object
console.log(inventory, typeof inventory);


function casee(){
    console.log('hello'); 
    
}
console.log(typeof casee); //function

console.log(typeof 'hello');
console.log(typeof 45);
console.log(typeof 56n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});

//we have 7types premitive datatype and 1 non-premitive datatype which is object

let originLHP = 100
let coloneHP = originLHP
coloneHP= 90

console.log(originLHP);
console.log(coloneHP);

let obj1 = {
    name: 'zuni',
    status: 'active',
    power: 70
}

let obj2 = {...obj1}  //right way to copy objcect
obj2.power=90
console.log(obj1);
console.log(obj2);

const potionOrignal = {name: 'health', effects: {heal:40, mana: 30}} 

const potionCopy =  structuredClone(potionOrignal) //this is better option for copy of nestested object
console.log(potionOrignal);
console.log(potionCopy);







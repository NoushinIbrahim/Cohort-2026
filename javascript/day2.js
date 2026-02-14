// variables
var age = 24;
age = 35


// age = 87
// console.log( age); this is wrong way

// age = 'piyush garf'

// const -> means constant you can not assign constant value again// const change nhi hoty

// let -> let bar bar change kr sakhte hain
// 

// what is function? 
//function - a resueble set of instruction or a block of code desigrd to perform a specific

function fname(){      //this is how you assign a function
    //function ka code
    console.log('bye');     //this is attitude function :)
    
}
fname() //this how u call a function

function greetuser(x,y,z){
    console.log(`hey ${x}, and ${y}`);  //add outsuide value/ variables in function
    
}

greetuser('noushin', 'ibrahim', 'SE')

function add (num1, num2){
    const result = num1 +num2;
    return result //ek function mh 1 bar hi return hoga
    
}

const r = add(2,5);
for(let i =0; i<r; i++){
    console.log(`value of i is ${i}`);
    
}

// function cartoon(){
//     function cartooninsidecartoon() {}
//     return cartooninsidecartoon
// }

// const anime = cartoon()
// anime() ///now anime value is cartoon function


function cartoon(){
    function cartooninsidecartoon() {
        return 'naruto'
    }
    return cartooninsidecartoon() // cartoon function call kr raha hai nested function ko 
}

const anime = cartoon()
anime() // cartoon function ek string value return kr raha hai or string anime() -> esse call nhi hoti 
console.log(anime); //string ke liye

//2nd way to create a function ///////

let cartoon2 = function(){
    console.log('anime');
    
}
// cartoon2();

//arrow functions ////

//     fn name  param    return
const isallow= age => age >=18; //if you have 1param then dont need to use ()

const isuserallow = (age, minbalance) => age >= 18 && minbalance >= 5000;  //if you have more then 1 statement yu have to use ()

console.log(isuserallow(23, 6000));

//Data Structures
//memory mai data ko ek particular structure mai store krna
// subjectify naa kre to kitnaa acha hoga

const fruits = ['apple', 'cheeku', true, 'aadu', 1, 'santra', 'kela']
//index           0          1       2      3     4     5         6

fruits.push('kiwi') /// add element in end
fruits.shift() // remove the first element in the array
fruits.slice(2,5) //get element from  array 2, 5
fruits.unshift('1','2','3',) // add element in the start of array
console.log(fruits[4]); //particulr element ko access krna
console.log(fruits.indexOf(2)); //particulr element ka index access krna

//high orders functions/////////////////////////////////////

function cutiefunction(funasparam){ //take function as a param
    return funasparam() + 40
}


fruits.forEach((element) =>console.log(element)) // foreach har ek element ko legaa or or assign krega (element) or console krega or its basicaly  just calling your function for every element



function cartoon3(){
    return 10;
}

console.log(cutiefunction(cartoon3));

const nums = [1,2,3,4,5,6]
const result = nums.map((e) => e *2)

// diff between map & foreach: 1.map create a new array for result and foreach use old one




 // hello world
// console.log('hello world');

// topic: code structure
//kebab-case file names.

//topic: comments
// 1line coomit interns should not touch this logic.

/*
this is multiline comment 
line2 
3
line4
*/

// topic: strict mode
// 2009 es5 added new features which breaks few things.
//too keep old systems running - new features are turned off by default
// use strict always use at top
//js >> class, modules 

//topic: veriables
//steps >>create, store, use, modify
let name= 'i am verable'; // this is creation

// console.log(name);
name = 'zunni' //modify
// console.log('now my name is ', name);

// good practice is use camelCase for veriable names for example>> myNameIs= 
// all veriables must be identified with unique name
//cannot use reserved keyword for example>> function, let , var , const , this, these are reserved keyword
let euuuu  ='sound'
let meoww  = 'name' //name should be meaning full

const g = 9.98 

g = '09' // you cant chage constant veriable value

//topic: data types
// there are 8 data types in javascript

// seven primitive data types
// 1. number>>233 let myNum=59.6, nan(not a numer), 
// 2.string>>'ehllo'. "hello". `string interpolation let = `hello`, 
// 3.boolean>>true/false
// , 4.null >>empty,khali, let yourPartner = null,
//  5.undeined>> value is not define, 
// 6.symbol for unique idenifiers,
//  7.bigint >>let bigbalance= 0430493029423423n >>>>for integar numbers of arbitrary length
// 8. object >> const person ={ name: 'ak', age: 34, mobile: 34242, ismariied: false,}

//tyoeof x return type

console.log(typeof "zoii");
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

//topic type conversion
//string conversion
let choise = false;

let strchoise = String(choise)     // convert to string

let srtinput = '24';    //right now type is string
let age = Number(srtinput) // now type is number
// if we conervt undefined into number result is NaN >>not a number
// if we conervt null into number result is NaN >>not a number


//boolean conversion

console.log(Boolean(0));

//truthy, falsy we have only 6 falsy value in js
Boolean(false)
Boolean(0)
Boolean(null)
Boolean(undefined)
Boolean(NaN)
Boolean('') //empty string is also falsy value

//topic; OPERATORS
// terms 
// 1.operators [+,-,/,*]
// 2. operand - on which we apply operators [for eg, in a+b, and d are operand]
// unary - an operator is unary if it has a single operand. (-2)
// binary-double operand [a-b]
//ternary- if else(?) short hand if else
    
    //airthmatic operations
    console.log(10*6);
    console.log(10/6);
    console.log(10-6);
    console.log(10+6);

    //string concatination >>rule-note that if any of the operands is a string, then the other one is converted to a string to
    console.log(3+ "4");  //result is 34
    console.log(3+ "one"); //result is 3one
    console.log(3+ "5" +3); //reuslt is 353
    console.log(3+3+ '5');  // 65, because first we  do addision then concationation

    //other arithmetic operators work only with numbers and always convert their operans to number
    console.log(6-'2'); //result is 4

    //assignment operators
    let myLife = 'chill'

    //modify in place
    let aura = 0
    aura = 10
    console.log(aura);

    //increment and decrement
    let counter = 0
    counter++   //value is plus 1
    console.log(counter);

    counter--; //1-1 =0
    console.log(counter);

    //there are two ways to write prefix and psotfix

    // is this postfix
    let newCounter = 10
    console.log(newCounter++) //value is 10
    console.log(newCounter); //now value is 11
    ;
    // is this prefix
    let newCounter2 = 10
    console.log(newCounter2 +1) //value is 11;

    //comparisons operators
    // <, >, ===, == , <==, >==, !=, 
    //strict, lose
    console.log(2==='2')  //this is strict check; it compare value + type
    console.log(2=='2')  //this is lose check; it compare value
    

    //conditions
    let agee = 34
    if (agee>30) {
        console.log('adult');
        
    }else{
        console.log('choti bachi');
        
    }

    while(){
        
    }
    
    //declaration
    function num(a,b){
        return a+b
    }

    //expression 
    const add = function(a,b){
        return a+b
    }

    //arrow 
    const addition = (a,b) =>a+b;
    
    
    
    
    
    
 






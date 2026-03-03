// js specs say 
// object keys can be string or symbol

// a symbol is a primitive unique value with optional dsecription

let baby = symbol('cutie');

//symbol are always uniquw even the desc is same
let ni = symbol('n')
let zj = symbol('z')

//use case
//hidden properties, skipped by for in loop

//global symbol
//they exists in global symbol registry
//we can access it by key

let org = Symbol.for('code')
let company = Symbol.for('code')

    console.log(org === company); //true
    console.log(Symbol.keyFor(org)); 
    
//system symbol
//symbol.iterator
//symbol.toprimitve
const ranger = {
  name: "zunair",
  level: 21,
  value: 27000

};

const key = Object.keys(ranger)  //all keys
const values = Object.values(ranger) // values
const entries = Object.entries(ranger) //entries // aray of array                                                                                                                           
for(const [key, value] of Object.entries(ranger)){
    console.log(`${key}: ${value}`);
    
}

ranger.newProp = 'test' // add value

Object.freeze(ranger) // now u cant add or delete value because object is freeze

Object.seal(ranger)  // u cant add or delete value but u can edit existed value

const Secure = {
    name: 'ruby'
}

Object.defineProperty(Secure, 'catelogid', {  //this is special way to add property in objects and get more features
    value: 'se-232', // this is value
    writable: false,
    enumerable: true,
    configurable: false
})

// loop key points

//1. for() => most optimize classic loop
//2. while => jab nahi ptaa kitni barchlyga
//3. do while => 1 bar to chlayga 
//4 for in => avoid on array mostly use in objects
//5. for of => array, string
//6. map, foreach, filter, reduce
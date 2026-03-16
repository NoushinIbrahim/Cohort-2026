//2ways to crreate array
let arr1 = new Array();
let arr2 = []


const appletvShows = [
    'see',
    'silo',
    'severance'
]

//access
console.log(appletvShows[0]); //first index
console.log(appletvShows.at(-1)); //last index

//queue [fifo] => push, shitf
//stack [lifo] =>push, pop

//internals
//obj but special
//index, value
//the js engine tries to stroe its elements in the contigous memory area, one after another 

for (const tvshow of appletvShows){
    console.log(tvshow);
    
}

//length => property
let food = [];

food[7] = 'briyani' //now length will be 8

//dsa arrays, fill (true, 0)
console.log(new Array(50).fill(z));


// console.log([] === []); //this condition wwill always return 'false

//methods
//splice().concat()
//foreach => update existing array

//search => indexOF , includes() , find() , findIndex() ,  findLastIndex()
// filter() if we want to find multiple elements 

//transform 
//reverse() => update existing array
//splice(delim), join(glue)
//sort()

const names = [
    'a',
    'z',
    'n',
    's',
    'q'
]
console.log(names.sort()); //sort by abcd

const numebrs = [1,2,33,66,4,67,5]

console.log(numebrs.sort()); //[1,2,33,4,] //lexicographically


function compareNumerice(a,b){
    if (a>b) return 1;
    if (a<b) return -1;
    if (a===b) return 0;

}

console.log(numebrs.sort(compareNumerice)); //1,2,3,4,5 
















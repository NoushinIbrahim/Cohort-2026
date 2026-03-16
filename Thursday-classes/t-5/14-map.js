// map > obj (key can be anything)

//in obj keys can be either string or symbol

/* 
-new Map() -create the map
-map.set(key, value) stores th
- map.get(key) return the value by the key, undeined if 'key doesnot exist in map'
map.has(key) - return 'true' if the 'key' exists, 'false' otherwise
map.delete(key) removes the element (the key/value pair) by the key
map.clear() -removes everything from the map
map.size -return the current element count

*/

const m = new Map();

m.set('k1', 'v1');



// console.log(m.get(1));

//count word frequency
const text = 'the cat sat on the mat cat';
const freq = new Map();

for (const word of text.split(" ")){
    const wordfreq = freq.get(word) || 0

    freq.set(word, wordfreq +1)
}


console.log(freq);

console.log(freq.keys());
console.log(freq.values());
console.log(freq.entries());

const affliiates = new Map()

const first = {name: 'noshi'}
const second = {name: 'zuni'}

affliiates.set(first, 5000_0)
affliiates.set(second, 20_00)

console.log(affliiates);

let obj = {
    name: 'zoii',
    age: 21,
}

let map = new Map(obj.entries(obj))

console.log(map);






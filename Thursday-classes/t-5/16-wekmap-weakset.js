// key => obj 

//javascript engine keeps a value in memory while it is reacable and can potentially be used.

//using map i can set key as obj
//using set i can store obj as value


//jb ojb gayab mh bhi delete krunga key ko
let bounties = new WeakMap()

let first  = {name: 'windos'}
let second = {name: 'zubair-mac'}

bounties.set(first, '5000')
bounties.set(second, '3000')

first = null
console.log(bounties.has(first));

//weak =< value obj hogi to after garbage collection gayab hogi

let gc= [
    {text: 'hello team', from: 'hitesh'},
    {text: 'yoo im in when?', from: 'ak'},
    {text: 'this holi', from: 'ano'},
    {text: 'can i bring my gf?', from: 'piyush'}
];

// let unread = new Set(gc)
 let unread = new WeakSet(gc)

console.log(unread);

gc.pop()
console.log(unread.has(gc[3]));











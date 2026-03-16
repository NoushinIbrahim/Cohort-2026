//this concept allows us to make any object useable in a for...of loop
//string, array

//[sumbol, iterator] helps to decided where its a iterable

//syntax [symbol.iterator]
//this is a method
//it returns an object
//that object has next() method
//next () retrun (done: boolean, value: any)

//lets make object iterator

let playlist = {
    song : ['my sewwt', 'mewo', 'mewo2'],
    from: 0
}


playlist[Symbol.iterator] function (){
    return {
        next(){
            return {done: true}
        }
    }
}

for (const song of playlist){
    console.log('now playing', song);
    
}

































































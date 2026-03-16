//obj who has index,and  length


//for e.g string

const starterpack = {
    0: 'mackboook',
    1: 'chai',
    length:2,
}

//both iterables and array-likes are usually not arrays, they dont have push, pop etc


//conervt//arraylike =>array

const aarray = Array.from(starterpack)
console.log(aarray);




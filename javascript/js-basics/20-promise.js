// console.log('zoii'); //async is frist priority
// Promise.resolve('resolved').then((v)=>{  //promise is 2nd
//     console.log('microtask', v);
    
// })
// console.log('zunair');

function boilwater(ms){
    return new Promise((rej, res)=>{
        console.log('krte h ki boil');
        if (typeof ms === 'number' || ms<0) {
            rej(new Error('ms must be in numbers'))
        }
        setTimeout(()=>{
            res('done');
        }, ms)
    })
}

boilwater(200)
.then((msg) =>console.log('res', msg)
).catch((err)=> console.log('rej', err.msg))


function grind(){
    return Promise.resolve('res')
}

function steeptea(time){
    return new promise((res) =>{
        setTimeout(()=> res('steeped tea'), time)
    });
}


















// pending, done(fulfil, resolve),  nope(not,reject, nahi)

const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        // resolve('chaicode')
        reject(new Error('chaicode'))
    }, 2000)        
});
console.log(promise);

// setTimeout(()=>{
//     console.log(promise);
    
// }, 3000)


promise.then((value) =>{
    console.log(value);
    //  (error) => console.log(error);
    
}).catch((error) =>console.log(error) //code is same just syntax is change
)

const turant  = promise.resolve('turant') //immidate promis resolve // no new keyword
console.log(turant);

const allPromise = Promise.any([ //if any one is resolve it wil console it
    Promise.resolve('chaicode'),
    Promise.resolve('code'),
    Promise.reject('error'),
])
 allPromise.then(console.log);


const allPromisee = Promise.all([  // it will cosole.log all the resolve promise
    Promise.resolve('chaicode'),
    Promise.resolve('code'),
    Promise.reject('error'),
])

allPromisee.then(console.log);

const allPromisee3 = Promise.allSettled([  // it will cosole.log all the resolve and reject promise with array [status: 'fulfillerd, value 'chai]
    Promise.resolve('chaicode'),
    Promise.resolve('code'),
    Promise.reject('error'),
])

// allPromisee3.then(console.log);

const Hpromise = new Promise((rej, res) =>{
    setTimeout(()=>{
        res('master')
    }, 3000)
})

async function nice(){
    // const result = await Hpromise; //u cant handle error in awat
    // console.log(result);
    try {
        const result = await Hpromise
        console.log(result);
        
    } catch (error) {   
        console.log('error is here', error.message);
        
        
    }
}

nice();

















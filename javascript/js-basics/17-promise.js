function prepareorder(dish, cb){
    setTimeout(()=>cb(null, {dish, status: 'parepareorder'}), 100)
}
function prepareorder(dish, cb){
    setTimeout(()=>cb(null, {dish, status: 'parepareorder'}), 100)
}

//pendeing, fulfilled, rejected

function prepareOrder(dish){
    return new Promise((reject, resolve)=>{
        setTimeout(()=>{
            if (!dish) {
                reject (new Error('no dish is there'))
                return
            }
            console.log(`${dish} is ready`);
            resolve({dish, status: prepared})
            
        }, 100)
    })
}
function pickupOrder(order){
    return new Promise((reject, resolve)=>{
        setTimeout(()=>{
           
            console.log(`${order} is ready`);
            resolve({order, status: 'pickuped'})
            
        }, 100)
    })
}
function deliverOrder(order){
    return new Promise((reject, resolve)=>{
        setTimeout(()=>{
           
            console.log(`${order} is ready`);
            resolve({...order, status: 'deliverd'})
            
        }, 100)
    })
}

prepareOrder('panner tikka')
    .then(order =>pickupOrder(order))
    .then(order =>deliverOrder(order)).catch()
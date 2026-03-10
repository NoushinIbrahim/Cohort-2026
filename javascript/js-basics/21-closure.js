// function init(){
//     let name = 'mozilla';
//     function displayName(){
//         console.log(name);
        
//     }
//     displayName()
// }

// init()
// console.log(name);


// function makeFunc(){
//     const name = 'moziila'
//     function displayName(){
//         console.log(name);
        
//     }
//     return displayName
// }

// const myFunc = makeFunc()
// makeFunc()


function startCompany(){
    function ca(name){
        return`name of your company is ${name}`
    }
    return ca
}

const getMeCompany = startCompany()
let myCompany = getMeCompany('foodpanda')

function eternal(guest){
    let guestName = guest
    let count = 0

    function zomato(){
        console.log(`hi ${guestName}`);
        
    }

    function blinkit(){
        if (count ===1) return;
        console.log(`hi ${guestName}, from blinkit`);
        count++;
        
    }
    // zomato()
    // blinkit()
    return{
        zomato,
        blinkit,
    }
    
}
const zun = eternal('zuanir')
const zi = eternal('zoii')

zun.blinkit()
zun.blinkit()
zun.blinkit()
zun.blinkit()

useMemo()




win














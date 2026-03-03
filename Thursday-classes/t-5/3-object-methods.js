// function viralDance(){
//     console.log('ichu ichi');
    
// }

// const doges = {
//     name: 'husky',
//     dance: viralDance,
// }

// doges.dance = function(){
//     console.log('ichu ichu song');
    
// }

 function viralDance(){
    console.log('ichu ichi');
    
 }

//  const doges ={
//     name: 'husky',
//     dance: function(){
//         console.log('ichu ichu');
        
//     }
//  }

//shorthand method
const doges = {
    name: 'husky',
    dance(){
        console.log('ichu ichu');
        
    }
}

let user = {
    name: 'zubair',
    age: 26,
    college: 'chitkara',
    passout: 3232,

    intro(){
        console.log(`hi my name is ${this.name}`);
        
    }
}

let zubair = user;
user = null;

zubair.intro();


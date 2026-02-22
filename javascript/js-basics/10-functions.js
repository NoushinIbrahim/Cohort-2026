console.log(brewPortion("healing herbs", 3));

function brewPortion(ingre, dose) {
  return `brewing postion ${ingre} ${dose}`;
}

const misElixir = function (ingre) {
  return `mixing with ${ingre}`;
};
//arrow function

const distil = (ingre) => {
  // arrow function dont have 'this', or dont have 'arguments' objects/ each funtion havearguments but arrow function dont have
  return `mixing with ${ingre}`;
};

function oldBrewingLogs() {
  console.log(typeof arguments); // type is obejcts
  console.log(arguments);
  console.log(Array.isArray(arguments));
  const argsArray = Array.from(arguments);
  console.log(argsArray);
}
oldBrewingLogs("sage", "rosemary");

const arrowBrew = () => {
  console.log(arguments); // program is crash use try catch
};

arrowBrew();

const arrowBrew2 = () => {
 try{
    console.log(arguments);
    
 } catch(e){
    console.log(e.message);
    
 }
};
arrowBrew2()


//impure function //bahir ki value ko change krta hai
let globalCount = 0

function count(){
    globalCount++
}

//IIFE 
()()
(function() {}) ()


const shop =(function() {
    let inverntory = 0 //not possible to access this veriable outside

    return {
        brew(){
            inverntory++
            return `${inverntory}`
        },
        getStock(){
            return inverntory;
        }
    }
}) ();
console.log(shop);

console.log(shop.brew());
console.log(shop.inverntory);




//high order function
function count2(){   //this is normal function
   console.log('helo');
   
}


//high order function
function count3(count2){  // take another function reference as paramter
    return function newcount(){ // returning another function
        //do something 
    }
}
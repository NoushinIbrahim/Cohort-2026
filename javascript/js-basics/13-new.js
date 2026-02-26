function TataCar(chassisNumber, modelName){

    //step1, when we use 'new' this will create {} empty object
    //step2, then it will link empty object { } prototpe to TataCar prototype
    //step3,then 'this ' come  and save the refrence
    //step4, return object
    this.chassisNumber = chassisNumber
    this.modelName = modelName
    this.fuellevel =  100;
}

TataCar.prototype.status = function(){ // use prototype to add more property to function 
    return `tata ${this.modelName} ${this.chassisNumber} ${this.fuellevel} ` // this func have all property of his parent function
}

const car1 = new TataCar('dl-122', 'harrier')
const car2 = new TataCar('dl-23', 'tata')

console.log(car1.status());
console.log(car2.status());


//this is not same as above

// factory function => ye puraa reference carry krke chalta hai
function createAuto(id, route){
    return{
        id,
        route,
        run(){
            return `auto ${this.id} ${this.route}` 
        }
    }
}

const auto = createAuto('ip022', 'none')  //this will take full intence
const auto2 = createAuto('ip0222', 'no2')
// console.log(this); //this will access global object

function heroonGlobalStage(){
    return typeof this
}
// console.log(heroonGlobalStage());

function heroWithNoScript(){
    return this
}
// console.log(heroWithNoScript());


const bollywoodflim ={
    name: 'bajirao mastani',
    lead: 'ranveer',

    introduce(){
        return `${this.lead} performs in ${this.name}`  //this will target current obj scope
    }
}
console.log(bollywoodflim.introduce());

const flimeDirector = {
    name: 'sanjay leela',
    cast: ['ranveer', 'deepika', 'priyanka'],

    announceCast(){ //this function have 'this'
        this.cast.forEach((actor) =>{ //arrow functions ke pass this nahi hota pr mehtod normal function hai isliye uska this hai
            console.log(`${this.name} introduces ${actor}`); //this is call back foreach
            
        })
    }
}
flimeDirector.announceCast()

const flimSet = {
    crew: 'spot boys',
    prepareProps(){
        console.log(`outer this.crew ${this.crew}`);

        function arrangeChairs(){
            console.log(`inner this.crew ${this.crew}`); // a regular nested function dost not inheritence 'this', iske pass access nahi hai 
            
        }
        arrangeChairs();

        const arrangeLights = () =>{
            console.log(`arrow this.crew ${this.crew}`);// this one have the 'this' access 
            
        }
        arrangeLights()
    }
}

flimSet.prepareProps();

//detached methods

const actor = {
    name: 'ranveer',
    bow(){
        return `${this.name} taks a bow`
    }
}

const detachBow = actor.bow

console.log(detachBow());


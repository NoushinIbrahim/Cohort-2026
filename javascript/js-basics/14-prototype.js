const prithviraj = {
    name: 'zunair',
    gerneration: 'grandfather',
    cook(){
        return `${this.name} cooks `
    }
}

const raj = Object.create(prithviraj)
raj.name = 'zunii';
raj.gerneration = 'father';
raj.runbussiness = function(){
    return `${this.name} runs the family bussines`
}
console.log(raj);

const ranbir = Object.create(raj);
ranbir.name = 'ranbir';
ranbir.gerneration = 'son';
ranbir.makeFlim = function (){
    return `${this.name} directs movies`
};

console.log(ranbir.makeFlim());
console.log(ranbir.runbussiness());
console.log(ranbir.cook());


Array.prototype.last = function() {
    return this[this.length -1];
}

Array.prototype.hitesh = 'hitesh'

console.log([1,2,3].hitesh);

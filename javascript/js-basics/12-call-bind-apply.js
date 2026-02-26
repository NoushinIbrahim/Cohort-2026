// call and apply => basic chef
//bind => return a new function


function cookDish(ingredient, style){
    return `${this.name} prepares ${this.ingredient} in ${this.style}`
}

const zubairkitchen = {name: 'zubairs kitchen'}
const zunairkitchen = {name: 'zunair kitchen'}

console.log(cookDish.call(zubairkitchen, 'briyani', 'sindhi'));

const zunairOrder = ['polaoo', 'briyani']

console.log(cookDish.apply(zunairkitchen,
    zunairOrder));  //for array we have to use apply A for array A for apply

 function reportDelivery(location, status){
    return `${this.name} at ${location} ${status}`
 }


 const deliveryBoy = {
    name: 'ranveer'
 }

 console.log('call', reportDelivery.call(deliveryBoy, 'liyari', 'deliverd'));
 console.log('apply', reportDelivery.apply(deliveryBoy, ['liyari', 'deliverd']));
//  console.log('bind', reportDelivery.call(deliveryBoy, ['liyari', 'deliverd']));

const bindreport = reportDelivery.bind(deliveryBoy);
console.log(bindreport('karachi', 'yes'));

 
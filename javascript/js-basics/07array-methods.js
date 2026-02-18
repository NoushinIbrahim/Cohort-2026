const orders = [
    {dish:'pasta carbonara', price: 32, spicy: false, qty:1},
    {dish:'dragon ramen', price: 22, spicy: true, qty:3},
    {dish:'briyani', price: 200, spicy: true, qty:5},
    {dish:'truffle risto', price: 16, spicy: false, qty:1},
];

orders.forEach((elemnt, index) =>{
    console.log(`#${index +1}: ${orders.qty}x ${orders.dish}`);
    
})

orders.map(o => `${o.dish}: $${o.price* o.qty}`)

const spicyOrders = orders.filter(o => o.spicy)
console.log(spicyOrders);

const totalrenvenu = orders.reduce((sum, order) => {
    return sum + (order.qty * order.price)
}, 0) 
console.log(totalrenvenu);


const grouped = orders.reduce((acc, order) =>{
    const category = order.spicy ? 'spicy' : 'mild';

    acc[category].push(order.dish)
    return acc
    
}, {spicy: [], mild: []},)

console.log(grouped);



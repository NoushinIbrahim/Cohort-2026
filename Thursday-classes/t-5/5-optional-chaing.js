const user = {
    name: 'john',
    email: 'jhon.com',
    zip: '2323',
    adress: 'k.pk'
}

// if(user.adress){
//   console.log("helo");
  
// }else{
//     console.log('nothing');
    
// }

//logical and it returns first falsy or last truty
//console.log(user.address && user.adress.city)

// ?
console.log(user.adress?.zip);

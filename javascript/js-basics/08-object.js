const hero = {
    name: 'zunii',
    class: 'cute',
    level: 21,
    isactive: true
}

hero.name  /// 1st way to access object property
// hero['user name'] // it will bettter to use when we have key like 'user name' with spaces

delete hero.name  // delete property in object
console.log(hero[2]);

const ranger = {
    name: 'zunair',
    level: 21,
}

console.log('name' in ranger); //answeer will be true
console.log('toString' in ranger); //we dont have this property but answeer still will be true because of prototype chaining
console.log(ranger.hasOwnProperty('tosring')) ;  // right way to check that we have this property or not





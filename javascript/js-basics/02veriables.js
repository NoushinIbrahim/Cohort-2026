var shipName = 'amber'
console.log(shipName);

let crewwCount = 12
console.log(crewwCount);
crewwCount = 14

const captainName = 'Zubair'
console.log(captainName);
captainName = 'noshi'


if (true) {
    var leakyTreasure = 'gold' 
}

console.log(leakyTreasure); //this is var problem its not block scope

const treasure = {  //object
    gold: 100,
    rubies: 50,
    maps: 2
}

treasure.gold = 150; //this is  right

const crew = ['zunni', 'noshi', 'thor']
crew.push('spidermen'); //this is allow
crew[0]= 'zubair'  //this is allow

crew = ['someone'] //this is not allow
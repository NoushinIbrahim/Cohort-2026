const clue1 = 'muddy footprint near the window'
const clue2 = 'broken glass on the table'

console.log('clue found', clue1);
console.log('clue found', clue2);

const suspectName = 'dipesh'
const suspectAge = 20
console.log('suspect', suspectAge, suspectName);

console.warn('warning: fingerprint evedence detected')
console.error('error: fingerprint evedence detected')

const evidencLog = [
    {id:1, item: 'muddy footprint', location: 'window sill'},
    {id:2, item: 'broken glass', location: ' sill'},
    {id:3, item: 'broken glass', location: ' sill'},
];

console.table(evidencLog)


console.group('group starts')
console.log('my log1');
console.log('my log2');
console.log('my log3');
console.log('my log4');

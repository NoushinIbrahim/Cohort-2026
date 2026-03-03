// conversion => number, string

//obj[symbol.toPrimitive](hint)

//hiny => string, number, default
// binary + (addition, concatination)

let galgotia = {
    status : 'wasted',
    aura: -100,

    //custom conversion
    [Symbol.toPrimitive](hint){
        if (hint === 'string') return (this.status)

            return this.aura;
    }
}

console.log(galgotia);
console.log(Number(galgotia));


//hint : string => tosring()
//hint: number => value()


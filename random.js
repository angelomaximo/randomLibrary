function getRandom(maxNumber) {
    return Math.floor( Math.random() * maxNumber + 1 );
}

function getRandomBetween(minNumber, maxNumber) {
    return Math.floor( Math.random() * (maxNumber - minNumber + 1) ) + minNumber
}

console.log( getRandomBetween(1, 5) )
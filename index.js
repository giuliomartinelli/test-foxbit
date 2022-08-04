const { MarsMission } = require('./src/marsmission.js')

// INPUTS MOCADOS
const area              = "5 5"
const whereAreWe        = "1 2 N"
const coordinates       = "LMLMLMLMM"
const whereAreWe2       = "3 3 E"
const coordinates2      = "MMRMMRMRRM"

// instanciar objetos
const marsMission = new MarsMission()

// ---------------------------------------------------
// iniciar primeiro rover Curiosity "Nomes reais de sonda em marte"
const endOfMissionOne = marsMission.curiosityRover(area, whereAreWe, coordinates)
// ---------------------------------------------------
// ---------------------------------------------------
// iniciar segundo rover Spirit "Nomes reais de sonda em marte"
const endOfMissionTwo = marsMission.spiritRover(area, whereAreWe2, coordinates2)
// ---------------------------------------------------
console.log(endOfMissionOne)
console.log(endOfMissionTwo)

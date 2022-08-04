const { MarsMission } = require('../src/marsmission.js')

describe("Marts Mission teste completo de tod a aplicação", () => {
    it("Deve retornar a cordenada final, curiosityRover", async () => {
        const marsMission = new MarsMission()
        const area = "5 5"
        const whereAreWe = "1 2 N"
        const coordinates = "LMLMLMLMM"
        const endOfMissionOne = marsMission.curiosityRover(area, whereAreWe, coordinates)
        expect(endOfMissionOne).toBe("1 3 N")
    })


    it("Deve retornar a cordenada final, curiosityRover", async () => {
        const marsMission = new MarsMission()
        const area = "5 5"
        const whereAreWe = "3 3 E"
        const coordinates = "MMRMMRMRRM"
        const endOfMissionTwo = marsMission.spiritRover(area, whereAreWe, coordinates)
        expect(endOfMissionTwo).toBe("5 1 E")
    })
})
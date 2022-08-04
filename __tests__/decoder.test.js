const {Decoder} = require("../src/decoder.js")

describe("Decoder", () => {
    it("deve decodificar e retornar um array valido para area", async () => {
        const decode = new Decoder()
        const area = decode.area("5 5")
        expect(area).toEqual(expect.arrayContaining([ '5', '5' ]));
    })

    it("deve decodificar e retornar um array valido para coordenadas de inicialização", async () => {
        const decode = new Decoder()
        const whereAreWe = decode.noSpace('3 3 E')
        expect(whereAreWe).toEqual(expect.arrayContaining([3, 3, "E"]));
    })

    it("deve decodificar e retornar um array valido para coordenadas de inicialização", async () => {
        const decode = new Decoder()
        const coordinates = decode.coordinates("MMRMMRMRRM")
        expect(coordinates).toEqual(expect.arrayContaining([ 'M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M' ]));
    })

})
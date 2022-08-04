const {Control} = require("../src/control.js")

describe("Control", () => {
    it("deve decodificar e retornar um array valido para area", async () => {
        const control = new Control()
        const startCompass = control.startCompass("N")
        expect(startCompass).toBe("N");
    })

    it("deve decodificar e retornar um array valido para area", async () => {
        const control = new Control()
        const startCompass = control.startCompass("E")
        expect(startCompass).toBe("E");
    })
})
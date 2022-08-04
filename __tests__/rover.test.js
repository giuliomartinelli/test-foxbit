const { MarsMission } = require('../src/marsmission.js')
const {Rover} = require("../src/rover")
const {Map} = require("../src/map")

describe("Rover", () => {
    
    it("Instanciar classe", async () => {
        const rover = new Rover()
        expect(rover).toBeInstanceOf(Rover);
    })

    it("Deve carregar o Mapa", async () => {
        const map = new Map()
        const rover = new Rover()
        const resMap = rover.loadMap(map)
        expect(resMap).toBeInstanceOf(Map)
    })

    it("Deve retornar a rota a ser seguida pelo rover", async () => {
        const rover = new Rover()
        const input = [ 'L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']
        const resTakeRoute = rover.takeRoute(input)
        expect.arrayContaining(resTakeRoute)
    })


    it("Dirigir o rover", async () => {
        let map = new Map()
        let rover = new Rover()
        
        let areaD = [ '5', '5' ]
        let whereAreWeD = [ 1, 2, 'N' ]
        let coordinatesD = ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']

        map.createMap(areaD[0], areaD[1])
        map.whereAreWe(whereAreWeD[0], whereAreWeD[1], whereAreWeD[2])        
        rover.startCompass(whereAreWeD[2])
        rover.loadMap(map)
        rover.takeRoute(coordinatesD)
        
        let drive = rover.drive()
        
        expect(drive).toBe(true)
    })

    it("Deve retornar as cordenadas finais de [ 3, 3, 'N' ]", async () => {
        let map = new Map()
        let rover = new Rover()

        let areaD = [ '5', '5' ]
        let whereAreWeD = [ 3, 3, 'N' ]
        let coordinatesD = ['M','M','R','M','M','R','M','R','R','M']

        map.createMap(areaD[0], areaD[1])
        map.whereAreWe(whereAreWeD[0], whereAreWeD[1], whereAreWeD[2])        
        rover.startCompass(whereAreWeD[2])
        rover.loadMap(map)
        rover.takeRoute(coordinatesD)
        let drive = rover.drive()
        
        expect(drive).toBe(true)
    })


    it("Deve retornar as cordenadas finais [ 1, 2, 'N' ]", async () => {
        let map = new Map()
        let rover = new Rover()

        let areaD = [ '5', '5' ]
        let whereAreWeD = [ 1, 2, 'N' ]
        let coordinatesD = ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']

        map.createMap(areaD[0], areaD[1])
        map.whereAreWe(whereAreWeD[0], whereAreWeD[1], whereAreWeD[2])        
        rover.startCompass(whereAreWeD[2])
        rover.loadMap(map)
        rover.takeRoute(coordinatesD)
        rover.drive()

        let reportToBase = rover.reportToBase()

        expect(reportToBase).toBe("1 3 N")
    })
})
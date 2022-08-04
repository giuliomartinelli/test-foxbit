const {Rover} = require("../src/rover")
const {Map} = require("../src/map")


describe("Map", () => {
    it("deve retornar o array da localização inicial N", async () => {
        let map = new Map()
        let whereAreWe = map.whereAreWe(1, 2, 'N')
        expect(whereAreWe).toEqual(expect.arrayContaining([1, 2, 'N']));
    })

    it("deve retornar o array da localização inicial E", async () => {
        let map = new Map()
        let whereAreWe = map.whereAreWe(3, 3, 'E')
        expect(whereAreWe).toEqual(expect.arrayContaining([3, 3, 'E']));
    })

    it("deve criar o mapa e devolver o tamanho em um array", async () => {
        let map = new Map()
        let createMap = map.createMap(5, 5)
        expect(createMap).toEqual(expect.arrayContaining([5, 5]));
    })

    it("deve dirigir e retornar true para as cordenadas [1, 2, 'N']", async () => {
        let map = new Map()
        command = [ [ '-', 'x' ],
                    [ '+', 'y' ],
                    [ '+', 'x' ],
                    [ '-', 'y' ],
                    [ '-', 'y' ] ]
        map.createMap(5, 5)
        map.whereAreWe(1, 2, "N")
        let driveFollowingCoordinates = map.driveFollowingCoordinates(command)
        expect(driveFollowingCoordinates).toBe(true);
    })

    it("deve dirigir e retornar true para as cordenadas [3, 3, 'E']", async () => {
        let map = new Map()
        command = [ [ '+', 'x' ],
                    [ '+', 'x' ],
                    [ '+', 'y' ],
                    [ '+', 'y' ],
                    [ '-', 'x' ],
                    [ '+', 'x' ] ]
        map.createMap(5, 5)            
        map.whereAreWe(3, 3, "E")
        let driveFollowingCoordinates = map.driveFollowingCoordinates(command)
        expect(driveFollowingCoordinates).toBe(true);
    })

})
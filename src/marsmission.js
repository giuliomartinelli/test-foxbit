const {Rover} = require('./rover.js');
const {Map} = require('./map.js');
const { Decoder } = require('./decoder.js');

class MarsMission {
    
    curiosityRover(area, whereAreWe, coordinates, map = new Map(), rover = new Rover(), decode = new Decoder() ) {
        // transformar string em array para ser usado nas proximas funções
        // retorno esperado
        // areaD = [ '5', '5' ]
        let areaD = decode.area(area)
        // retorno esperado
        // whereAreWeD = [ 1, 2, 'N' ]
        let whereAreWeD = decode.noSpace(whereAreWe)
        // retorno esperado
        // coordinatesD = ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']
        let coordinatesD = decode.coordinates(coordinates)
        // Cria o Mapa
        map.createMap(areaD[0], areaD[1])
        // Inicia onde nós estamos
        map.whereAreWe(whereAreWeD[0], whereAreWeD[1], whereAreWeD[2])        
        // Verificar implementação
        // rover.startRover()
        // verificar implementação
        rover.startCompass(whereAreWeD[2])
        
        // carregar o mapa que será utilizado
        rover.loadMap(map)

        // carregar a rota usando as cordenadas
        rover.takeRoute(coordinatesD)

        // andar usando na rota utulizando as coordenadas
        rover.drive()
        
        //  reportar para a torre de comando sua localização logo após percorrer o percurço
        return rover.reportToBase()
    }

    spiritRover( area, whereAreWe, coordinates, map = new Map(), rover = new Rover(), decode = new Decoder() ) {

        // transformar string em array para ser usado nas proximas funções
        // retorno esperado
        // areaD = [ '5', '5' ]
        let areaD = decode.area(area)
        // retorno esperado
        // whereAreWeD = [3, 3, "E"]
        let whereAreWeD = decode.noSpace(whereAreWe)
        // retorno esperado
        // coordinatesD = [ 'M', 'M, 'R, 'M, 'M, 'R, 'M, 'R, 'R, 'M' ]
        let coordinatesD = decode.coordinates(coordinates)

        // Cria o Mapa
        map.createMap(areaD[0], areaD[1])

        // Inicia onde nós estamos
        map.whereAreWe(whereAreWeD[0], whereAreWeD[1], whereAreWeD[2])        
        
        // Verificar implementação
        // rover.startRover()

        // verificar implementação
        rover.startCompass(whereAreWeD[2])
        
        // carregar o mapa que será utilizado
        rover.loadMap(map)

        // carregar a rota usando as cordenadas
        rover.takeRoute(coordinatesD)

        // andar usando na rota utulizando as coordenadas
        rover.drive()
        
        //  reportar para a torre de comando sua localização logo após percorrer o percurço
        return rover.reportToBase()
    }
}

module.exports = { MarsMission }
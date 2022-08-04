const {Control} = require('./control.js');

class Rover {
    
    #control
    #map
    #decodedCommand
    
    constructor(control = Control) {
        // inicia a classe control que é utilizada para controlar o rover
        this.#control = new control()
    }
    
    // carrega o mapa ja criado com o tamanho solicitado de 5x5
    loadMap(map) {
        return this.#map = map
    }

    // Inicia o ponto cardial de partida
    startCompass(cardinal) {
        return this.#control.startCompass(cardinal)
    }

    // depois que já temos as instruçoe precisamos 
    // decodificar e transformar em uma sequência de comandos 
    takeRoute(instruction) {
        let commands = []
        let res
        // percorremos cada instrução para transformar em comandos validos para o robo
        instruction.map((element, i) => {
            res = this.#control.decodeCommand(element)
            if(res) {
                commands.push(res)
            }
        });
        this.#decodedCommand = commands
        return commands
    }

    // inicia a navegação pelo mapa para alcançar o destino solicitado
    drive() {
       return this.#map.driveFollowingCoordinates(this.#decodedCommand)     
    }

    // retorna a resposta solicitada pelo teste proposto
    reportToBase() {
        let res = this.#map.arrival()
        res = res[1]+" "+res[0]+" "+res[2]
        return res
    }
}
module.exports = { Rover }

class Map {
    
    #map
    #x
    #y
    #cardial
    #myCardial
    #arrivalAtThePoint = []


    // Inicia as primeias cordenadas
    whereAreWe(y, x, cardial){
        // correção de cordenadas para o Norte apenas
        if(cardial == "N") {
            this.#y = y +1
            this.#x = x +1
        }
        if(cardial == "E") {
            this.#y = y
            this.#x = x
        }
        this.#cardial = cardial
        this.#myCardial = cardial
        return [y, x, this.#cardial]
    }

    // cria o mapa para que o rover possa percorrer
    createMap(vertical, horizontal) {
        this.horizontal = horizontal 
        this.vertical   = vertical
        this.#x = horizontal
        this.#y = vertical
        this.#map = new Array(this.#y);
        for (var i = 0; i < this.#y; i++) {
            this.#map[i] = new Array(this.#x);
        }
        return [this.#map.length, this.#map[0].length]
    }

    // andar com o rover com base nos commandos decodificados 
    driveFollowingCoordinates(command) {
        // como o comando é uma sequencia de arrays precisamos percorrer o array
        for (let i = 0; i < command.length; i++) {
            let c = command[i]

            //verifica se o cardial é Norte
            if (this.#myCardial == "N") {
                // se o comando for x
                if(c[1] == "x") {
                    // e o comando tambem for menos
                    // horizontal recebe -1 "horizontal = this.x"
                    if (c[0] == "-") {
                        this.#x = this.#x - 1
                    }
                    // e o comando tambem for mais
                    // horizontal recebe +1 "horizontal = this.x"
                    if (c[0] == "+") {
                        this.#x = this.#x + 1
                    }
                }

                // se o comando for x
                if(c[1] == "y") {
                    // e o comando tambem for menos
                    // vertical recebe -1 "vertical = this.y"
                    if (c[0] == "-") {                        
                        this.#y = this.#y - 1
                    }
                    // e o comando tambem for mais
                    // vertical recebe +1 "vertical = this.y"
                    if (c[0] == "+") {
                        this.#y = this.#y + 1
                    }
                }    
            } 

            //verifica se o cardial é Leste troca a ordem dos comandos
            if(this.#myCardial == "E") {
                if(c[1] == "x") {
                    if (c[0] == "-") {
                        this.#x = this.#x + 1
                    }
                    if (c[0] == "+") {
                        this.#x = this.#x - 1
                    }
                }
                if(c[1] == "y") {
                    if (c[0] == "+") {
                        this.#y = this.#y + 1
                    }
                }
            }
             
            this.#map[this.#y-1][this.#x-1] = this.#cardial
        }       

        // prepara as cordenadas finais para retorno no metodo arrival
        this.#arrivalAtThePoint.push(this.#x)
        this.#arrivalAtThePoint.push(this.#y)
        this.#arrivalAtThePoint.push(this.#cardial)

        return true
    }

    // returna as cordenadas finais após percorrer o percorrer o percurso
    arrival () {
        return this.#arrivalAtThePoint
    }
}

module.exports = { Map }
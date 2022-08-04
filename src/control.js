class Control {
    
    #direction = "none"
    #moveFor
    #cardinal

    #North = "N"
    #South = "S"
    #East  = "E"
    #West  = "W"
    #Left  = "L"
    #Right = "R"
    #Move  = "M"

    // controle para virar o rover para o lado correspondente
    #turn(turn) {
        this.#direction = turn
        let d = this.#whichDirection(this.#direction)
    }

    // controle de direção 
    #whichDirection(currentDirection) {
        this.#whichCurrentDirection(currentDirection)
        this.#whichSideToTurn(currentDirection)
    }

    // controle de direção para saber qual lado o rover 
    // deve andar com base para qual lado esta sua frente
    #whichCurrentDirection (currentDirection) {
        if(this.#cardinal == this.#North && currentDirection == this.#Left) {
            this.#cardinal = this.#West
            return
        }

        // 
        if(this.#cardinal == this.#North && currentDirection == this.#Right) {
            this.#cardinal = this.#East
            return
        }

        if(this.#cardinal == this.#South && currentDirection == this.#Left) {
            this.#cardinal = this.#East
            return
        }

        // 
        if(this.#cardinal == this.#South && currentDirection == this.#Right) {
            this.#cardinal = this.#West
            return
        }

         if(this.#cardinal == this.#East && currentDirection == this.#Left) {
             this.#cardinal = this.#North
             return
         }

        //  
        if(this.#cardinal == this.#East && currentDirection == this.#Right) {
            this.#cardinal = this.#South
            return
        }

        if(this.#cardinal == this.#West && currentDirection == this.#Left) {
            this.#cardinal = this.#South
            return
        }

        // 
        if(this.#cardinal == this.#West && currentDirection == this.#Right) {
            this.#cardinal = this.#North
            return
        }
    }

    // controle para saber para qual lado virar 
    #whichSideToTurn(currentDirection) {
        if(currentDirection == this.#Move) {
            if(this.#cardinal == this.#East) {
                this.#moveFor = ["+","x"]
            }
            if(this.#cardinal == this.#West) {
                this.#moveFor = ["-","x"]
            }

            if(this.#cardinal == this.#South) {   
                this.#moveFor = ["+","y"]
            }

            if(this.#cardinal == this.#North) {   
                this.#moveFor = ["-","y"]
            }
            return
        }
    }

    // inicia o ponto cardial de partida do rover
    startCompass(cardinal) {
        return this.#cardinal = cardinal
    }

    // decodifica o comando enviado para o rover entenda e possa andar
    decodeCommand(command) {
         if (command == this.#Move) {
            this.#turn(this.#Move)
            return this.#moveFor
         }
         if (command == this.#Left) {
            this.#turn(this.#Left)
         }
         if (command == this.#Right) {
            this.#turn(this.#Right)
         }
         return 
    }

}

module.exports = { Control }

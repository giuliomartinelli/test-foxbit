class Decoder {
    // decodifica para transformar em um array a area
    area(decode) {
        let string = decode;
        return string.split(' ')
    }

    // decodifica para transformar em um array a sem espaço
    noSpace(decode) {
        let string = decode;
        let arr = string.split(' ')
        let res = []

        arr.map((element, i) => {
            if(element != " ") {
                res.push(element)
            }
        });

        res[0]  =   parseInt(res[0])
        res[1]  = parseInt(res[1])   

        return res
    }
    // decodifica para transformar em um array as cordenadas 
    coordinates(decode){
        let string = decode;
        return string.split('')
    }
}

module.exports = { Decoder }
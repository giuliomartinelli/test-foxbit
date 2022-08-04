# Teste Foxbit 🦊

Teste feito todo em JavaScript Node.js

## Instalação

O arquivo principal do projeto encontra-se na raiz do projeto chamado index.js

Foi utilizada uma única biblioteca para realizar os testes automatizados chamada Jest

Foi utilizado para a realização deste teste 

```node
node -v v18.6.0
npm  -v 8.13.2
```

Para realizar sua instalação é bem simples basta usar o seguinte comando

```node
npm install --dev
```

Para realizar os testes basta rodar o seguinte comando

```node
npm test
```
ou
```node
npx jest
```
Para inicializar a aplicação basta usar o seguinte comando 

```node
npm start
```
ou

```node
node index.js
```

## Sobe os testes automatizados
A respeito dos testes cobri toda a aplicação com Coverage de 100%

Podendo ser visualizado tanto quando executamos o Jest com os comandos mostrados anteriormente ou também na pagina que se encontra no caminho

```node
./__tests__/coverage/lcov-report/index.html
```

## Informação importante

A aplicação funciona via terminal então os comandos devem ser executados no terminal de preferencia no Linux ou MacOS

O Node não tem nenhuma biblioteca padrão para que seja feito o Input de forma sem ser assíncrona e com isto como como solicitado no teste não utilizei nenhuma biblioteca para realizar está tarefa apenas a de teste, portanto os valores de input estão todos mocados em variáveis no inicio do código no arquivo index.js

Segue o exemplo para fácil localização

```node
// INPUTS MOCADOS
const area              = "5 5"
const whereAreWe        = "1 2 N"
const coordinates       = "LMLMLMLMM"
const whereAreWe2       = "3 3 E"
const coordinates2      = "MMRMMRMRRM"
```

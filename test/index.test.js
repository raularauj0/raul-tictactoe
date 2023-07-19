
const jogodavelha = require('../src/index')
const verificarVitoria =  require('../src/index')

describe('jogo da velha', () => {
    test('retorna o tabuleiro vazio', () => {
       const tabuleiro =  [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
        expect(jogodavelha(tabuleiro)).toStrictEqual(tabuleiro)
    })
})

describe('teste para verificar a vitoria',() => {

})

const jogodavelha = require('../src/index')
const verificarVitoria =  require('../src/index')

describe('jogo da velha', () => {
    test('retorna o tabuleiro vazio', () => {
       const tabuleiro =  [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
        expect(jogodavelha()).toStrictEqual(tabuleiro)

    })
    test('retornar X na primeira posição', () => {
        const jogada = 1
         expect((jogodavelha(jogada)[0][0])).toStrictEqual("x") 
     })

    test('retornar X na segunda posição', () => {
        const jogada = 2
         expect((jogodavelha(jogada)[0][1])).toStrictEqual("x") 
     })
})

describe('teste para verificar a vitoria',() => {

})
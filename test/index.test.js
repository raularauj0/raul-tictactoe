const jogodavelha = require('../src/index')

describe('jogo da velha', () => {
    test('retorna o tabuleiro vazio', () => {
       const tabuleiro =  [
        ['','',''],
        ['','',''],
        ['','','']
    ]
        expect(jogodavelha()).toStrictEqual(tabuleiro)
    })
})
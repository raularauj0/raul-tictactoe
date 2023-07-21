function jogodavelha(jogada){ 
    var tabuleiro =  [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

     if ( jogada === 1 ){
        tabuleiro[0][0] = "x"
     }
    if ( jogada === 2 ){
        tabuleiro[0][1] = "x"
     }

    return tabuleiro
}

module.exports = jogodavelha
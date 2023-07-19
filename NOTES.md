## Description
O Tic Tac Toe (Jogo da velha)consite em dois jogadores que se revezam marcando os espaços em uma grade de três por três com X ou O. O jogador que conseguir colocar três de suas marcas em uma linha horizontal, vertical ou diagonal é o vencedor. É um jogo resolvido, com um empate forçado a assumir melhor jogada de ambos os jogadores.

## Objective
O jogo pode rodar em BOT mode para imprimir na tela todos os movimentos dos jogadores (com timeout 
de 2 segundos entre cada rodada) até alguém ganhar ou empatar.

## Cenários TDD

1 – Criação do tabuleiro: 

Game Board Creation... 
| |
-+-+-
| |
-+-+-
| |
Board Created.

The game will start with player X
2 – Player X ganhou na linha vertical

Player X:
X| |
-+-+-
X|O|
-+-+-
X| |O

PLAYER X WON!
3 – Player O ganhou na linha horizontal

Player O:
X| |X
-+-+-
O|O|O
-+-+-
X| |

PLAYER O WON!
4 – Player X ganhou com uma linha diagonal

Player X:
X| |
-+-+-
O|X|
-+-+-
O| |X

PLAYER X WON!

5 – Jogo termina com um empate

Player X:
X|O|X
-+-+-
O|O|X
-+-+-
X|X|O

GAME ENDS WITH A DRAW!


## Domain 

- Existem duas opções de jogadores (X,O)

- O jogo exige um tabuleiro 3x3, 9 posições

- O jogador que inicia a jogada é o "X"

- O Jogo acontece em turnos (após o X jogar o O joga)

- O primeiro jogar que fizer uma diagonal ou horizontal com 3 de seu simbolo ganha o jogo:
    - Caso o jogador X estiver com 3 X na horizontal o Jogador X vence
    - Caso o Jogador X estiver com 3 O na diagonal o Jpgador O vence

- Caso nenhum jogador consiga fazer uma diagonal ou horizontal o jogo resulta em empate
    - caso nenhum jogador fizer uma diagonal 3 posições de seu simbolo

## pomodoro 1
- descrever o domain
- criar o codigo base

-teste (retorna o tabuleiro vazio)
-criar o codigo em produção

-
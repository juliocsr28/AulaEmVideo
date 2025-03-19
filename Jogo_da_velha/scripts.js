const celulas = document.querySelectorAll(".celula")
let checarTurno = true
/*booleana*/

const JOGADOR_X = "X"
const JOGADOR_O = "O"

const COMBINACOES = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")) {
        /*se houver identificação de click em alguma celula*/
        jogar(event.target.id)
    }
})

function jogar(id) {
    const celula = document.getElementById(id)
    turno = checarTurno ? JOGADOR_X : JOGADOR_O
    /*checar vez do jogador*/
    celula.textContent = turno
    celula.classList.add(turno)
    /*verificar de qual jogador é a celula marcada*/
    checarTurno = !checarTurno
    /*fazer a variação de true e false*/
    checarVencedor(turno)
}

function checarVencedor(turno) {
    const vencedor = COMBINACOES.some((comb) => {
        return comb.every((index) => {
            
        })
    })

    
    /*se alguma/some das combinações do array for verdadeira ele retorna true*/
}
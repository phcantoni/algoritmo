function novaFuncao (){
    let mensagem = "oi"
    console.log (mensagem)
}
novaFuncao ()


// -----------------------------------------------------------------------


let meuNome = "Paulo"
function mostrarNome(nome) {
    console.log (nome)
}
mostrarNome (meuNome)


// -----------------------------------------------------------------------


// let minhaIdade = 27
// let minhaMusica = "rap"
// function sobreMim (nome, idade, musica) {
//     console.log (nome)
//     console.log (idade)
//     console.log (musica)
// }
// sobreMim (meuNome, minhaIdade, minhaMusica)

let funcaoTres = {
    nome: "paulo",
    idade: 27,
    musica: "rap"
}
function sobreMim (info) {
    console.log (info)
}
sobreMim (funcaoTres)


// ----------------------------------------------------------------------


let meuFilme = "genio indomavel"
let minhaMusica = "amores, vicios e obsessoes"

function filmeEMusica (filme, musica) {
    console.log (filme)
    console.log (musica)
}
filmeEMusica (meuFilme, minhaMusica)


// ----------------------------------------------------------------------

let n1 = 7
let n2 = 3

let triplo = n1 * n2

function resultado (vezesTres) {
    console.log (vezesTres)
}
resultado (triplo)


// ----------------------------------------------------------------------


let verdade = false
function verificacao (resposta) {
    if (resposta == true){
        console.log ("a variável é verdadeira")
    } else {
        console.log ("a variável é falsa")
    }
}
verificacao (verdade)
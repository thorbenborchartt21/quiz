/* Quiz Inteligência Artificial  */

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "como descreve a tecnologia onde o utilizador, apesar de conseguir interagir esta num mundo que nao e real? ",
    alternativaA : "inteligencia artificial",
    alternativaB : "realidade aumentada",
    alternativaC : "realidade virtual",
    correta      : "realidade virtual",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "em que ano se comecou a estudar a inteligencia artificial?",
    alternativaA : "2012",
    alternativaB : "1952",
    alternativaC : "1972",
    correta      : "1952",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "ray kurzweil e um dos pioneiros das novas tecnologias. em que ano ele acredita que a inteligencia artificial vai estar ao nivel de humano adulto?",
    alternativaA : "2082",
    alternativaB : "2050",
    alternativaC : "2025",
    correta      : "2050",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "onde pode ser criada a inteligencia artificial?",
    alternativaA : "no robo sophia",
    alternativaB : "nos relogios",
    alternativaC : "em todas estas e mais...",
    correta      : "em todas estas e mais...",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "'a inteligincia e mais perigosa do que as armas nucleares'. quem fez esta informaçao?",
    alternativaA : "Stephen hawking",
    alternativaB : "Bill Gates",
    alternativaC : "Elon musk",
    correta      : "Elon musk",

}



const q6 = {
    numQuestao   : 6,
    pergunta     : "e quem afirmou que a 'a inteligencia artificial pode ser melhor ou pior coisa da humanidade?",
    alternativaA : "Marcelo rebelo de sous",
    alternativaB : "Bill Gates",
    alternativaC : "Stephen hawking",
    correta      : "Stephen hawking",

}

const q7 = {
    numQuestao   : 7,
    pergunta     : "em que filme o hal 9000 se recusa a abrir a porta da nave ao comandante dave bowmen?",
    alternativaA : "guerra das estrelas ",
    alternativaB : "espaco 1999",
    alternativaC : "2001 uma odisseia no espaço",
    correta      : "2001 uma odisseia no espaço",
    
}


const q8 = {
    numQuestao   : 8,
    pergunta     : "neste filme, 2001 uma odisseia no espaço,o que representa este dialogo?",
    alternativaA : "falta de capacidade negocial do comandante",
    alternativaB : "o perigo de um computador dotade IA assumir o controlo para concluir a missao para o qual foi programado falta de capacidade negocial do comandante ",
    alternativaC : "os perigos de uma avaria de um computador no espaço",
    correta      : "o perigo de um computador dotade IA assumir o controlo para concluir a missao para o qual foi programado falta de capacidade negocial do comandante ",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "o que e o teste de turing?",
    alternativaA : "um teste para poder utilizar viaturas autonomas ",
    alternativaB : "um teste para distinguir se estamos a ter uma conversa com um computador ou um humano",
    alternativaC : "um teste para robos exercerem atividades turisticas",
    correta      : "um teste para distinguir se estamos a ter uma conversa com um computador ou um humano",

}

const q10= {
    numQuestao   : 10,
    pergunta     : "quem criou a sophia ?",
    alternativaA : "A Google ",
    alternativaB : "Boston dynamics ",
    alternativaC : "Hanson robotics",
    correta      : "Hanson robotics",

}



// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5,q6,q7,q8,q9,q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}
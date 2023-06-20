var NomeQuiz = document.getElementById('NomeQuiz')
var IMGQuiz = document.getElementById('IMGQuiz')
var PergEscrita = document.getElementById('PerguntaEscrita')
var IMGQuestao = document.getElementById('LinkIMGPergunta')
var Resp1 = document.getElementById('Resp1')
var Resp2 = document.getElementById('Resp2')
var Resp3 = document.getElementById('Resp3')
var Resp4 = document.getElementById('Resp4')
var certo = document.getElementById('RespCerta')

var QuantQuestoes = document.getElementById('QuantQuestoes')

var Quizes = []
Quizes = JSON.parse(localStorage.getItem('BDQuizes'))
var Contador = 0

if (Quizes == null) {
    Quizes = []
}

var Quiz = {
    nome: NomeQuiz.value,
    QuizCapa: IMGQuiz.value,
    Infos: []
}

function BotaoCadastrarQuiz() {
    Quiz.nome = NomeQuiz.value
    Quiz.QuizCapa = IMGQuiz.value

    if (Quiz.Infos.length < QuantQuestoes.value) {
        var InfosPerguntaERespostas = {
            Pergunta: PergEscrita.value,
            Respostas: [
                Resp1.value,
                Resp2.value,
                Resp3.value,
                Resp4.value
            ],
            respcerta: certo.value
        }
   
        Quiz.Infos.push(InfosPerguntaERespostas)
    }else {
        console.log(Quiz);
        alert('Numero maximo definido atingido ')
    }
}

function CarregarImagem() {
    document.getElementById('CapadoQuiz').src = document.getElementById('IMGQuiz').value
}
function CarregarImagemPerg(){
    document.getElementById('IMGQuestões').src = document.getElementById('LinkIMGPergunta').value
}


function CadastrarQuiz() {
    localStorage.setItem('BDQuizes',JSON.parse)
    alert('Quiz cadastrado!')
    location.href = '../TelaInicial/TelaInicial.html'
}


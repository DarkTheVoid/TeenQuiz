//! Vetor 1
//VetorQuiz = JSON.parse(localStorage.getItem('BDQuizes')) || BancoDados()

//BancoDados(){
  //  var dados = []

//   localStorage.setItem('BDQuizes', JSON.s)
//}


VetorQuiz.forEach(Quiz => {
    Quizes.innerHTML += `
    <a onclick="Jogar('${Quiz.nome}')" class="card" >
    <img src= ${Quiz.Capa} alt="">
    <h2> ${Quiz.nome}</h2>
    `

})

function Jogar(Quiz){
    localStorage.setItem('BDQuizes', Quiz)
    location.href = 'TeenQuiz.html'
}

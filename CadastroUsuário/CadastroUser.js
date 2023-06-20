Perfil = []

Perfil = JSON.parse(localStorage.getItem('BCUser'))

if (Perfil == null) {
    Perfil = []
}



function CadastroUser() {
    Nome = document.getElementById('NomedeUser').value
    Email = document.getElementById('email').value
    Senha = document.getElementById('Senha').value
    SenhaConfir = document.getElementById('ConfirmarSenha').value

    if (Nome == '' || Email == '' || Senha == '' || SenhaConfir == '') {
    alert('Por favor, preencha todos os campos')
    }

    if (Senha != SenhaConfir){
        alert('Senhas não compátiveis')
        exit
    }

    var ObjetoUser = {
        nome: Nome,
        email: Email,
        senha: SenhaConfir 
    }
    
    Perfil.push(ObjetoUser)
    localStorage.setItem('BCUser', JSON.stringify(Perfil) )

    alert('Usuário cadastrado!')
    location.href = '../Telainicial/TelaInicial.html'
}
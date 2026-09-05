function mostrarMensagem() {

    const mensagem = document.getElementById("mensagem");

    mensagem.textContent =
        "🍿 Minha recomendação: escolha um filme e aproveite!";
}


function enviarFormulario(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    const resposta = document.getElementById("resposta");

    resposta.textContent =
        "Obrigado pela mensagem, " + nome + "!";

}
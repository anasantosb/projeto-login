const formCadastro = document.getElementById("cadastroForm");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const novoUsuario = document.getElementById("novoUsuario");
const novaSenha = document.getElementById("novaSenha");
const confirmaSenha = document.getElementById("confirmaSenha");
const mensagem = document.getElementById("mensagem");

formCadastro.addEventListener("submit", (e) => {
    e.preventDefault();

    if ( nome.value === "" || email.value === "" || novoUsuario.value === "" || novaSenha.value === "" || confirmaSenha.value === "") {
        mensagem.style.color = "#ff5252";
        mensagem.textContent = "Preencha todos os campos!";
    } else if (novaSenha.value !== confirmaSenha.value) {
        mensagem.style.color = "#ff5252";
        mensagem.textContent = "As senhas não conferem.";
    } else {
        mensagem.style.color = "#03dac6";
        mensagem.textContent = "Cadastro realizado com sucesso!";
        formCadastro.reset();
    }
});
const form = document.getElementById("loginForm");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (e) => {
   e.preventDefault(); // evita o recarregamento da página

   if (usuario.value === "" || senha.value === "") {
      mensagem.style.color = "#ff5252";
      mensagem.textContent = "Preencha todos os campos!";
   } else if (usuario.value === "adm" && senha.value === "123") {
      mensagem.style.color = "#03dac6";
      mensagem.textContent = "Login realizado com sucesso!";
      sessionStorage.setItem("usuarioLogado", usuario.value);
      
      setTimeout(() => {
         window.location.href = "dashboard.html";
      }, 1000);
      
   } else {
      mensagem.style.color = "#ff5252";
      mensagem.textContent = "Usuário ou senha incorretos.";
   }
});

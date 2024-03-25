// app.js

// Supondo que você tenha um nome de usuário armazenado em uma variável chamada "username"
let username = "John";

// Função para atualizar o conteúdo do elemento HTML com o nome do usuário
function updateUsername() {
    let usernameElement = document.getElementById("username");
    usernameElement.textContent = username;
}

// Chame a função para atualizar o nome de usuário quando a página carregar
window.onload = function() {
    updateUsername();
};


// Exemplo de validação de formulário com JavaScript
const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
        event.preventDefault();
        alert("Por favor, insira um endereço de e-mail válido.");
    }
});

function isValidEmail(email) {
    // Implemente sua lógica de validação de e-mail aqui
    // Este é um exemplo simples de validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

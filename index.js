function calcularROI() {
    let conta = document.getElementById("conta").value;
    if (!conta || conta <= 0) {
        document.getElementById("resultado-roi").innerText =
            "Digite um valor válido.";
        return;
    }
    let economia = conta * 0.85;
    document.getElementById("resultado-roi").innerText =
        `Economia estimada: R$ ${economia.toFixed(2)} por mês`;
}

// modo claro e escuro

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// form

function validarForm(event) {
    event.preventDefault();

    let nome = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let tel = document.querySelector("input[type='tel']").value;

    if (!nome || !email || !tel) {
        alert("Preencha todos os campos!");
        return;
    }
    if (!email.includes("@")) {
        alert("Email inválido!");
        return;
    }
    alert("Formulário enviado com sucesso!");
}

// funcao do Faq

function toggleFaq(btn) {
    let panel = btn.nextElementSibling;

    panel.style.display =
        panel.style.display === "block" ? "none" : "block";
}
function validaForm() {
    const email = document.getElementById('email');
    let emailText = email.value.trim();
    let valido = true;
    if (!emailText.includes("@")) {
        valido = false;
    }

    let partesEmail = emailText.split("@");
    if (partesEmail[0].lenght < 7 && partesEmail[0].lenght > 127) {
        valido = false;
    }

    const nome = document.getElementById("nome");
    let nomeText = nome.value.trim();
    if (nomeText.lenght < 3) {
        console.log("Nome  atende ao tamanho mínimo")
        valido = false;
    }

    const textArea = document.getElementById("mensagem");
    let textTexto = textArea.value.trim();
    if (textTexto === "") {
        valido = false;
        alert("Texto não pode ser vazio!")
    }
    if (valido)
        alert("recebemos sua mensagem, em breve entraremos em contato")
}

document.addEventListener("submit", function (e) {

    e.preventDefault();
    validaForm();
})
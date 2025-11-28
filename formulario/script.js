 function validaForm() {
            const email = document.getElementById('email');
            let emailText = email.value.trim();
            let valido = false;
            if (emailText.includes("@")) {
                valido = true; 
            } else {
                valido = false;
            }

            let partesEmail = emailText.split("@");
            if (partesEmail[0].lenght >= 7 && partesEmail[0].lenght <= 127) {
                valido = true;
            } else {
                valido = false;
            }

            const nome = document.getElementById("nome");
            let nomeText = nome.value.trim();
            if (nome.lenght >= 3) {
                console.log("Nome  atende ao tamanho mínimo")
                valido = true;
            }
            else {
                valido = false;
            }

            const textArea = document.getElementById("mensagem");
            let textTexto = textArea.value.trim();
            if (textTexto !== "") {
                     console.log("Texto não pode ser vazio!")
                valido = true;
            } else {
                valido = false;
            } 

            alert("recebemos sua mensagem, em breve entraremos em contato")
        }

        document.addEventListener("submit", function (e) {

            e.preventDefault();
            validaForm();
        })
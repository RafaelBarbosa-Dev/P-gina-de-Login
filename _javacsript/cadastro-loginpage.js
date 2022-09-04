function cadastrar() {
    window.alert("Parabêns! Seu Login foi Efetuado!")
}

const passwordInput = document.getElementById("password")
const olho = document.getElementById("olho")

function olhoclick() {
    let inputTypeIsPassword = passwordInput.type == "password"

    if (inputTypeIsPassword) {
        showpassword()
    } else {
        hidepassword()
    }
}

function showpassword() {
    passwordInput.setAttribute("type","text")
    olho.setAttribute("src" , "Olho Aberto.png")
}
function hidepassword() {
    passwordInput.setAttribute("type","password")
    olho.setAttribute("src" , "Olho Fechado.png")
}
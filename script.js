//botao
let btn = document.querySelector(".btn")

//gerar numero aleatorio
let na =  parseInt(Math.random() * 11)

//resultado
let resultado = document.querySelector(".resultado")

//vida
let vida = 5

let heart1 = document.querySelector("#heart1")
let heart2 = document.querySelector("#heart2")
let heart3 = document.querySelector("#heart3")
let heart4 = document.querySelector("#heart4")
let heart5 = document.querySelector("#heart5")


btn.addEventListener("click", function botao() {
    //valor do input
    let value = document.querySelector(".value").value

    //validar se o numero esta correto
    if (value == na) {
        resultado.style.color = "white"
        resultado.innerHTML = "boa, você acertou"
        setTimeout(() => {
            resultado.style.color = "transparent"
            resultado.innerHTML = "a"
            window.location.reload()
          }, "3300")
    }

    if (value != value || value < 0 || value > 10 || value != parseInt(value)){
        resultado.style.color = "white"
        resultado.innerHTML = "Digite um valor valido"
        setTimeout(() => {
            resultado.style.color = "transparent"
            resultado.innerHTML = "a"
          }, "1100")
    }
    else {
        if (value != na) {
            if (vida === 0) {
                vida = 0
            }
            else {
                vida--
                if (vida == 4) {
                    heart5.remove()
                    resultado.style.color = "white"
                    resultado.innerHTML = "você Errou"
                }
                if (vida == 3) {
                    heart4.remove()
                    resultado.style.color = "white"
                    resultado.innerHTML = "você Errou"
                }
                if (vida == 2) {
                    heart3.remove()
                    resultado.style.color = "white"
                    resultado.innerHTML = "você Errou"
                }
                if (vida == 1) {
                    heart2.remove()
                    resultado.style.color = "white"
                    resultado.innerHTML = "você Errou"
                }
                if (vida == 0) {
                    heart1.style.opacity = "0"
                    resultado.style.color = "white"
                    resultado.innerHTML = "você perdeu"
                    setTimeout(() => {
                        window.location.reload()
                      }, "2800")
                }
            }
        }
    }
})
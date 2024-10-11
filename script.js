const button = document.querySelector("button")
button.addEventListener("click", multiplicar)

function multiplicar() {
    const numero1 = Number(document.querySelector("#numero-1").value)
    const numero2 = Number(document.querySelector("#numero-1").value)
    const numero3 = Number(document.querySelector("#numero-1").value)

    const resultado= document.querySelector(".resultado")
    resultado.innerHTML=`soma: ${numero1*numero2*numero3}`
}
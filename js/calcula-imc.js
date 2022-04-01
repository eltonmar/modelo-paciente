var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var tdAltura = paciente.querySelector(".info-altura")

    var peso = tdPeso.textContent
    var altura = tdAltura.textContent

    var tdIMC = paciente.querySelector('.info-imc')

    var pesoVal = validaPeso (peso)
    var alturaVal = validaAltura (altura)

    

        if (!pesoVal){
            console.log("Peso inválido.")
            pesoVal = false
            tdPeso.textContent = 'Peso inválido'
            paciente.classList.add('paciente-invalido')
        }
        
        if (!alturaVal){
            console.log("Altura inválida.")
            alturaVal = false
            tdAltura.textContent = 'Altura inválida.'
            paciente.classList.add('paciente-invalido')
        }

        if (pesoVal && alturaVal) {
            var imc = calculaImc(peso, altura) 
            tdIMC.textContent = imc
        }

    function calculaImc(peso, altura) {
        var imc = 0

        imc = peso / (altura * altura) 

        return imc.toFixed(2)
    }
}

function validaPeso (peso){ 
    if (peso >= 0 && peso < 700){
        return true
    } else {
        return false
    }
}
function validaAltura (altura) {
    if (altura >= 0 && altura <= 3){
        return true
    } else {
        return false
    }
}

/*
var titulo = document.querySelector("#titulo")
titulo.textContent = "Nutricionista"

titulo.addEventListener('click', function () {

})*/


var pacientes = document.querySelectorAll('.paciente')

var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function(event){
    /*var alvoEvento = event.target
    var paiDoAlvo = alvoEvento.parentNode
    paiDoAlvo.remove()*/
    
    setTimeout(function(){
        event.target.parentNode.remove()

    }, 500)
    event.target.parentNode.classList.add('fadeOut')
    
    
})
/*
pacientes.forEach(function(paciente) {
    paciente.addEventListener('dblclick', function () {
        //console.log('Fui clicado com duplo.')
        this.remove()
    })
});*/

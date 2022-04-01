
var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault()
    var form = document.querySelector("#form-adiciona")

    //extrai informações do form
    var paciente = obtemPacienteDoFormulario(form) 

    //cria mo html o Tr e o Td para o paciente
    

    //para validar o paciente

    var erros = validaPaciente(paciente)

    if (erros.length > 0) {
        console.log('Paciente inválido.')
        
        exibeMensagensDeErro (erros)
        return
    }  

    //adicionando o paciente na tabela
    

    //adicionando do JSON
    adicionaPacienteNaTabela (paciente)

    form.reset()
    var mensagensErro = document.querySelector('#mensagens-erro')
    mensagensErro.innerHTML =''
})

function adicionaPacienteNaTabela (paciente) {
    var pacienteTr = criarTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
  
//extrai informações do form

function obtemPacienteDoFormulario(form) {
var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura:form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value,form.altura.value,)
} 
return paciente
}

//cria mo html o Tr e o Td para o paciente

function criarTr (paciente) {
    var pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(criarTd(paciente.imc,"info-imc"))

    return pacienteTr
}

function criarTd (dado, classe){
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    
    return td
}

// validar se o paciente está ok

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) 
    erros.push('O Nome não pode ficar em braco.')


    if (!validaPeso(paciente.peso)) 
    erros.push('Peso inválido');

    if (!validaAltura(paciente.altura)) 
    erros.push('Altura inválida');

    if (paciente.gordura.length == 0) 
    erros.push('O percentual de gorduda está em branco.')

    if (paciente.peso.length == 0) 
    erros.push('O peso está em branco.')

    if (paciente.altura.length == 0) 
    erros.push('A altura está em branco.')

    return erros
}



function exibeMensagensDeErro (erros) {
    var ul = document.querySelector('#mensagens-erro')
    ul.innerHTML =''

    /*for (i = 0; i < erros.length; i++) {
        var erro = erros[i]
        
    }*/

    erros.forEach(function(erro) {
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    });

}
    /*var nomeTd = document.createElement('td')
    nomeTd.classList.add('info-nome')
    nomeTd.textContent = paciente.nome
    
    var pesoTd = document.createElement('td')
    pesoTd.classList.add('info-peso')
    pesoTd.textContent = paciente.peso
        
    var alturaTd = document.createElement('td')
    alturaTd.classList.add('info-altura')
    alturaTd.textContent = paciente.altura    

    var gorduraTd = document.createElement('td')
    gorduraTd.classList.add('info-gordura')
    gorduraTd.textContent = paciente.gordura
    
    var imcTd = document.createElement('td')
    imcTd.classList.add('info-imc')
    imcTd.textContent = paciente.imc*/
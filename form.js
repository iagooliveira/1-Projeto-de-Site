var botaoAdicionar = document.querySelector("#adicionar-paciente");
//botaoAdicionar.addEventListener("click", function(){
//    console.log("Chorando se foi");
//});
/*Este tipo de coisa não funciona, pois em um comportamento padrão do HTML, para um elemento dentro de um form,
é enviar os dados de um form para outra página. Como não fora especificada nenhuma página,ele só esta recarregando
a página e limpando o formulário. Ele acaba executando a função rapidamente, e , logo após isso, recarrega a página,
nao salvando os dados.  O comportamento padrão do botão que se encontra no formulário é limpar os dados preenchidos 
nos campos, recarregar a página e enviar os dados. Nós queremos evitar esse comportamento padrão. */

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();/*evita o comportamento padrão do navegador, impedidno que o formulário seja limpo e a página
    recarregada. */
    var form = document.querySelector("#form-adiciona")/*acessando os forms com querySelector, posso acessar os inputs
    pelos ID´s dos inputs.*/

    var paciente = obtemPacienteDoFormulario(form); //variavel paciente será o objeto "dadosPaciente" que é uma função

    var lista = validaPaciente(paciente);
    console.log(`Tamanho dos erros: ${lista.length}`)
    
    if(lista.length > 0){
        exibeErros(lista);
        return; //com o return vazio, o programa sai da funçao do evento do botao;
    }
    
    //adiciona o paciente na tabela
    adicionaPacienteNaTabela(paciente)

    form.reset(); //reseta o formulário

    document.querySelector("#mensagem-erro").innerHTML = "";//exclui as mensagens de erro apos o paciente ser validado
    
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); /*Coloca os tr's dentro de um tbody, afinal, a tabela esta dentro de um tbody,
    portanto, para completar o acrescimo da pessoa a tabela, é preciso fazer isso.*/

}

function obtemPacienteDoFormulario(form){
    var dadosPaciente = { //objeto dadosPaciente que extrai informaçoes do form
        nome: form.nome.value, //"nome" é o ID do form, no html
        peso: form.peso.value, //"peso" é o ID do form, no html 
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return dadosPaciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

    //hierarquizando os tr's e td's para criar um HTML
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); //coloca os td's como elementos filhos do tr, criando um documento HTML válido
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));//acrescenta um elemento filho ao pacienteTr, que é o elemento pai
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))//


    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");//cria o elemento
    td.textContent = dado;//coloca o dado dentro do elemento
    td.classList.add(classe);//adiciona uma classe ao objeto
    
    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if (paciente.peso <= 400 && paciente.altura <= 3.00)
    {
        paciente.imc.textContent = calculaImc(paciente.peso, paciente.altura);
        console.log("Calculou imc");

    }//fim do if 

    if(paciente.peso > 400 || paciente.peso < 0)
    {
        erros.push("peso invalido");
        console.log("peso invalido");
                
    }

    if (paciente.altura > 3.00 || paciente.altura < 0)
    {
        erros.push("altura invalida");
        console.log("altura invalida");
    }

    if (paciente.gordura.length == 0)
    {
        erros.push("Campo gordura nao pode estar em branco!");
        console.log("gordura em branco")
    }

    if (paciente.nome.length == 0)
    {
        erros.push("Campo nome nao pode estar em branco");
        console.log("campo nome em branco")
    }

    if (paciente.peso.length == 0)
    {
        erros.push("Campo peso nao pode estar em branco");
        console.log("Campo peso em branco");
    }

    if (paciente.altura.length == 0)
    {
        erros.push("Campo altura nao pode estar em branco!");
        console.log("campo altura em branco");
    }

    

    return erros;
}

function exibeErros(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){ //para cada posiçao do array, o parametro da funçao sera executado. como se fosse erro[i]
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
        
    });

}

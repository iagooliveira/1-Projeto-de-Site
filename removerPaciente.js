//var pacientes = document.querySelectorAll(".paciente");

/*pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        var pergunta = window.confirm(`Deseja remover o paciente: ${paciente.querySelector(".info-nome").textContent}?`);
        if (pergunta == true){
            console.log(`o paciente ${paciente.querySelector(".info-nome").textContent} foi removido`);
            this.remove();//a propiedade do querySelector "remove()" permite que o HTML do objeto seja removido
            //this é o dono do evento, o cara que ta escutando o evento
            //para acessar o dono do evento, em que o evento está atrelado, utilizaremos uma palavra reservada do JavaScript chamada this:
            //O this é uma palavra de contexto ligada com quem acionou o evento, a quem o evento está atrelado. Como o evento está atrelado ao paciente, o this fará referência a ele.
            /*Mas nem tudo é perfeito, e essa implementação tem um pequeno defeito: ao adicionarmos um paciente pelo formulário, não conseguimos removê-lo. Isso porque o novo paciente não estava na página no momento em que o remover-paciente.js foi carregado (lembrando que o navegador abre a página e vai lendo o seu HTML, carregando os nossos scripts logo depois).
            Então, o script seleciona somente os pacientes que já estão na página. Ao adicionar um ou mais pacientes, 
            eles não estão escutando o evento! No momento em que um paciente for adicionado, 
            deveríamos colocá-lo para ouvir o evento e executar o mesmo código, mas aí estaríamos duplicando código, 
            que já sabemos não ser uma boa prática.*/
        //}
    //});
//});

/*Para resolver o problema da remoção de pacientes, vamos nos aproveitar de uma característica do JavaScript 
chamada Event Bubbling, ou "borbulhamento" de eventos. Quando escutamos um evento no JavaScript, 
ele na verdade não acontece só no dono do evento (no nosso caso, na linha do paciente), 
ele acontece também no pai do paciente, no pai do pai do paciente, e assim vai subindo.
Na nossa estrutura, ao darmos um duplo clique na <tr> do paciente, o pai (<tbody>) também escuta o evento, 
assim com a tag <table>, até chegar no <body>.*/

var tabela = document.querySelector("#tabela-principal");

tabela.addEventListener("dblclick", function(event){
    /*para poder deletar TODOS os pacientes da tabela, foi necessário escutar o elemento pai de todos os elementos da 
    tabela, a table. Mas, para poder saber o elemento especifico selecionado é necessário utilizar o parametro "event",
    a fim de remover quem foi clicado. Isso se da pela propiedade "target", que irá selecionar o menor filho do elemento pai.
    neste caso aqui, os td's, que sao os peso,altura, nome..., individualmente. Não se quer isso, e sim remover o paciente como
    um todo, ou seja, os tr's. Para selecionar os tr's, utiliza-se a propiedade "parentNode". esta propiedade seleciona
    o pai do evento com target.
    */
   
   var alvoEvento = event.target;
   var paiDoAlvo = alvoEvento.parentNode;
   var pergunta = window.confirm
   (`Deseja remover o paciente ${paiDoAlvo.querySelector(".info-nome").textContent} da tabela?`);
   
   
   if (pergunta == true)
    {   
        paiDoAlvo.classList.add("fade-out");
        setTimeout(function(){paiDoAlvo.remove()},600)//600 milisegundos, 0,6s
    }

/*Após o duplo clique em algum elemento da tabela, a linha desaparecerá instantaneamente. Por quê?
Como o computador é muito rápido, o browser processa as linhas do script instantaneamente. 
A classe é adicionada e logo em seguida o elemento é removido, por isso não conseguimos ver a transição acontecendo. 
Porém, devemos remover a linha da tabela só após o término da transição. Devemos pedir para o JavaScript aguardar 
meio segundo (tempo que colocamos para a transição ocorrer) para remover a linha.
Quando queremos aguardar um tempo, devemos usar a função setTimeout. Será passada como parâmetro uma função anônima 
com quanto tempo deve ser aguardado:*/
    
});
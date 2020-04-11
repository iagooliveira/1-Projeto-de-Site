var botao = document.querySelector("#buscar-pacientes");

botao.addEventListener("click", function(evento){
    var xhr = new XMLHttpRequest();//cria um objeto que faz um "request" de http e XML

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");//esta função abre a conexao com o endereço desejado com o metodo GET

    xhr.addEventListener("load", function(){ //Obtendo e exibindo a resposta da requisição
        /*Para os dados serem exibidos, após o envio da requisição, devemos escutar um evento específico que é acionado 
        quando a requisição termina e a sua resposta é carregada. Ao escutarmos o evento, carregaremos a resposta da 
        requisição - que no caso, serão nossos dados. Esse evento é o load, característico do XMLHttpRequest:*/
        //E para acessarmos os dados da resposta, usaremos a propriedade responseText do XMLHttpRequest. Para testarmos, podemos guardá-la em uma variável, e depois imprimi-la no console do navegador:
        var msgErro = document.querySelector("#msg-erro");
        if (xhr.status == 200)
        {//se a requisiçao foi feita com sucesso, (código 200), entao exiba os pacientes.
            msgErro.classList.add("invisivel");
            var resposta = xhr.responseText;
            //console.log(typeof resposta)//retorna uma string
            var pacientes = JSON.parse(resposta);//converte JSON para objetos javascript, neste caso uma array
            //console.log(typeof pacientes)// --> object
            pacientes.forEach(function(i){
                adicionaPacienteNaTabela(i);
            })
        }else{
            msgErro.classList.remove("invisivel");
            msgErro.classList.add("msgerro");
            msgErro.textContent = `erro ${xhr.status}, ${xhr.responseText}. Nao foi possivel achar a url para a requisiçao.`;
            
        }
    })

    xhr.send();//pega a requisiçao e envia mas n exibe os dados, sendo necessario fazer a resposta da requisiçao
})
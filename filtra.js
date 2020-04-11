var campoFiltro = window.document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
    console.log(this.value)
                                                                   
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length  > 0)
    {//se tiver algo digitado, a filtragem é feita
        for (var i = 0; i < pacientes.length; i++ ){
            var pessoa = pacientes[i];
            var nome = pessoa.querySelector(".info-nome").textContent;
            var expressao = new RegExp(this.value, "i");/*Nós poderemos passar dois parâmetros para o objeto, sendo o primeiro o texto que queremos buscar, 
            no caso, o termo digitado no campo de busca (this.value), e o segundo parâmetro será referente às características dos termos que devem ser buscados. 
            É importante que a busca não seja case sensitive, que é a diferenciação entre letras maiúsculas e minúsculas. 
            Devem ser buscadas tanto letras maiúsculas como minúsculas, e passaremos a letra "i" como segundo parâmetro, 
            para indicarmos a opção case insensitive*/
            console.log(nome);
            
            if(!expressao.test(nome) ){ //a expressao regular testa, atraves do metodo "test", se no "nome", parametro passado, a alguma letra correspondente, e retorna TRUE 
                pessoa.classList.add("invisivel")
            } else{
                pessoa.classList.remove("invisivel");
            }
        }
    }else{
        for (var i = 0; i < pacientes.length; i++){
            var pessoa = pacientes[i];
            pessoa.classList.remove("invisivel")
        }
    }

})//este tipo de evento escuta a digitaçao dentro do campo input no html, a cada letra este evento é chamado
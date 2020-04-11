//var titulo = document.querySelector("h1"); -> Não é uma boa prática, pois se mudarem a tag, vai ter que mudar todo o código também
/*insirindo-se se o elemento, ele retorna o primeiro da lista. para retornar com uma classe, 
poderia ser "h1.exemplo". com uma id: "#iddoelemento".
Get the first <a> element in the document that has a "target" attribute: 
document.querySelector("a[target]");*/
//console.log(titulo); -> retornaria: <h1>Aparecida Nutrição</h1>
//console.log(titulo.textContent); -> retornaria: Aparecida Nutrição; só os textos sem as tags.
//titulo.textContent = "Banana"; -> modifica o conteudo dentro das tags, modificando somente o texto.Altera o conteúdo de texto.
/*
	innerText -> Retorna somente o texto, sem formatações ou elementos html.
    innerHtml -> Retorna o texto, COM formatações e COM elementos html.
    textContent -> Retorna o text COM formatações, mas sem os elementos html. Formataçoes: espaço extra, e etc..
*/	

/* aqui esta um exemplo de escutador de eventos.Esta funcçao recebe dois parâmetros, o evento
que se deseja escutar e uma função, neste caso uma função anônima. Ao clicar no título, uma mensagem
aparecerá no console de desenvolvedor. */


//var paciente = document.querySelector("#primeiro-paciente");//seleciona o id do primeiro paciente. seleciona o tr
//var tdPeso = paciente.querySelector(".info-peso"); //seleciona o td,filho de tr, de classe .info-peso
//var peso = tdPeso.textContent; //seleciona o conteúdo de texto dentro da td;

//var tdAltura = paciente.querySelector(".info-altura");
//var altura = tdAltura.textContent;

//var tdIMC = paciente.querySelector(".info-imc");

var calculaImc = (function () {                //variavel protegida através de uma funçao anônima.
    var y = function(peso, altura){
        var x = peso / (altura * altura)
        return x.toFixed(2)
    } 
    return y;
})();


var paciente = document.querySelectorAll(".paciente");

for (var i = 0; i < paciente.length; i++)
{
    var pessoa = paciente[i];
    var tdPeso = pessoa.querySelector(".info-peso").textContent;
    var tdAltura = pessoa.querySelector(".info-altura").textContent;
    var tdIMC = pessoa.querySelector(".info-imc");
    

    if (tdPeso <= 400 && tdAltura <= 3.00)
        {
            tdIMC.textContent = calculaImc(tdPeso, tdAltura);

        }//fim do if 
        else if (tdPeso > 400 || tdPeso <= 0){
                tdIMC.textContent = "Peso inválido"; 
                //pessoa.style.color = "red";
                //pessoa.style.backgroundColor = "lightcoral";
                pessoa.classList.add("paciente-invalido");
                

            } //fim do elseif
            else if (tdAltura > 3.00 || tdAltura <= 0){
                    tdIMC.textContent = "Altura inválida";
                    //pessoa.style.color = "red";  //muda o estilo da cor da fonte.

                   /* pessoa.style.backgroundColor = "lightcoral";   muda a cor de fundo. Não utilizar background-color, 
                    pois o javascript nao aceita. Ao invés disso, tirar o "-" e colocar uma letra maiúscula no lugar.
                    Não é uma boa prática alterar o CSS assim, por isso se cria uma classe em CSS onde o JavaScript
                    poderá acessa-la e modificar os estilos. */

                    pessoa.classList.add("paciente-invalido"); /*A propiedade ClassList retona todas as classes daquele objeto.
                    Dentro de ClassList, tem-se o método "add", o qual permite aadicionar uma classe àquele objeto.
                    Aqui fora adicionada uma classe previamente criada no CSS. Ao executar esse método, sera adicionada
                    a referida classe CSS à classe "Paciente." */

                }
        
} 
        





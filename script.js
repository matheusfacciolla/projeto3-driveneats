/* declarando variaveis */

let pratoEscolhido = null;
let bebidaEscolhido = null;
let sobremesaEscolhido = null;

let temPrato = false;
let temBebida = false;
let temSobremesa = false;

let tabelaDePreco = {
    "prato1": 12.90, 
    "prato2": 14.90,
    "prato3": 16.90,
    "bebida1": 4.90,
    "bebida2": 5.90,
    "bebida3": 6.90,
    "sobremesa1": 3.90,
    "sobremesa2": 6.90,
    "sobremesa3": 9.90,
};

let tabelaDeNome = {
    "prato1": 'Frango Yin Yang', 
    "prato2": 'Hamburger',
    "prato3": 'Pizza',
    "bebida1": 'Coquinha gelada',
    "bebida2": 'Guaraná gelado',
    "bebida3": 'Pepsi gelada',
    "sobremesa1": 'Sorvete',
    "sobremesa2": 'Pudim',
    "sobremesa3": 'Bolo',
};

/* Selecionando pratos */

function escolherPrato(opcaoPrato){

    const selecionado = document.querySelector(".opcao__prato.selecionado");

    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
    }

    const prato = document.querySelector("#"+opcaoPrato);
    prato.classList.toggle("selecionado");

    document.querySelector("#icon-prato1").style.display = "none";
    document.querySelector("#icon-prato2").style.display = "none";
    document.querySelector("#icon-prato3").style.display = "none";
    const icon = prato.getElementsByTagName("ion-icon")[0];
    icon.style.display = "block";

    temPrato = true;
    pratoEscolhido = opcaoPrato;

   if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

/* Selecionando bebidas */

function escolherBebida(opcaoBebida){
    
    const selecionado = document.querySelector(".opcao__bebida.selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
    }
    const bebida = document.querySelector("#"+opcaoBebida);
    bebida.classList.toggle("selecionado");   

    document.querySelector("#icon-bebida1").style.display = "none";
    document.querySelector("#icon-bebida2").style.display = "none";
    document.querySelector("#icon-bebida3").style.display = "none";
    const icon = bebida.getElementsByTagName("ion-icon")[0];
    icon.style.display = "block";

    temBebida = true;
    bebidaEscolhido = opcaoBebida;

    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

/* Selecionando sobremesas */

function escolherSobremesa(opcaoSobremesa){
    
    const selecionado = document.querySelector(".opcao__sobremesa.selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
    }
    const sobremesa = document.querySelector("#"+opcaoSobremesa);
    sobremesa.classList.toggle("selecionado");

    document.querySelector("#icon-sobremesa1").style.display = "none";
    document.querySelector("#icon-sobremesa2").style.display = "none";
    document.querySelector("#icon-sobremesa3").style.display = "none";
    const icon = sobremesa.getElementsByTagName("ion-icon")[0];
    icon.style.display = "block";

    temSobremesa = true;
    sobremesaEscolhido = opcaoSobremesa;

    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

/* Ativar Botão */

function ativarBotao(){   

    document.getElementById("botao").disabled = false;
    document.getElementById("botao").style.backgroundColor = "#32B72F";
    document.getElementById("botao").innerHTML = "Fechar pedido";
}

 /* modal */
 
 const modal = document.querySelector(".modal");
 const botaoConfirmar = document.querySelector(".botao-confirmar");
 const botaoFechar = document.querySelector(".botao-fechar");

function toggleModal() {

    modal.classList.toggle("mostrar-modal");
}

function windowOnClick(event) {

    if (event.target === modal) {
        cancelarCheckout();
    }
}

botaoFechar.addEventListener("click", cancelarCheckout);
window.addEventListener("click", windowOnClick);

/* checkout */

function checkout(){
    
    //PRATO

    let nomePrato = tabelaDeNome[pratoEscolhido];
    let precoPrato = tabelaDePreco[pratoEscolhido];
    let precoPratoString = precoPrato.toFixed(2).toString();

    let divPrato = document.createElement("div");
    divPrato.classList.add("item");
    
    let itemPrato = document.createElement("p");
    let precoItemPrato = document.createElement("p");
    
    itemPrato.appendChild(document.createTextNode(nomePrato));
    precoItemPrato.appendChild(document.createTextNode(precoPratoString.toString().replace(".", ",")));
    
    divPrato.appendChild(itemPrato);
    divPrato.appendChild(precoItemPrato);
    
    //BEBIDA

    let nomeBebida = tabelaDeNome[bebidaEscolhido];
    let precoBebida = tabelaDePreco[bebidaEscolhido];
    let precoBebidaString = precoBebida.toFixed(2).toString();

    let divBebida = document.createElement("div");
    divBebida.classList.add("item");
    
    let itemBebida = document.createElement("p");
    let precoItemBebida = document.createElement("p");
    
    itemBebida.appendChild(document.createTextNode(nomeBebida));
    precoItemBebida.appendChild(document.createTextNode(precoBebidaString.toString().replace(".", ",")));
    
    divBebida.appendChild(itemBebida);
    divBebida.appendChild(precoItemBebida);
    
    //SOBREMESA

    let nomeSobremesa = tabelaDeNome[sobremesaEscolhido];
    let precoSobremesa = tabelaDePreco[sobremesaEscolhido];
    let precoSobremesaString = precoSobremesa.toFixed(2).toString();
    
    let divSobremesa = document.createElement("div");
    divSobremesa.classList.add("item");

    let itemSobremesa = document.createElement("p");
    let precoItemSobremesa = document.createElement("p");

    itemSobremesa.appendChild(document.createTextNode(nomeSobremesa));
    precoItemSobremesa.appendChild(document.createTextNode(precoSobremesaString.toString().replace(".", ",")));

    divSobremesa.appendChild(itemSobremesa);
    divSobremesa.appendChild(precoItemSobremesa);

    //TOTAL

    let precoTotal = precoPrato + precoBebida + precoSobremesa;
    let precoTotalString = precoTotal.toFixed(2).toString();

    let divTotal = document.createElement("div");
    divTotal.classList.add("item");

    let itemTotal = document.createElement("p");
    let precoItemTotal = document.createElement("p");

    itemTotal.appendChild(document.createTextNode("TOTAL"));
    precoItemTotal.appendChild(document.createTextNode(`R$ ${precoTotalString.toString().replace(".", ",")}`));

    divTotal.appendChild(itemTotal);
    divTotal.appendChild(precoItemTotal);
    
    let lista = document.getElementById("listaItens");
    lista.appendChild(divPrato);
    lista.appendChild(divBebida);
    lista.appendChild(divSobremesa);
    lista.appendChild(divTotal);

    toggleModal();
}

/* Cancelar checkout */

function cancelarCheckout(){

    toggleModal();
    document.getElementById("listaItens").innerHTML = "";
}

/* Finalizar Pedido */

function finalizar(){

    let nomePrato = tabelaDeNome[pratoEscolhido];
    let precoPrato = tabelaDePreco[pratoEscolhido];

    let nomeBebida = tabelaDeNome[bebidaEscolhido];
    let precoBebida = tabelaDePreco[bebidaEscolhido];

    let nomeSobremesa = tabelaDeNome[sobremesaEscolhido];
    let precoSobremesa = tabelaDePreco[sobremesaEscolhido];

    let total = precoPrato + precoBebida + precoSobremesa;
    let totalArredondado = total.toFixed(2).toString().replace(".", ","); 

    let nome = prompt("Digite seu nome:");
    let endereco = prompt("Digite seu endereço:");

    mensagem1 = `Olá, gostaria de fazer o pedido:`;
    mensagem2 = `- ${nomePrato} \n- ${nomeBebida} \n- ${nomeSobremesa}`;
    mensagem3 = `Total: ${totalArredondado}!`;


    let msg =`${mensagem1} \n\n${mensagem2} \n${mensagem3} \n\nMeu nome: ${nome} \nMeu endereço: ${endereco}`;
    msg = encodeURIComponent(msg);
    window.open(`https://wa.me/+5524999348778?text= ${msg}`);
}
let prato;
let bebida;
let sobremesa;

let temPrato = false;
let temBebida = false;
let temSobremesa = false;

/* js pratos onclick */

function escolherPrato1() {
    
    document.getElementById("prato1").style.borderColor = "#32B72F";
    document.getElementById("prato1").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";

    document.getElementById("prato2").style.borderColor = "white";
    document.getElementById("prato2").style.boxShadow = " 0px 4px 4px rgba(0, 0, 0, 0.25)";

    document.getElementById("prato3").style.borderColor = "white";
    document.getElementById("prato3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";

    precoPrato = 12.90;
    prato = "Frango Yin Yang";
    temPrato = true;

    if(temPrato && temBebida && temSobremesa){  
        ativarBotao();
    }
}

function escolherPrato2() {
    
    document.getElementById("prato1").style.borderColor = "white";
    document.getElementById("prato1").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    
    document.getElementById("prato2").style.borderColor = "#32B72F";
    document.getElementById("prato2").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    
    document.getElementById("prato3").style.borderColor = "white";
    document.getElementById("prato3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";

    precoPrato = 14.90;
    prato = "Hamburger";
    temPrato = true;

    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

function escolherPrato3() {

    document.getElementById("prato1").style.borderColor = "white";
    document.getElementById("prato1").style.boxShadow = " 0px 4px 4px rgba(0, 0, 0, 0.25)";
    
    document.getElementById("prato2").style.borderColor = "white";
    document.getElementById("prato2").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";

    document.getElementById("prato3").style.borderColor = "#32B72F";
    document.getElementById("prato3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";

    precoPrato = 16.90;
    prato = "Pizza";
    temPrato = true;

    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

/* js bebidas onclick */

function escolherBebida1() {
    
    document.getElementById("bebida1").style.borderColor = "#32B72F";
    document.getElementById("bebida1").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";

    document.getElementById("bebida2").style.borderColor = "white";
    document.getElementById("bebida2").style.boxShadow = " 0px 4px 4px rgba(0, 0, 0, 0.25)";

    document.getElementById("bebida3").style.borderColor = "white";
    document.getElementById("bebida3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";

    precoBebida = 4.90;
    bebida = "Coquinha gelada";
    temBebida = true;
    
    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

function escolherBebida2() {
    
    document.getElementById("bebida1").style.borderColor = "white";
    document.getElementById("bebida1").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    
    document.getElementById("bebida2").style.borderColor = "#32B72F";
    document.getElementById("bebida2").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    
    document.getElementById("bebida3").style.borderColor = "white";
    document.getElementById("bebida3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    
    precoBebida = 5.90;
    bebida = "Guaraná gelado";
    temBebida = true;
    
    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

function escolherBebida3() {

    document.getElementById("bebida1").style.borderColor = "white";
    document.getElementById("bebida1").style.boxShadow = " 0px 4px 4px rgba(0, 0, 0, 0.25)";
    
    document.getElementById("bebida2").style.borderColor = "white";
    document.getElementById("bebida2").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";

    document.getElementById("bebida3").style.borderColor = "#32B72F";
    document.getElementById("bebida3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    
    precoBebida = 6.90;
    bebida = "Pepsi gelada";
    temBebida = true;

    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

/* js sobremesas onclick */

function escolherSobremesa1() {

    document.getElementById("sobremesa1").style.borderColor = "#32B72F";
    document.getElementById("sobremesa1").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";

    document.getElementById("sobremesa2").style.borderColor = "white";
    document.getElementById("sobremesa2").style.boxShadow = " 0px 4px 4px rgba(0, 0, 0, 0.25)";

    document.getElementById("sobremesa3").style.borderColor = "white";
    document.getElementById("sobremesa3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";

    precoSobremesa = 3.90;
    sobremesa = "Sorvete";
    temSobremesa = true;
    
    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

function escolherSobremesa2() {

    document.getElementById("sobremesa1").style.borderColor = "white";
    document.getElementById("sobremesa1").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    
    document.getElementById("sobremesa2").style.borderColor = "#32B72F";
    document.getElementById("sobremesa2").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    
    document.getElementById("sobremesa3").style.borderColor = "white";
    document.getElementById("sobremesa3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";

    precoSobremesa = 6.90;
    sobremesa = "Pudim";
    temSobremesa = true;

    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

function escolherSobremesa3() {

    document.getElementById("sobremesa1").style.borderColor = "white";
    document.getElementById("sobremesa1").style.boxShadow = " 0px 4px 4px rgba(0, 0, 0, 0.25)";
    
    document.getElementById("sobremesa2").style.borderColor = "white";
    document.getElementById("sobremesa2").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";

    document.getElementById("sobremesa3").style.borderColor = "#32B72F";
    document.getElementById("sobremesa3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";

    precoSobremesa = 9.90;
    sobremesa = "Bolo";
    temSobremesa = true;

    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

    const modal = document.querySelector(".modal");
    const closeButton = document.querySelector(".close-button");

    /* Ativar Botão */

function ativarBotao(){   

    document.getElementById("botao").disabled = false;
    document.getElementById("botao").style.backgroundColor = "#32B72F";
    document.getElementById("botao").innerHTML = "Fechar pedido";
}

 /* modal */

function alternarModal() {

    modal.classList.toggle("mostrar-modal");
}

function windowOnClick(event) {

    if (event.target === modal) {
        alternarModal();
    }
}

closeButton.addEventListener("click", cancelarCheckout);
window.addEventListener("click", windowOnClick);

/* checkout */

function checkout(){
    
    //PRATO

    let divPrato = document.createElement("div");
    divPrato.classList.add("item");
    
    let itemPrato = document.createElement("p");
    let precoItemPrato = document.createElement("p");
    
    itemPrato.appendChild(document.createTextNode(prato));
    precoItemPrato.appendChild(document.createTextNode(precoPrato));
    
    divPrato.appendChild(itemPrato);
    divPrato.appendChild(precoItemPrato);
    
    //BEBIDA

    let divBebida = document.createElement("div");
    divBebida.classList.add("item");
    
    let itemBebida = document.createElement("p");
    let precoItemBebida = document.createElement("p");
    
    itemBebida.appendChild(document.createTextNode(bebida));
    precoItemBebida.appendChild(document.createTextNode(precoBebida));
    
    divBebida.appendChild(itemBebida);
    divBebida.appendChild(precoItemBebida);
    
    //SOBREMESA
    
    let divSobremesa = document.createElement("div");
    divSobremesa.classList.add("item");

    let itemSobremesa = document.createElement("p");
    let precoItemSobremesa = document.createElement("p");

    itemSobremesa.appendChild(document.createTextNode(sobremesa));
    precoItemSobremesa.appendChild(document.createTextNode(precoSobremesa));

    divSobremesa.appendChild(itemSobremesa);
    divSobremesa.appendChild(precoItemSobremesa);

    //TOTAL

    let divTotal = document.createElement("div");
    divTotal.classList.add("item");

    let itemTotal = document.createElement("p");
    let precoItemTotal = document.createElement("p");

    let total = precoPrato + precoBebida + precoSobremesa;
    totalArredondado = total.toFixed(2); 

    itemTotal.appendChild(document.createTextNode("TOTAL"));
    precoItemTotal.appendChild(document.createTextNode("R$ " + totalArredondado));

    divTotal.appendChild(itemTotal);
    divTotal.appendChild(precoItemTotal);
    
    let lista = document.getElementById("lista_itens");
    lista.appendChild(divPrato);
    lista.appendChild(divBebida);
    lista.appendChild(divSobremesa);
    lista.appendChild(divTotal);

    alternarModal();
}

/* Cancelar checkout */

function cancelarCheckout(){

    document.getElementById("lista_itens").innerHTML = "";
    alternarModal()
}

/* Finalizar Pedido */

function finalizar(){

    let total = precoPrato + precoBebida + precoSobremesa;
    totalArredondado = total.toFixed(2); 

    let nome = prompt("Digite seu nome:");
    let endereco = prompt("Digite seu endereço:");

    mensagem1 = "Olá, gostaria de fazer o pedido: ";
    mensagem2 = "(" + prato  + "," + bebida + "e" + sobremesa + ")";
    mensagem3 = "Total: " + totalArredondado + "!";

    window.open("https://wa.me/+5524999642965?text=" + mensagem1 + mensagem2 + mensagem3  + "Meu nome: " + nome + "Meu endereço: " + endereco)
}
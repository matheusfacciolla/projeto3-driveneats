/* declarando variaveis */

let prato;
let bebida;
let sobremesa;

let temPrato = false;
let temBebida = false;
let temSobremesa = false;

/* pratos */

const iconPrato1 = document.querySelector("#icon-prato1");
const iconPrato2 = document.querySelector("#icon-prato2");
const iconPrato3 = document.querySelector("#icon-prato3");

/* bebidas */

const iconBebida1 = document.querySelector("#icon-bebida1");
const iconBebida2 = document.querySelector("#icon-bebida2");
const iconBebida3 = document.querySelector("#icon-bebida3");

/* sobremesas */

const iconSobremesa1 = document.querySelector("#icon-sobremesa1");
const iconSobremesa2 = document.querySelector("#icon-sobremesa2");
const iconSobremesa3 = document.querySelector("#icon-sobremesa3");

/* selecionar pratos */

function escolherPrato1() {
    
    document.getElementById("prato1").style.borderColor = "#32B72F";
    document.getElementById("prato1").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    iconPrato1.style.display = "block";
    
    document.getElementById("prato2").style.borderColor = "white";
    document.getElementById("prato2").style.boxShadow = " 0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconPrato2.style.display = "none";
    
    document.getElementById("prato3").style.borderColor = "white";
    document.getElementById("prato3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconPrato3.style.display = "none";
    
    precoPrato = 12.90;
    precoPratoString = "12,90"
    prato = "Frango Yin Yang";
    temPrato = true;
     
    if(temPrato && temBebida && temSobremesa){  
        ativarBotao();
    }
}

function escolherPrato2() {
    
    document.getElementById("prato1").style.borderColor = "white";
    document.getElementById("prato1").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconPrato1.style.display = "none";
    
    document.getElementById("prato2").style.borderColor = "#32B72F";
    document.getElementById("prato2").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    iconPrato2.style.display = "block";
    
    document.getElementById("prato3").style.borderColor = "white";
    document.getElementById("prato3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconPrato3.style.display = "none";
    
    precoPrato = 14.90;
    precoPratoString = "14,90"
    prato = "Hamburger";
    temPrato = true;
    
    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

function escolherPrato3() {
    
    document.getElementById("prato1").style.borderColor = "white";
    document.getElementById("prato1").style.boxShadow = " 0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconPrato1.style.display = "none";
    
    document.getElementById("prato2").style.borderColor = "white";
    document.getElementById("prato2").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconPrato2.style.display = "none";
    
    document.getElementById("prato3").style.borderColor = "#32B72F";
    document.getElementById("prato3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    iconPrato3.style.display = "block";
    
    precoPrato = 16.90;
    precoPratoString = "16,90"
    prato = "Pizza";
    temPrato = true;
    
    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

/* selcionar bebidas  */

function escolherBebida1() {
    
    document.getElementById("bebida1").style.borderColor = "#32B72F";
    document.getElementById("bebida1").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    iconBebida1.style.display = "block";
    
    document.getElementById("bebida2").style.borderColor = "white";
    document.getElementById("bebida2").style.boxShadow = " 0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconBebida2.style.display = "none";
    
    document.getElementById("bebida3").style.borderColor = "white";
    document.getElementById("bebida3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconBebida3.style.display = "none";
    
    precoBebida = 4.90;
    precoBebidaString = "4,90"
    bebida = "Coquinha gelada";
    temBebida = true;
    
    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

function escolherBebida2() {
    
    document.getElementById("bebida1").style.borderColor = "white";
    document.getElementById("bebida1").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconBebida1.style.display = "none";
    
    document.getElementById("bebida2").style.borderColor = "#32B72F";
    document.getElementById("bebida2").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    iconBebida2.style.display = "block";
    
    document.getElementById("bebida3").style.borderColor = "white";
    document.getElementById("bebida3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconBebida3.style.display = "none";
    
    precoBebida = 5.90;
    precoBebidaString = "5,90"
    bebida = "Guaraná gelado";
    temBebida = true;
    
    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

function escolherBebida3() {
    
    document.getElementById("bebida1").style.borderColor = "white";
    document.getElementById("bebida1").style.boxShadow = " 0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconBebida1.style.display = "none";
    
    document.getElementById("bebida2").style.borderColor = "white";
    document.getElementById("bebida2").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconBebida2.style.display = "none";
    
    document.getElementById("bebida3").style.borderColor = "#32B72F";
    document.getElementById("bebida3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    iconBebida3.style.display = "block";
    
    precoBebida = 6.90;
    precoBebidaString = "6,90"
    bebida = "Pepsi gelada";
    temBebida = true;
    
    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

/* selecionar sobremesas  */

function escolherSobremesa1() {
    
    document.getElementById("sobremesa1").style.borderColor = "#32B72F";
    document.getElementById("sobremesa1").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    iconSobremesa1.style.display = "block";
    
    document.getElementById("sobremesa2").style.borderColor = "white";
    document.getElementById("sobremesa2").style.boxShadow = " 0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconSobremesa2.style.display = "none";
    
    document.getElementById("sobremesa3").style.borderColor = "white";
    document.getElementById("sobremesa3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconSobremesa3.style.display = "none";
    
    precoSobremesa = 3.90;
    precoSobremesaString = "3,90"
    sobremesa = "Sorvete";
    temSobremesa = true;
    
    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

function escolherSobremesa2() {
    
    document.getElementById("sobremesa1").style.borderColor = "white";
    document.getElementById("sobremesa1").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconSobremesa1.style.display = "none";
    
    document.getElementById("sobremesa2").style.borderColor = "#32B72F";
    document.getElementById("sobremesa2").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    iconSobremesa2.style.display = "block";
    
    document.getElementById("sobremesa3").style.borderColor = "white";
    document.getElementById("sobremesa3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconSobremesa3.style.display = "none";
    
    precoSobremesa = 6.90;
    precoSobremesaString = "6,90"
    sobremesa = "Pudim";
    temSobremesa = true;
    
    if(temPrato && temBebida && temSobremesa){
        ativarBotao();
    }
}

function escolherSobremesa3() {
    
    document.getElementById("sobremesa1").style.borderColor = "white";
    document.getElementById("sobremesa1").style.boxShadow = " 0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconSobremesa1.style.display = "none";
    
    document.getElementById("sobremesa2").style.borderColor = "white";
    document.getElementById("sobremesa2").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";
    iconSobremesa2.style.display = "none";
    
    document.getElementById("sobremesa3").style.borderColor = "#32B72F";
    document.getElementById("sobremesa3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";
    iconSobremesa3.style.display = "block";
    
    
    precoSobremesa = 9.90;
    precoSobremesaString = "9,90"
    sobremesa = "Bolo";
    temSobremesa = true;
    
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

function ativarModal() {

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

    let divPrato = document.createElement("div");
    divPrato.classList.add("item");
    
    let itemPrato = document.createElement("p");
    let precoItemPrato = document.createElement("p");
    
    itemPrato.appendChild(document.createTextNode(prato));
    precoItemPrato.appendChild(document.createTextNode(precoPratoString));
    
    divPrato.appendChild(itemPrato);
    divPrato.appendChild(precoItemPrato);
    
    //BEBIDA

    let divBebida = document.createElement("div");
    divBebida.classList.add("item");
    
    let itemBebida = document.createElement("p");
    let precoItemBebida = document.createElement("p");
    
    itemBebida.appendChild(document.createTextNode(bebida));
    precoItemBebida.appendChild(document.createTextNode(precoBebidaString));
    
    divBebida.appendChild(itemBebida);
    divBebida.appendChild(precoItemBebida);
    
    //SOBREMESA
    
    let divSobremesa = document.createElement("div");
    divSobremesa.classList.add("item");

    let itemSobremesa = document.createElement("p");
    let precoItemSobremesa = document.createElement("p");

    itemSobremesa.appendChild(document.createTextNode(sobremesa));
    precoItemSobremesa.appendChild(document.createTextNode(precoSobremesaString));

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
    precoItemTotal.appendChild(document.createTextNode(`R$ ${totalArredondado}`));

    divTotal.appendChild(itemTotal);
    divTotal.appendChild(precoItemTotal);
    
    let lista = document.getElementById("listaItens");
    lista.appendChild(divPrato);
    lista.appendChild(divBebida);
    lista.appendChild(divSobremesa);
    lista.appendChild(divTotal);

    ativarModal();
}

/* Cancelar checkout */

function cancelarCheckout(){

    ativarModal();
    document.getElementById("listaItens").innerHTML = "";
}

/* Finalizar Pedido */

function finalizar(){

    let total = precoPrato + precoBebida + precoSobremesa;
    totalArredondado = total.toFixed(2); 

    let nome = prompt("Digite seu nome:");
    let endereco = prompt("Digite seu endereço:");

    mensagem1 = `Olá, gostaria de fazer o pedido:`;
    mensagem2 = `(${prato}, ${bebida} e ${sobremesa})`;
    mensagem3 = `Total: ${totalArredondado}!`;

    window.open(`https://wa.me/+552499999999?text= ${mensagem1} ${mensagem2} ${mensagem3} Meu nome: ${nome} Meu endereço: ${endereco} `)
}
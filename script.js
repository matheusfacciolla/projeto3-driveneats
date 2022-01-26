let prato;
let bebida;
let sobremesa;

let tem_prato = false;
let tem_bebida = false;
let tem_sobremesa = false;

/* js pratos onclick */

function escolherPrato1() {
    
    document.getElementById("prato1").style.borderColor = "#32B72F";
    document.getElementById("prato1").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 0px 0px 5px #32B72F";

    document.getElementById("prato2").style.borderColor = "white";
    document.getElementById("prato2").style.boxShadow = " 0px 4px 4px rgba(0, 0, 0, 0.25)";

    document.getElementById("prato3").style.borderColor = "white";
    document.getElementById("prato3").style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)";

    prato = 12.90;
    tem_prato = true;

    if(tem_prato && tem_bebida && tem_sobremesa){  
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

    prato = 14.90;
    tem_prato = true;

    if(tem_prato && tem_bebida && tem_sobremesa){
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

    prato = 16.90;
    tem_prato = true;

    if(tem_prato && tem_bebida && tem_sobremesa){
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

    bebida = 4.90;
    tem_bebida = true;
    
    if(tem_prato && tem_bebida && tem_sobremesa){
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
    
    bebida = 5.90;
    tem_bebida = true;
    
    if(tem_prato && tem_bebida && tem_sobremesa){
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
    
    bebida = 6.90;
    tem_bebida = true;

    if(tem_prato && tem_bebida && tem_sobremesa){
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

    sobremesa = 3.90;
    tem_sobremesa = true;
    
    if(tem_prato && tem_bebida && tem_sobremesa){
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

    sobremesa = 6.90;
    tem_sobremesa = true;

    if(tem_prato && tem_bebida && tem_sobremesa){
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

    sobremesa = 9.90;
    tem_sobremesa = true;

    if(tem_prato && tem_bebida && tem_sobremesa){
        ativarBotao();
    }
}

/* js finalizar pedido */

function ativarBotao(){   
    document.getElementById("botao").disabled = false;
    document.getElementById("botao").style.backgroundColor = "#32B72F";
    document.getElementById("botao").innerHTML = "Fechar pedido";
}

function finalizar(){
    let total = prato + bebida + sobremesa;
    totalarredondado = total.toFixed(2); 
    alert ("O preço total do seu pedido foi: R$ " + totalarredondado);
}
let prato;
let bebida;
let sobremesa;


/* js pratos onclick */

function escolherPrato1() {
    document.getElementById("prato1").style.borderColor = "green";
    document.getElementById("prato2").style.borderColor = "white";
    document.getElementById("prato3").style.borderColor = "white";
    prato = 12.90;
}

function escolherPrato2() {
    document.getElementById("prato1").style.borderColor = "white";
    document.getElementById("prato2").style.borderColor = "green";
    document.getElementById("prato3").style.borderColor = "white";
    prato = 14.90;
}

function escolherPrato3() {
    document.getElementById("prato1").style.borderColor = "white";
    document.getElementById("prato2").style.borderColor = "white";
    document.getElementById("prato3").style.borderColor = "green";
    prato = 16.90;
}

/* js bebidas onclick */

function escolherBebida1() {
    document.getElementById("bebida1").style.borderColor = "green";
    document.getElementById("bebida2").style.borderColor = "white";
    document.getElementById("bebida3").style.borderColor = "white";
    bebida = 4.90;

}

function escolherBebida2() {
    document.getElementById("bebida1").style.borderColor = "white";
    document.getElementById("bebida2").style.borderColor = "green";
    document.getElementById("bebida3").style.borderColor = "white";
    bebida = 5.90;
}

function escolherBebida3() {
    document.getElementById("bebida1").style.borderColor = "white";
    document.getElementById("bebida2").style.borderColor = "white";
    document.getElementById("bebida3").style.borderColor = "green";
    bebida = 6.90;
}

/* js sobremesas onclick */

function escolherSobremesa1() {
    document.getElementById("sobremesa1").style.borderColor = "green";
    document.getElementById("sobremesa2").style.borderColor = "white";
    document.getElementById("sobremesa3").style.borderColor = "white";
    sobremesa = 3.90;

}

function escolherSobremesa2() {
    document.getElementById("sobremesa1").style.borderColor = "white";
    document.getElementById("sobremesa2").style.borderColor = "green";
    document.getElementById("sobremesa3").style.borderColor = "white";
    sobremesa = 6.90;
}

function escolherSobremesa3() {
    document.getElementById("sobremesa1").style.borderColor = "white";
    document.getElementById("sobremesa2").style.borderColor = "white";
    document.getElementById("sobremesa3").style.borderColor = "green";
    sobremesa = 9.90;
}

/* js finalizar pedido */

function ativarBotao(){
    let prato = 0;
    let bebida = 0;
    let sobremesa = 0;

    if (prato == 12.90  || prato == 14.90  || prato == 16.90 &&  bebida == 4.90  || bebida == 5.90 || bebida == 6.90 && sobremesa == 3.90  || sobremesa == 6.90 || sobremesa ==9.90) {        
        document.getElementById("botao").disabled = false;
        document.getElementById("botao").style.backgroundColor = "green";
        document.getElementById("botao").style.backgroundColor = "green";
        document.getElementById("botao").innerHTML = "Fechar pedido";
    } else {
        document.getElementById("botao").disabled = true;
    }
}

function finalizar(){
    let total = prato + bebida + sobremesa;
    totalarredondado = total.toFixed(2); 
    alert ("O preço total do seu pedido foi: R$ " + totalarredondado);
}
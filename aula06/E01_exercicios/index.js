//um algoritimo receba um número com 3 casas decimais e imprima separadamente centena,dezena e unidade.
//um algoritimo que receba o valor de um produto e o desconto e retorne o valor final com o desconto.
//um algoritimo que verifique se o número é par, ou ímpar


function decomposicao(numero){
    
    var unidade = numero % 10;

    var dezena = (numero % 100 - unidade)/10;

    var centena =  Math.floor(numero / 100);

    console.log(centena+" "+dezena+" "+unidade);
}

//decomposicao(135);

function desconto(valor,porcentagem){

    var desc = valor * porcentagem / 100; 

    return valor - desc;
}

//console.log(desconto(100,30));


function ehpar(numero){
    return numero % 2 === 0? "o número é par": "o número não é par";
}

//console.log(ehpar(120));

function idadeEmDias(anos,meses,dias){
    return anos * 365 + meses * 30 + dias;
}

//console.log(idadeEmDias(10,3,15));

function mediaPonderada(nota1,nota2,nota3){

    var mediaPon = (nota1*2 + nota2*3 + nota3*5) / 10;

    return mediaPon;
}

//console.log(mediaPonderada(8,10,6));

function custoConsumidor(custoDeFabrica){

    var porcentagemDist = custoDeFabrica * 28/100,  impostos =  custoDeFabrica * 45/100;

    return valorTotalDoCarro = custoDeFabrica + porcentagemDist + impostos;
}

//console.log(custoConsumidor(100));


function evento(tempo){
 
    //7325
    var horas = Math.floor(tempo / 3600);
    
    var minutos = Math.floor((tempo % 3600)/60);

    var segundos = (tempo % 3600) % 60;

    console.log(horas+" "+minutos+" "+segundos);

}

evento(7325);
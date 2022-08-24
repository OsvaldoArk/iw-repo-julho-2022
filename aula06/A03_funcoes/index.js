function soma(numero1,numero2){
    return numero1 + numero2;
}

var somaArrow = (numero1,numero2) => numero1+numero2;

var aoQuadrado = numero => Math.pow(numero,2);

console.log(somaArrow(25,30));

console.log(aoQuadrado(30));

function mostraPi(){
    console.log(Math.PI);
}

function retornaPi(){
    return Math.PI;
}

console.log(soma(30,80));


mostraPi();

console.log(retornaPi());
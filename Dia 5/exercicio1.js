let operacao =parseInt(prompt("digite 1 para soma e 2 para subtracao"))
let num1 = parseInt(prompt("coloque o primeiro numero"))
let num2 = parseInt(prompt("coloque o seu segundo numero"))

switch(operacao){
    case 1:
        soma= num1 + num2
        console.log("a opercao realiza foii a soma e o resultado foi: " + soma)
        break;
    case 2:
        subtracao = num1 - num2
        console.log("a opercao realiza foii a subtracao e o resultado foi: " + subtracao)
        break;
}

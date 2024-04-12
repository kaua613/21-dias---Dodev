let opcao =parseInt(prompt("1 gasolina 2 alcool 3 calibrar pneus"))

switch(opcao){
    case 1:
        let valor = parseFloat(prompt("qual o valor desejado?"))
        quantidade = valor / 5
        console.log("quantidade abastecida: " + quantidade)
        break;
    case 2:
        let valor1 = parseFloat(prompt("qual o valor desejado"))
        quantidade = valor1 / 3
        console.log("quantidade abastecida: " + quantidade)
        break;
    case 3:
        console.log("pneu calibrado")
        break;

}
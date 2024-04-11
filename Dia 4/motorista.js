let nome= prompt("digite o seu nome")
let idade=parseInt(prompt("digite a sua idade"))
let carta= prompt("vc tem carta?")
let carro=prompt("vc tem carro?")

if ( idade < 18 || carta === "nao"){
    console.log(nome + ",vc nao pode dirigir")

}else if( idade >= 18 && carta === "sim" && carro === "nao"){
    console.log(nome + ", vc pode dirigir mas nao tem carro")

}else{
    console.log(nome + ", vc pode virar motorista")
}

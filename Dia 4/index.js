let fome = prompt("vc esta com fome?")
let dinheiro = prompt("vc tem dinheiro?")
let aberto = prompt("o restaurante esta aberto?")

if( fome === "nao" || dinheiro === "nao"){
    console.log("hoje a janta sera em casa")
}else if(fome === "sim" && dinheiro === "sim" && aberto === "nao"){
    console.log("peca um delivery")
}else{
    console.log("vamo pro restaurante")
}
   

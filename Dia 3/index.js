let nome = prompt("coloque o seu nome:")
let idade = parseInt(prompt("coloque a sua idade"))
let altura = parseFloat(prompt("coloque a sua altura"))
let peso = parseFloat(prompt("coloque o seu peso"))

let dataDeNascimento = 2023 - idade 
let imc = 0
imc = peso / (altura * altura)

console.log("Ola " + nome + ", voce tem " + idade + " anos, nasceu em " + dataDeNascimento + ", tem " + altura + " de altura, pesa " + peso + "kg seu IMC e " + imc + "kg")
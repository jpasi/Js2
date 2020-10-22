let nome = prompt("Nome")
let sobre = prompt("Sobrenome")
let idade = prompt("Idade")
let es = prompt("Estado Civil")
let cor = prompt("Cor Favorita")
let pet = prompt("Tem pet?")

console.log(`Olá,   ${nome}`)
console.log(`Nome e Sobrenome:   ${nome}  ${sobre}`)
console.log(`Idade:  ${idade}`)

let DadosP = new Object()
    DadosP.Nome = nome
    DadosP.Sobrenome = sobre
    DadosP.Idade = idade
    DadosP.Estado_Civil = es
    DadosP.Cor_favorita = cor
    DadosP.Tem_pet = pet 

console.table(DadosP)
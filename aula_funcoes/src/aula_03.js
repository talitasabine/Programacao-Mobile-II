//funções aula 03
let pais = "Brasil";
let continente = "America do Sul";

console.log(pais); // -> Brasil
console.log(typeof pais); // -> string
console.log(continente); //-> America do sul
console.log(typeof continente); // ->String

let message1 = "O navio 'Mars' fez escala no porto";
let message2 = "Chuva forte passará perto da cidade de São Paulo";

console.log(message1); // -> O navio 'Mars' fez a escala no porto
console.log(message2); //-> Chuva forte passará perto da cidade de São Paulo

let nome = "Talita";
let idade = "24";

let mensagem = `Olá, ${nome}! Você tem ${idade} anos`;
console.log(mensagem);

let resultadoSoma;

function soma(a, b){
    return a + b;
}

resultadoSoma = soma(1, 2);
console.log("Resultado da soma: " +resultadoSoma);

//Objetos

let usuario1 = {}
    console.log(usuario1);
    console.log(typeof usuario1);

let usuario02 ={
    nome: "Talita",
    sobrenome: "Sabine",
    idade: 18,
    email: "talira@gmail.com"
}

console.log(usuario02.nome + " " + usuario02.sobrenome);
console.log(usuario02.idade);
console.log(usuario02.email);

let usuario03 ={
    nome: "Gabi",
    sobrenome: "Monteiro",
    idade: 23,
    email: "gabir@gmail.com"
}

console.log(usuario03.nome+""+ usuario03.sobrenome);
usuario03.idade = 30;
console.log(usuario03.idade);

// objetos com funções

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    acelerar: function(){
        console.log("O carro está acelerando!");
    }
};

carro.acelerar();

//vetores

let numeros = [1, 2, 3, 4, 5];
let nomes = ["Gabi", "Taina", "Talita"];
let misto = [1, "dois", true, {chave: "valor"}];

console.log(numeros[0]); //exibe: 1
console.log(nomes[1]); //exibe: taina

for(let i=0; i <numeros.length; i++){
    console.log(numeros[i]);
}

numeros.forEach(function(numero){
    console.log(numero);
})

let dobro = numeros.map(function(numero){
    return numero * 2;
});
console.log(dobro); //exibe 2, 4, 6, 8

numeros.push(6);
console.log(numeros); // exibe 1 2 3 4 5 6

numeros.pop();
console.log(numeros); //exibe 1 2 3 4 5

numeros.shift();
console.log(numeros); //exibe 2 3 4 5

numeros.unshift(0);
console.log(numeros); //exibe 0 2 3 4 5

numeros.splice(2, 1); //remove 1 elemento a partir do indice 2
console.log(numeros); // exibe 0 2 4 5

let parte = numeros.splice(1, 3); //parte indice 1 (inclusive) ate o indice 3 (exclusive)
console.log(parte); //exibe 2 4

console.log(numeros.indexOf(2)); //exibe 1
console.log(numeros.lastIndexOf(2)); //exibe 1
console.log(numeros.includes(3)); //exibe true

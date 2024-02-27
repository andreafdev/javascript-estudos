// Fundamentos

//var nome = "valor"

var minhaVariavel = "Olá, mundo!";
console.log(minhaVariavel);

//variaveis e tipos de dados
var meuNumero = 10;
console.log(meuNumero + 5);

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

//let e const

let x = 10; // = operador de atribuição
const y = 5;

console.log(typeof x);

//Operadores aritmeticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Operadores de comparação
console.log(x == y); //igual
console.log(x != y); //diferente
console.log(x === y); // compara o tipo do dado
console.log(x !== y); // compara o tipo do dado também, e é mais utilizado

//Operadores lógicos

//and && - retorna verdadeiro se as duas forem verdadeiras; se não, retorna falso
console.log(10 > 5 && 20 > 5);
console.log(10 > 5 && 20 < 5);

//or || - retorna falso quando os dois lados são falsos; e verdadeiro quando os dois são verdadeiros.
console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 > 5);

// Conversão de tipos
// const meuNumero2 = "123";

// const meuNumeroConvertido = number(meuNumero2);

// console.log(meuNumeroConvertido);
// console.log(typeof meuNumeroConvertido);

//Estrutura de condição - if, else, else if

const idade = 20;

if (idade < 13) {
  console.log("Criança");
} else if (idade < 20) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

if (true) {
  console.log("Isso executa!");
}

//Switch
const fruta = "Maçã";

switch (fruta) {
  case "Banana":
    console.log("Banana é a fruta");
    break;
  case "Maçã":
    console.log("Maçã é a fruta");
    break;
  default:
    console.log("Nenhuma fruta");
}

// Laços de repetição
// se repete dependendo de uma condição

// contador, condição de limite, incremento
for (let i = 0; i < 5; i = i++) {
  //concatenação
  console.log("O valor de i é: " + i);
}

//while
let k = 0;

while (k < 5) {
  console.log("O valor de k é: " + k);
  k++;
}

//do while
let j = 0;
do {
  console.log("O valor é j é: " + j);
  j++;
} while (j < 5);

Funções;
function nome(arg1, arg2) {
  corpo;
}

function cumprimentar(nome) {
  console.log("Olá!" + nome);
}

//invocação = nome()
cumprimentar("Andrea");

// escopo de variáveis
let cor = "azul";

function mostrarCor() {
  let cor = "verde";

  console.log(cor);
}
mostrarCor();

//hoisting = içamento

testeHoisting();
function testeHoisting() {
  console.log("Deu certo!");
}

// arrow function
const testeArrow = () => console.log("Isso tbm é uma função");
testeArrow();

//truthy e falsy
const minhaVariavel1 = ""; //falsy
const minhaVariavel2 = "Texto aqui"; //truthy

//array, listas
const numeros = [1, 2, 3, 4, 5];

console.log(numeros);

console.log(numero[0]);

numeros.push(6); //acrescenta um numero ao final da lista
console.log(numeros);

numeros.pop(); //remove o ultimo numero da lista
console.log(numeros);

//string
const minhaStringNova = "Olá, mundo2!";
const minhaString3 = minhaStringNova + "Como você está?";
console.log(minhaString3);

// interpolação
const minhaString4 = ` ${minhaStringNova}Como você está?`;
console.log(minhaString4);

// data e hora
const agora = Date();
console.log(agora);

const natal = new Date(2023, 11, 25);
console.log(natal);

//Math
console.log(Math.PI);

console.log(Math.round(3.6));
console.log(Math.sqrt(16));
console.log(Math.pow(2,3));
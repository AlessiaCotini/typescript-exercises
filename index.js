"use strict";
console.log("Hello typescript!");
let x = 100;
let firstName = "Stefano";
let z = "Roberto";
//assegnazione automatica del TIPO -> PROCESSO IMPLICITO
// Z da questo momento è di tipo stringa
// TYPE INFERENCE
let boh = 50;
boh = 100;
boh = "Alessia";
console.log(firstName.slice(0, 1).toUpperCase());
const diceCiao = function () {
    return "Ciao";
};
diceCiao();
const lanciaDado = function () {
    const lancio = Math.ceil(Math.random() * 6);
    return lancio;
};
const n = lanciaDado();
const funzioneSomma = function (n1, n2) {
    return n1 + n2;
};
funzioneSomma(3, 4);
const sommaDefault = function (n1, n2) {
    return n1 + (n2 || 0);
};
console.log(sommaDefault(50));

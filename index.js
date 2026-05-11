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
let mixed;
mixed = 100;
mixed = "ciao";
let personal = "x";
personal = 0;
const giorno = "domenica";
const valore = 4;
//TIPO COMPLESSO
const arrayDiStringhe = ["roberto", "stefano", "andrea"];
const mixArray = [10, "francesco"];
//OGGETTI
const oggettiEsempio = {
    brand: "apple",
    model: "iphone",
    color: "lime",
    storage: 259,
    activated: false,
    configuration: {
        onlinePurchase: true,
        date: "2026-05-11",
    },
    avaiability: [128, 256, 512],
};
oggettiEsempio.avaiability.map((el) => el.toString());
const dog = {
    name: "marley",
    age: 5,
    breed: "labrador",
};
const address = {
    city: "Rome",
    street: "Via della Valle dei Fontanili",
    civicNumber: 230,
    zipCode: "00168",
};
const addressDue = {
    city: "Trieste",
    street: "Corso Trieste",
    civicNumber: "34",
    zipCode: "34562",
};

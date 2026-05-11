"use strict";
console.log("esercizio 2");
let myname = "Alessia";
let myage = 28;
let studingTypescript = true;
console.log("esercizio 3");
const greet = (name) => {
    return "Ciao " + name;
};
console.log("esercizio 4");
const sum = (a, b) => {
    return a + b;
};
console.log("esercizio 5");
const pricePlusIva = function (n1) {
    let price = n1;
    return price + price * 0.22;
};
console.log(pricePlusIva(10));
console.log("esercizio 6");
const lengthOfString = function (p1, p2) {
    let sum = p1 + p2;
    return sum.length.toLocaleString();
};
console.log(lengthOfString("andrea", "gianluca"));
console.log("esercizio 8");
let mixedValue = 2;
mixedValue = null;
mixedValue = undefined;
console.log("esercizio 9");
console.log("esercizio 10");
const numbers = [1, 2, 3];
const numeri = [4, 5, 6];
console.log("esercizio 11");
const tupleExampleForExercises = [
    "stefano",
    "buon",
    "compleanno",
    11,
    5,
];
console.log("esercizio 13");
console.log("esercizio 14");
console.log("esercizio 15");
const primo = { firstName: "Alessia", vote: 28 };
const secondo = { firstName: "Martina", vote: 30 };
const arrayStudenti = [primo, secondo];
console.log(arrayStudenti);
console.log("esercizio 16");
console.log("esercizio 17");
const myCar = {
    type: "panda",
    dateOFRelease: 2012,
    howMuch: 1,
};
console.log("esercizio 20");
//SPIEGAZIONE
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
//se una proprietà ha il punto di domanda non è necessario
//zipCode? : string
//non è necessario ma se c'è deve essere una stringa.

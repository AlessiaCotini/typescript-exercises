console.log("esercizio 2");
let myname: string = "Alessia";
let myage: number = 28;
let studingTypescript: boolean = true;

console.log("esercizio 3");
const greet = (name: string) => {
  return "Ciao " + name;
};

console.log("esercizio 4");
const sum = (a: number, b: number): number => {
  return a + b;
};

console.log("esercizio 5");
const pricePlusIva = function (n1: number) {
  let price = n1;
  return price + price * 0.22;
};
console.log(pricePlusIva(10));

console.log("esercizio 6");
const lengthOfString = function (p1: string, p2: string) {
  let sum = p1 + p2;
  return sum.length.toLocaleString();
};
console.log(lengthOfString("andrea", "gianluca"));

console.log("esercizio 8");
let mixedValue: null | undefined | number = 2;
mixedValue = null;
mixedValue = undefined;

console.log("esercizio 9");
type MesiAnno =
  | "Gennaio"
  | "Febbraio"
  | "Marzo"
  | "Aprile"
  | "Maggio"
  | "Giugno"
  | "Luglio"
  | "Agosto"
  | "Settembre"
  | "Ottobre"
  | "Novembre"
  | "Dicembre";

console.log("esercizio 10");
const numbers: number[] = [1, 2, 3];
const numeri: Array<number> = [4, 5, 6];

console.log("esercizio 11");
const tupleExampleForExercises: [string, string, string, number, number] = [
  "stefano",
  "buon",
  "compleanno",
  11,
  5,
];

console.log("esercizio 13");
interface Oggetto {
  firstName: string;
  lastName: string;
  age: number;
}

console.log("esercizio 14");
interface User {
  email: string;
  phone?: number;
}

console.log("esercizio 15");
interface Student {
  firstName: string;
  vote: number;
}
const primo: Student = { firstName: "Alessia", vote: 28 };
const secondo: Student = { firstName: "Martina", vote: 30 };
const arrayStudenti: object[] = [primo, secondo];
console.log(arrayStudenti);

console.log("esercizio 16");
interface Veicolo {
  type: string;
  dateOFRelease: number;
}
interface Auto extends Veicolo {
  howMuch: number;
}
console.log("esercizio 17");
const myCar: Auto = {
  type: "panda",
  dateOFRelease: 2012,
  howMuch: 1,
};

console.log("esercizio 20");
interface Movie<T> {
  status: number;
  success: boolean;
  message: string;
  data: T;
}
const getMovie = function () {
  fetch("")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((moviedetails) => {
      return moviedetails;
    })
    .catch((err) => {
      return err.status;
    });
};
//SPIEGAZIONE

let x: number = 100;
let firstName: string = "Stefano";
let z = "Roberto";
//assegnazione automatica del TIPO -> PROCESSO IMPLICITO
// Z da questo momento è di tipo stringa
// TYPE INFERENCE
let boh: any = 50;
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

const funzioneSomma = function (n1: number, n2: number) {
  return n1 + n2;
};
funzioneSomma(3, 4);

const sommaDefault = function (n1: number, n2?: number) {
  return n1 + (n2 || 0);
};

console.log(sommaDefault(50));

let mixed: string | number;
mixed = 100;
mixed = "ciao";

//boolean non fa parte dei tipi validi

type PersonalType = string | number;

let personal: PersonalType = "x";
personal = 0;

type GiorniSettimana =
  | "lunedi"
  | "martedi"
  | "mercoledi"
  | "giovedi"
  | "venerdi"
  | "sabato"
  | "domenica";

const giorno: GiorniSettimana = "domenica";

type NumeriPiccoli = 0 | 1 | 2 | 3 | 4 | 5;

const valore: NumeriPiccoli = 4;

//TIPO COMPLESSO

const arrayDiStringhe: string[] = ["roberto", "stefano", "andrea"];
const mixArray: (string | number)[] = [10, "francesco"];

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

//per creare altri oggetti con le stesse caratteristiche di tipo

interface Dog {
  name: string;
  age: number;
  breed: string;
}

const dog: Dog = {
  name: "marley",
  age: 5,
  breed: "labrador",
};

//INTERFACCIA CON GENERICS

interface Address<C> {
  city: string;
  street: string;
  civicNumber: C;
  zipCode: string;
}

const address: Address<number> = {
  city: "Rome",
  street: "Via della Valle dei Fontanili",
  civicNumber: 230,
  zipCode: "00168",
};

const addressDue: Address<string> = {
  city: "Trieste",
  street: "Corso Trieste",
  civicNumber: "34",
  zipCode: "34562",
};

//se una proprietà ha il punto di domanda non è necessario
//zipCode? : string
//non è necessario ma se c'è deve essere una stringa.

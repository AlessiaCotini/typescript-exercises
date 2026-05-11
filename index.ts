console.log("Hello typescript!");

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

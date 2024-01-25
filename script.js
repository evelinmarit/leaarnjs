console.log("Hello JS");
let num = 1;
const pi = 3.14; // konstandi väärtust ei saa muuta, konstandile peab väärtuse andma koheselt
var num2 = 2; // hoisting, parem kastuada vari asemel let
num = 2
let text = "hello world";
text = 'hello world'; //reeglina kasutatakse ühekordseid jutumärke
text = `hello 
world
and pi is ${pi}`; // nende (tavaliste) õlakomadega saab kasutada mitmerealiste tekstide esitamiseks ja dollari ja loogiliste sulgudega saab teksti kirjutada
console.log(text);
let bool = true;
bool = false; // booleanil on 2 väärtust: true ja false ehk 1 ja 0
console.log(bool);
// ei ole eraldi number tüüpe vastavalt komadele või mitte, kõik on number-tüüpi
console.log(undefined);
// undefined - väärtust pole antud. Teistes keeltes on selleks null. Null ei teki ise, selle tekitamiseks peab selle ise sättima
let nil = null;
nil = undefined;
console.log(nil);
num = 0/1; // vastuseks 0
console.log(num);
num = 1/0; // vastuseks undefined
num = Math.sqrt(-1);
console.log(num);
num = 0 * -1;
console.log(num);
num= 0.1 * 0.2; //tuleb komaviga programmis, tuleks vältida komakohaga arve
console.log(num);
let arrey = [1, 2, 3, "heard", true] // arrey on andmetüüp, mis sisaldab teisi andmetüüpe, erinevaid andmetüüpe
console.log(arrey);
console.log(arrey[0]);
let obj = {
    name: "Evelin", // nimeks ei saa panna sidekriipse
    age: 38,
    cats: ['Nuustik', 'Kratt'],
    aadress: {
        city: 'Tallinn',
        street:
    };
    'to-do': 'stuff',
    'anything goes': true
}
console.lob(obj);
console.logo(bj.name);
console.lob(obj['to-do']);
let func = function ()
const prompt = require("prompt-sync")();

let medirVestido = prompt("Me acompanas a medirme unos vestidos? ");

if (medirVestido == "si") {
  console.log("Gracias mi amor te amo!");
} else if (medirVestido == "no") {
  console.log("Gracias amor, de todos modos me acompanas bueno graciiiias");
} else {
  console.log("Ingresaste un dato no valido");
}


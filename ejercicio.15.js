const prompt = require("prompt-sync")();

let libro1 = {titulo: "HarryPotter", autor: "rrr", ano: "2006"};
let libro2 = {titulo: "SenorAnillos", autor: "aa", ano: "1987"};
let libro3 = {titulo: "Pilares", autor: "ff", ano: "1990"};

let libros = [libro1, libro2, libro3];


for(let i = 0; i <3; i = i+1){
	if(libros[i].ano<2000) {
	console.log(libros[i]);
}  
}



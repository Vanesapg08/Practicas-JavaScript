const prompt = require("prompt-sync")();

function saludar(){
console.log("hola bebe");
}

function teamo(){
console.log("te amo");
}

function heladycuca(){
console.log("Quiero helado y cuca");
}


let opciones = `
1. Para saludarte.
2. Para decirte que te amo.
3. Para decirte que quiero cuca.
0. Para salir del menu
`;

console.log(opciones);



let opcion = prompt(`Que opcion deseas: `); //String literals


while(opcion != 0){

opcion = prompt(`Que opcion deseas: `);

   switch(opcion){

	case "1":
		saludar();
	break;
	case "2":
		teamo();
	break;
	case "3":
		heladycuca();
	break;
	default:
		console.log("Opcion no valida!");
	break;

   }


}

console.log("Chai y gracias por todo");

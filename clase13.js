const prompt = require("prompt-sync")();

class EquipoFotografico {

        constructor(id, nombre, tipo, descripcion, precio_por_dia){
		this.id = id;
                this.nombre = nombre;
                this.tipo = tipo;
		this.descripcion = descripcion;
		this.precio_por_dia = precio_por_dia;

        }
}
let productos = [];


function anadir(){
	console.log("Anadiendo producto");
	let idIngresado = prompt("Ingresa el ID del equipo fotografico: ");
	idIngresado = Number(idIngresado);
	if(isNaN(idIngresado)){
   		console.log("No ingresaste un numero!");
	} else {
		let nombreIngresado = prompt("Ingresa el nombre del equipo fotografico: ");
		let tipoEquipo = prompt("Ingresa el tipo de equipor fotografico que deseas: ");
		let descripcionEquipo = prompt("Ingresa la descripcion del equipo fotografico que quieres anadir: ");
		let precioIngresado = prompt("Cual es el precio del equipo fotografico: "); 
		precioIngresado = Number(precioIngresado);
		if(isNaN(precioIngresado)){
   			console.log("No ingresaste un numero!");
		} else {
			let nuevoEquipo = new EquipoFotografico(idIngresado, nombreIngresado, tipoEquipo, descripcionEquipo, precioIngresado);
			productos.push(nuevoEquipo); 
			console.log("Equipo anadido correctamente");
		}
	}
}


function borrar(){
let borrado = prompt("Que producto deseas eliminar: ");
borrado = Number(borrado);
    if (isNaN(borrado)) {
        console.log("No ingresaste un numero valido");
    } else {
productos.splice(borrado,1);
console.log(productos);
console.log("Eliminado correctamente"); 
}
}



function ver(){
let equipoAVer = prompt("Cual equipo fotografico deseas ver?: ");
equipoAVer = Number(equipoAVer);    
    if (isNaN(equipoAVer)) {
        console.log("No ingresaste un numero valido");
    } else {
	console.log(productos[equipoAVer]);
	}
}



function todos(){
console.log(productos);
}

let opciones = `
1. Anadir producto.
2. Borrar producto.
3. Ver producto por Id
4. Ver todos los productos.
0. Para salir del menu
`;

console.log(opciones);


let opcion; //String literals


while(opcion != 0){

opcion = prompt(`Que opcion deseas: `);

   switch(opcion){

        case "1":
                anadir();
        break;
        case "2":
                borrar();
        break;
        case "3":
                ver();
        break;
        case "4":
                todos();
        break;
        default:
                console.log("Opcion no valida!");
        break;

   }


}

console.log("Hasta luego");


let nombre = "vane";

nombre = "sebas";

const edad = 19;

//edad = 18;// Saca error el const no se deja reasignar valor

const persona44 = {
nombre: "vanesa",
edad: 29,
saludar: function () {
           console.log("hola " + this.nombre);
       },
calcularAno: function() {
	return 2023-this.edad;
},
aumentarEdad: function() {

	this.edad = this.edad + 1;
},
decrementarEdad: function() {
	this.edad = this.edad - 1;
}

}
/*
persona.saludar();
persona.calcularAno();
console.log(persona.calcularAno());
persona.aumentarEdad();
console.log(persona.calcularAno());
console.log(persona);


const persona12 = {
nombre: "Sebastian",
edad: 32,
saludar: function () {
           console.log("hola " + this.nombre);
       },
calcularAno: function() {
        return 2023-this.edad;
},
aumentarEdad: function() {

        this.edad = this.edad + 1;
},
decrementarEdad: function() {
        this.edad = this.edad - 1;
}

}

*/


// function() {} === () => {} Arrow Function o Funcion Flecha le dicen en espanol

// Clase Class

class Persona {

	constructor(nombre, edad){
		this.nombre = nombre;
		this.edad = edad;
	}

	calcularAno() {
        	return 2023-this.edad;
	}
	aumentarEdad() {

        	this.edad = this.edad + 1;
	}
	decrementarEdad() {
        	this.edad = this.edad - 1;
	}
}


let persona1 = new Persona("vanesa", 29);
let persona2 = new Persona("Sebastian", 32);

let personas = [persona1, persona2];
console.log(personas);


persona2.decrementarEdad();
console.log(persona2.calcularAno());



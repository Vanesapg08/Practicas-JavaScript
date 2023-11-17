//cancionero titulo autor y fecha 

let cancionero = [{titulo: "cenizas al viento", autor: "jose alejandro morales", fecha: 1913},
		{titulo: "collar de lagrimas", autor: "federico rivas", fecha: 1856},
		{titulo: "di que no me quieres", autor: "alvaro dalmar", fecha: 1917},
		{titulo: "negrita", autor: "luis duenas", fecha: 1977},
		{titulo: "las acacias", autor: "jorge molina", fecha: 1898}]

console.log(cancionero[4].titulo);
for(let i = 0; i<=4 ; i = i+1){
	console.log(cancionero[i].titulo); 
}

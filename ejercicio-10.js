const prompt = require('prompt-sync')();

/*La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los ingredientes para cada tipo de pizza aparecen a continuación.

Ingredientes vegetarianos: Pimiento y tofu.
Ingredientes no vegetarianos: Peperoni, Jamón y Salmón.
Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en función de su respuesta le muestre un menú con los ingredientes disponibles para que 
elija. Solo se puede eligir un ingrediente además de la mozzarella y el tomate que están en todas la pizzas. Al final se debe mostrar por pantalla si la pizza elegida es 
vegetariana o no y todos los ingredientes que lleva.*/


let saborPizza = prompt("Quieres una pizza vegetariana: ");


if(saborPizza == "si"){

	let saborVegetariano = prompt("Que ingredientes quieres pimiento o tofu ");
if(saborVegetariano == "pimiento"){
console.log("Tu pizza vegetariano contiene mozarella, tomate y pimiento");
} else if(saborVegetariano == "tofu"){
console.log("Tu pizza vegetariana contiene mozarella, tomate y tofu");
} else {
console.log("Tu pizza no puede contener este ingrediente: " + saborVegetariano);
}
} else if(saborPizza == "no"){



let saborNoVegetariano = prompt("Que ingredientes quieres peperoni, jamon o salmon ");
 if(saborNoVegetariano == "peperoni"){
console.log("Tu pizza no vegetariana contiene morzarella, tomate y  Peperoni");
} else if(saborNoVegetariano == "jamon"){
console.log("Tu pizza no vegetariana contiene morzarella, tomate y jamon");
} else if(saborNoVegetariano == "salmon") {
console.log("Tu pizza no vegetariana contiene morzarella, tomate y salmon");
} else {
console.log("Tu pizza no puede contener este ingrediente: " + saborNoVegetariano);

}
} else {
console.log("No tenemos otro tipo de sabor de pizza");
}


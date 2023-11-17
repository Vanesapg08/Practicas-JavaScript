
//Escriba una funcion que reciba un numero X y retorne en un arreglo, los numeros desde 0 al X.

function ejercicio(x){
  let y = [];
	for(let i = 0; i <= x; i++){
	y[i] = i;
	}
	return y;
}

//prueba 1 con resultado "4"
let resultado = ejercicio(4);
  console.log(resultado);


//----------------------------------------------------------------------------------------------------------

//Escriba una funcion que dada una X cree un array lleno de 1


function ejercicio1(x){
  let y = [];
	for(let i = 0; i <= x; i++){
	y[i] = 1;
	}
	return y;
}


//prueba 1 con resultado "2"
let resultado1 = ejercicio1(2);
  console.log(resultado1);


//----------------------------------------------------------------------------------------------------------

//F(X) = Y
// Y = [X, X-1, X-2, ..... 0];

function ejercicio2(x){
  let y = [];
	for(let i = x; i >= 0; i--){
	y[i] = i;
	}
	return y;
}

//prueba 1 con resultado "6"
let resultado2 = ejercicio2(6);
  console.log(resultado2);


//----------------------------------------------------------------------------------------------------------

function ejercicio3(x){
  let y = [];
	for(let i = 0; i <= x; i++){
	y[i] = 3;
	}
	return y;
}

//prueba 1 con resultado "5"
let resultado3 = ejercicio3(5);
  console.log(resultado3);

resultado3 = ejercicio3(2);
  console.log(resultado3);

resultado3 = ejercicio3(100);
  console.log(resultado3); 


//----------------------------------------------------------------------------------------------------------

function ejercicio4(x){
  let y = [];
	for(let i = 0; i < x; i++){
	y[i] = x;
	}
	return y;
}

//prueba 1 con resultado "1"
let resultado4 = ejercicio4(1);
  console.log(resultado4);

resultado4 = ejercicio4(2);
  console.log(resultado4);

resultado4 = ejercicio4(5);
  console.log(resultado4);


//----------------------------------------------------------------------------------------------------------
 
function ejercicio5(x){
  let y = [];
        for(let i = 0; i < x; i++){
        y[i] = x+1;
        }
        return y;
}
         
//prueba 1 con resultado "1"
let resultado5 = ejercicio5(1);
  console.log(resultado5);

resultado5 = ejercicio5(2);
  console.log(resultado5);

resultado5 = ejercicio5(3);
  console.log(resultado5);

resultado5 = ejercicio5(5);
  console.log(resultado5);


//----------------------------------------------------------------------------------------------------------

function ejercicio6(x){
  let y = [];
        for(let i = 0; i < x; i++){
        y[i] = x*i;
        }
        return y;
}

//prueba 1 con resultado "1"
let resultado6 = ejercicio6(1);
  console.log(resultado6);

resultado6 = ejercicio6(2);
  console.log(resultado6);

resultado6 = ejercicio6(3);
  console.log(resultado6);

resultado6 = ejercicio6(4);
  console.log(resultado6);

//----------------------------------------------------------------------------------------------------------

function ejercicio7(x){
  let y = [];
        for(let i = 0; i < x; i++){
        y[i] = x*i+1;
        }
        return y;
}

//prueba 1 con resultado "1"
let resultado7 = ejercicio7(1);
  console.log(resultado7);

resultado7 = ejercicio7(2);
  console.log(resultado7);

resultado7 = ejercicio7(3);
  console.log(resultado7);

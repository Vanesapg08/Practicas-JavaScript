//-------------------------------------------------------------------------------------------------
  
 
//FUNCTION y = "hola" + x;

function ejercicio4(x){
  let y = "hola " + x;
  return y;
}

//prueba 1 con resultado mundo
let resultado5 = ejercicio4( "mundo");
 console.log("frase " + resultado5);


//-------------------------------------------------------------------------------------------------


//FUNCTION y = si x < 18; "eres menor de edad"
//	   y = si x = 18; "felicidades"
//	   y = si x > 18; "ya estas vieja"
//	   y = otro "error en la x"


function ejercicio5(x){
  let y; 
	if(x < 18){
	y = "eres menor de edad";
} else if(x = 18){
	y = "felicidades";
} else if(x > 18){
	y = "ya estas vieja";
} else {
	y = "error en la x";  
} 
 return y;
}


//prueba 1 con resultado "eres menor de edad"
let resultado6 = ejercicio5(12);
  console.log("En este momento " + resultado6);
 

//-------------------------------------------------------------------------------------------------


//FUNCTION y = x == true; "la vida"
//	   y = x == false; "es bella"
//	   y = "error"

function ejercicio6(x){
  let y;
	if(x == true){
	y = "la vida";
} else if(x == false){
	y = "es bella";
} else { 
	y = "error";
}
  return y;
}


//prueba 1 con resultado
let resultado7 = ejercicio6(false);
  console.log("frase " + resultado7);


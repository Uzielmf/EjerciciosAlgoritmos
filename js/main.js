
/*

let num1 = prompt("Ingrese el primer numero (entre el 1 y el 100): ","")
let num2 = prompt("Ingrese el segundo numero (entre el 1 y el 100):","")
let num3 = prompt("Ingrese el tercer numero (entre el 1 y el 100):","") 

num1 = parseFloat (num1,10);
num2 = parseFloat (num2,10);
num3 = parseFloat (num3,10);



if (num1 , num2 , num3 > 100); {
    alert ("el numero debe ser menor que 100")
}

if ((num1>=num2) && (num1>=num3)) {
    alert ( num1 + " es el numero mas grande");
}else if ((num2>=num1) && (num2>=num3)) {
        alert ( num2 + " es el numero mas grande");    
}else
 {
    alert ( num3  + " es el numero mas grande")
}



if ((num1<=num2) && (num1<=num3)) {
    alert ( num1 + " es el numero mas chico");
}else if ((num2<=num1) && (num2<=num3)) {
        alert ( num2 + " es el numero mas chico");    
}else
 {
    alert ( num3  + " es el numero mas chico")
}


if (num1 , num2 , num3 > 100) {
    alert ("el numero debe ser menr que 100")
}
*/


//Multiplo de 3

/*
let num1 = prompt ("Ingresa un numero entre el 100 y el 200:");

if ((num1 % 3) ==0)  {
    alert(num1 + " es multiplo de 3");
} else {
    alert(num1 + " no es multiplo de 3");
}
*/


//Sumados 2 dan el


//let num1 = prompt("Ingrese el primer numero: ","")
//let num2 = prompt("Ingrese el segundo numero:","")
//let num3 = prompt("Ingrese el tercer numero:","") 

//num1 = parseFloat (num1,10);
//num2 = parseFloat (num2,10);
//num3 = parseFloat (num3,10);



//if ((num1 + num2) === num3) {
 //   alert ( num3 + " es la suma de el primer y segundo numero");
//}else if ((num2 + num3) === num1) {
  //      alert ( num1 + " es la suma del segundo y el tercer numero");    
//}else if((num1 + num3) === num2)
// {
//    alert ( num2  + " es la suma del primer y tercer numero");
//}
//else {
//    alert ("ninguo es la suma de los otros dos");
//}



// Par o impar

/*
let num1 = prompt ("Ingresa un numero:");

if ((num1 % 2) ==0)  {
    alert(num1 + " es par");
} else {
    alert(num1 + " es impar");
}
*/



//Adivina el numero
function Adivinar() {

    let superior = 100;
    let inferior = 0;
    let noEncontrado = true;
    
    while (noEncontrado) {
        let mid = parseInt(inferior + ((superior - inferior)/ 2));
        console.log (mid);
        console.log(((superior-inferior)/ 2));
    
        if (((superior-inferior)/2)<1) {
    noEncontrado = false;
    alert("Tu numero es el " + (parseInt(mid)+1));
    break;        
        }
        let res= confirm ("tu numero es menor o igual a "+ mid);
        if (res) {
            superior = mid;
        } else {
            inferior=mid;
        }
    }
    }
    
    Adivinar();


























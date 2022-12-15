//Campo producto - Name
//Campo cantidad - Number
//Botón agregar btnAgregar
//alertValidacionesTexto
//alertValidaciones
//contadorProductos
//productosTotal
//precioTotal


let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

//<h5>Total</h5>
let total = document.getElementById("precioTotal"); //<span>0</span>


let tabla = document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");


let alertValidaciones = document.getElementById("alertValidaciones");
let contadorProductos = document.getElementById("contadorProductos"); //número fondo rojo CONTADOR
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");
let contador = 0;
let totalEnProductos = 0;
let costoTotal = 0;
let precio = 0;
let cantidad = 0;


let btnAgregar = document.getElementById("btnAgregar");

//function que deveulve un precio inventado
function getPrecio(){
    return Math.floor(Math.random() * 50 * 100) / 100;
}//getPrecio

//function que valida el nombre de los productos
function validarNombre(){
    return (txtNombre.value.length>=2) ? true : false;
}//validarNombre

function validarCantidad(){
    if(txtNumber.value.length == 0){
        return false;
    }
    if(isNaN(txtNumber.value)){
        return false;
    }
    if(parseFloat(txtNumber.value) <= 0){
        return false;
    }
    return true;
}//validarCantidad



let idTimeout = 0;

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    clearTimeout(idTimeout);
    alertValidacionesTexto.innerHTML = "";

if((! validarNombre()) || (! validarCantidad()) ){
    let lista = "<ul>Los campos deben de estar llenados correctamente</ul>";
    if(! validarNombre()){
        txtNombre.style.border = "red thin solid";
        lista += "<li>Se debe escribir un nombre válido</li>"
    }// if validarNombre 

    if(! validarCantidad()){
        txtNumber.style.border = "red thin solid";
        lista += "<li>Se debe escribir una cantidad válida</li>"
    }// if validarCantidad


    lista += "</ul>"
    // let alertValidacionesTexto = document.getElementById("alertValidacionesTexto")
    alertValidacionesTexto.insertAdjacentHTML("beforeend", lista)
    alertValidaciones.style.display = "block";
    idTimeout = setTimeout(function(){
        alertValidaciones.style.display= "none";
        // txtNombre.style.border = "";
        // txtNumber.style.border = "";
    }, 2000);
    return false;
    // console.log(lista);
}// if ! validaciones

txtNombre.style.border = ""
txtNumber.style.border = ""
alertValidaciones.style.display= "none";
contador++;
contadorProductos.innerHTML = contador;


cantidad = parseFloat(txtNumber.value);
totalEnProductos += cantidad;
productosTotal.innerHTML = totalEnProductos;

precio = getPrecio();
costoTotal += precio * cantidad;
precioTotal.innerHTML = `$ ${costoTotal.toFixed(2)}`;


let row = `<tr>

<td>${contador}</td>
<td>${txtNombre.value}</td>
<td>${txtNumber.value}</td>
<td>${precio}</td>
</tr>`

cuerpoTabla[0].insertAdjacentHTML("beforeend", row);

txtNombre.value = "";
txtNumber.value = "";

txtNombre.focus();



});



/*
//     if(txtNombre.value.length >= 2){
//         return true
//     }else{
//         alertError.style.display = "block";
//         alertError.innerHTML += `<li>Se debe escribir un nombre válido</li>`
//         txtNombre.style.border = "solid red 1px"
//     }

//     if((txtNumber.value.length) == 0 || isNaN(txtNumber.value) || parseFloat(txtNumber.value) <= 0){
//         alertError.style.display = "block";
//         alertError.innerHTML += `<li>Se debe escribir una cantidad válida</li>`
//         txtNumber.style.border = "solid red 1px"
//     }else{
//         return true;
//     }





exampleFormControlInput2.value = exampleFormControlInput2.value.toUpperCase();
if(exampleFormControlInput2.value.match(RFCRegex) == null){
    alertError.style.display = "block";
    alertError.innerHTML += "<br/>El RFC no es válido"
    exampleFormControlInput2.style.border = "solid red 1px"
    }else{
        exampleFormControlInput2.style.border = "solid green 1px";
        validos++;
    }

    if((idTimeout != undefined) && (idTimeout != null)){
        clearTimeout(idTimeout);
    }//idTimeout

    //if Ternario
    // alertError.innerHTML += (! flexCheckDefault.checked) ? "<br/> Debes aceptar los términos y condiciones" : "";

    if(! flexCheckDefault.checked){
        alertError.innerHTML += "<br/>Debes aceptar los términos y condiciones";
        alertError.style.display = "block";
    }// checked

    if(validos == 3){
        idTimeout = setTimeout(function(){
            exampleFormControlTextarea1.style.border = "";
            exampleFormControlInput1.style.border = "";
            exampleFormControlInput2.style.border = "";
        }, 2000);
    }//==3


*/



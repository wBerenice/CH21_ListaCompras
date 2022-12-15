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

let datos = []; //new Array ()  Arreglo para almacenar la lista de compras

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

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


localStorage.setItem("contadorProductos", contador);
localStorage.setItem("totalEnProductos", totalEnProductos);
localStorage.setItem("costoTotal", costoTotal);



let row = `<tr>

<td>${contador}</td>
<td>${txtNombre.value}</td>
<td>${txtNumber.value}</td>
<td>${precio}</td>
</tr>`

cuerpoTabla[0].insertAdjacentHTML("beforeend", row);


let elemento = `{
"id": ${contador},
"nombre": "${txtNombre.value}",
"cantidad":${txtNumber.value},
"precio":${precio}
}`

// datos.push(elemento);
datos.push(JSON.parse(elemento));
console.log(elemento)
console.log(datos)
localStorage.setItem("datos", JSON.stringify(datos));

txtNombre.value = "";
txtNumber.value = "";
txtNombre.focus();

});//click btnAgregar

txtNombre.addEventListener("blur", function(event){
    event.preventDefault();
    // event.target.value = event.target.value.trim();
    
    txtNombre.value = txtNombre.value.trim();
})


txtNumber.addEventListener("blur", function(event){
    event.preventDefault();
    // event.target.value = event.target.value.trim(); ///Target va a traer de donde se originó el evento
    txtNumber.value = txtNumber.value.trim();
})


//LOCAL STORAGE

window.addEventListener("load", function(event){
    let tmp = localStorage.getItem("contadorProductos")
    if(tmp != null){
        contador = parseInt(tmp);
        contadorProductos.innerHTML = contador;
    }//if

    tmp = localStorage.getItem("totalEnProductos")
    if(tmp != null){
        totalEnProductos = parseInt(tmp);
        totalEnProductos.innerHTML = totalEnProductos;
    }//if


    tmp = localStorage.getItem("costoTotal")
    if(tmp != null){
        costoTotal = parseFloat(tmp);
        // precioTotal.innerHTML = `$ ${costoTotal.toFixed(2)}`;
        precioTotal.innerHTML = "$ " + costoTotal.toFixed(2); 
    }//if

    tmp = localStorage.getItem("datos");
    if(tmp != null){
        datos = JSON.parse(tmp);
        datos.forEach(element => {
            cuerpoTabla[0].innerHTML += `<tr>
            <th>${element.id}</th>
            <td>${element.nombre}</td>
            <td>${element.cantidad}</td>
            <td>$ ${element.precio}</td>
            </tr>`
        });

    }//if

});//window addEventListener


// let miUsuario = {nombre:"Jc", edad:"40", ciudad:"CDMX"};
// let miJson = JSON.stringify(miUsuario);
// console.log(miJson); //{"nombre":"Jc","edad":"40","ciudad":"CDMX"}


btnClear.addEventListener("click", function(event){
    contador= 0;
    contadorProductos.innerHTML = contador;
    totalEnProductos = 0;
    productosTotal.innerHTML = totalEnProductos;
    costoTotal=0;
    precioTotal.innerHTML= `$ ${costoTotal.toFixed(2)}`;
    cuerpoTabla[0].innerHTML= "";


    localStorage.removeItem("contadorProductos");
    localStorage.removeItem("totalEnProductos");
    localStorage.removeItem("costoTotal");
    localStorage.removeItem("datos");

    localStorage.clear(); //opción rápida, pero borra todo el almacenamiento local  localStorage
})


















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



"use strict"

//Definimos variables a utilizar
let primerNumero , segundoNumero , tipoOperacion , resultado;

//Definimos una función para limpiar la pantalla
function limpiarPantalla() {

    pantalla.value = " ";
    
}

//Definimos una función para marcar botones
function marcarBoton(boton){

    pantalla.value = pantalla.value + boton;

}

//Definimos una función para cambiar el signo
function cambiarSigno() {

    pantalla.value = Number(pantalla.value) * -1;
    
}

//Definimos una función para calcular la operación
function operacion(op) {

    primerNumero = Number(pantalla.value);
    tipoOperacion = Number(op);
    limpiarPantalla();

}

//Definimos una función para la operación
function calcular() {

    segundoNumero = Number(pantalla.value);
    limpiarPantalla();

    switch (tipoOperacion) {

        case 1:
            resultado = primerNumero + segundoNumero;
        break;
        case 2:
            resultado = primerNumero - segundoNumero;
        break;
        case 3:
            resultado = primerNumero * segundoNumero;
        break;
        case 4:
            resultado = primerNumero / segundoNumero;
        break;
        case 5:
            resultado = Math.pow(primerNumero , segundoNumero);
        break;

    }

    pantalla.value = resultado;

}

//Definimos una función para el porcentaje
function porcentaje() {

    segundoNumero = Number(pantalla.value);
    limpiarPantalla();
    resultado = primerNumero * (segundoNumero/100);
    pantalla.value = resultado;

}
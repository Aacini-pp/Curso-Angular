"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modelos_1 = require("./modelos");
//objeto cumple conto y solo esas
var us = { nombreUsuario: "", pass: "a", hablar: function () { } };
console.log(us);
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.edad = 1;
        this.nombre = nombre;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function () {
        return 15;
    };
    Persona.metodoEstatico = function () {
        return 16;
    };
    return Persona;
}());
var persona = new Persona("marco"); //se infiere el tipo
console.log(persona.getNombre());
console.log(Persona.metodoEstatico());
/****generics */
var arregloNumeros = [1, 2, 3, 4]; //solo admite numeros
var arrayGenerico = [1, 2, 3, "texto"]; //admite cualquier tipo
console.log(arrayGenerico);
/** Modulos */
var miAvion = new modelos_1.Avion("mxn");

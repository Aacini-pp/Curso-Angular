
interface Usuario{
    nombreUsuario:string;
    pass:string;
    confirmasPass?:string; //? es opcional
    hablar():void
}

//objeto cumple conto y solo esas
let us:Usuario = {nombreUsuario:"",pass:"a",hablar:function(){}}


console.log(us);

class Persona{
    private nombre:string;
    public edad:number=1;
    constructor(nombre:string){
            this.nombre= nombre;
    } 

    public getNombre():string{
        return this.nombre;
    }

    private setNombre():number{
            return 15;
    }

    static metodoEstatico():number{
        return 16;
    }

}


let persona = new Persona("marco");//se infiere el tipo


console.log(persona.getNombre());


console.log(Persona.metodoEstatico() );
/****generics */
let  arregloNumeros: Array<number>=[1,2,3,4]; //solo admite numeros


let arrayGenerico=[1,2,3,"texto"]; //admite cualquier tipo


console.log(arrayGenerico)
/** Modulos */

//let miAvion = new Avion("mxn");


///**funciones flecha**/ */
let suma = function(a:number,b:number){
        return a+b;

}


let  add = (a:number, b:number)=>{
        return a+b;
}

console.log(suma(2,5));


console.log(add(4,6));

/****decoradores** */

function  Saludar(target:function):void{
    target.prototype.saludos=function():void{
        console.log("saludos");
    }
}

@Saludar  //agregamos el decorador, que es como inyectar una funcions
class Hola{


}

let sal:Hola = new Hola();
sal.Saludar();




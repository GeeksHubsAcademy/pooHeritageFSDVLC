
// //Clase padre
// class Vehiculo {
//     constructor(marca, matricula, ruedas, puertas, años, velocidad) {
//         this.marca = marca;
//         this.matricula = matricula;
//         this.ruedas = ruedas;
//         this.puertas = puertas;
//         this.años = años;
//         this.velocidad = velocidad;
//     }
//     correr() {
//         return this.velocidad += 10;
//     }
//     frenar() {
//         return this.velocidad = 0;
//     }
//     aparcar() {
//         return console.log("Aparcado!");
//     }
// }

// //Clases hijas

// class Coche extends Vehiculo {
//     constructor(marca, matricula, ruedas, puertas, años) {
//         super(marca, matricula, ruedas, puertas, años);
//         this.consumo = 'Diesel';
//     }
// }

// class Moto extends Vehiculo {
//     constructor(marca, matricula, ruedas, puertas, años) {
//         super(marca, matricula, ruedas, puertas, años);
//     }
// }
    
// class Patin extends Vehiculo {
//     constructor(marca, matricula, ruedas, años) {
//         super(marca, matricula, ruedas, años);
//     }
// }
    
// class Bicicleta extends Vehiculo {
//     constructor(marca, matricula, ruedas, años) {
//         super(marca, matricula, ruedas, años);
//     }
// }


//clase Padre Deportista
class Deportista {

    constructor(nombre,edad,peso,altura,lesiones){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
        this.lesiones = lesiones;
    }

    entrenar(){

    }

    comer(){

    }

    descansar(){

    }
};

//clases Hijas

class Tenista extends Deportista {

    //En este caso, aquello que está dentro de super, viene heredado
    //de la clase padre. la propiedad slams no está en super ni en la clase
    //padre, es nueva para esta clase.
    constructor(nombre,edad,peso,altura,lesiones,slams){
        super(nombre,edad,peso,altura,lesiones);

        this.slams = slams;
    }

    saque(){

    }

    reves(){

    }
    
}

class Rugby extends Deportista {

    constructor(nombre,peso,altura,lesiones,posicion){
        super(nombre,peso,altura,lesiones);

        this.posicion = posicion;

    }

    tackle(){

    }
}

class Futbolista extends Deportista {

    constructor(nombre,edad,peso,sueldo){
        super(nombre,edad,peso);

        this.sueldo = sueldo;
    }

    tirarse_al_suelo(){

    }

    marcar_gol(){

    }
}

//Instanciando...

let tenista1 = new Tenista("Andreu", 18, 70, 1.74,[0],10);

let jugadorRugby = new Rugby("Juan",90,1.80,[0],"defensa");

let jugadorFutbol = new Futbolista("Cristian",20,76,1000000);

tenista1.reves();
jugadorRugby.tackle();
jugadorFutbol.marcar_gol();


let jugadorFutbol2 = new Futbolista("Callum",19,75,2000000);


jugadorFutbol2.tirarse_al_suelo();

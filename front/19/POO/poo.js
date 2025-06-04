//Clase
class Auto {
    //atributos con valores iniciales (opcional)
    encendido = false;
    velocidad = 0;
    //funcion constructora - colocamos los atributos
    constructor(marca, modelo, año, categoria, km, color, cilindrada_motor, combustible, gnc, precio, cantPuertas) {
        //inicializar las propiedades-atributos con sus valores
//atributos
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.categoria = categoria;
        this.km = km;
        this.color = color;
        this.cilindrada_motor = cilindrada_motor;
        this.combustible = combustible;
        this.gnc = gnc;
        this.precio = precio;
        this.cantPuertas = cantPuertas;
    }

//metodos: encender auto, acelerar, frenar
//¿sobre que atributos trabaja este metodo?
    encenderApagar(){
        //validar el dato del encendido
        if(this.encendido === false){
            console.log("El auto se ha encendido")
            return this.encendido = true
        } else {
            console.log("El auto se ha apagado")
            return this.encendido = false
        }
    }

    cambiarColor(color) {
        this.color = color
        console.log(`El auto ha cambiado al color ${color}`)
        return this.color
    }

    acelerar(vel_arranque){
        //validar
        if(this.encendido === true){
            // Casteo - Casting : cambiar de tipo un valor
            let resultado = this.velocidad += Number(vel_arranque)
            console.log(`El auto aumentó su velocidad en ${vel_arranque}, va a ${this.velocidad}km/h`)
             return resultado
        } else {
            console.log("Debes encender el auto para poder arrancarlo")
            return
        }
    }

    frenar(vel_freno){
        if(this.encendido === true) {
           let resultado = this.velocidad -= Number(vel_freno)
           console.log(`El auto ha desacelerado su velocidad en ${vel_freno}, va a ${this.velocidad}km/h`)
           return resultado
        } else {
            console.log("Debes prender el auto para frenarlo")
        }
    }



}

//Representar autos
let fiat_siena = {
    marca: "fiat",
    modelo: "siena",
    año: 2005,
    categoria: "sedan",
    km: 200000,
    color: "gris",
    cilindrada_motor: 1.6,
    combustible: "nafta",
    gnc: true,
    precio: 4000000,
    cantPuertas: 4
}

let volkswagen_gol = {
    marca: "volkswagen",
    modelo: "gol",
    año: 2013,
    categoria: "hatchback",
    km: 70000,
    color: "blanco",
    cilindrada_motor: 1.6,
    combustible: "nafta",
    gnc: false,
    precio: 7000000,
    cantPuertas: 3
}

let gol_volkswagen = new Auto("volkswagen", "gol", 2013, "hatchback", 7000, "blanco", 1.6, "nafta", true, 7000000, 3)

gol_volkswagen.encenderApagar()
gol_volkswagen.acelerar(10)
gol_volkswagen.acelerar(100)
gol_volkswagen.frenar(30)
gol_volkswagen.frenar(5)

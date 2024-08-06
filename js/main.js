arrayDeCombos = [
    {
        nombre: "BigBurger",
        precio: 7500,
        descripcion: "Hamburguesa doble con queso mas bebida y papas",
    },
    {
        nombre: "MegaBacon",
        precio: 10000,
        descripcion: "Hamburguesa doble con queso y bacon mas bebida y papas",
    },
    {
        nombre: "ChesseeBurger",
        precio: 11000,
        descripcion: "Hamburguesa doble con queso extra mas bebida y papas",
    },
];

function modificarCombo() {
    let comboModificar = prompt(`Seleccione el combo a modificar precio:
        0. BigBurger
        1. MegaBacon
        2. ChesseeBurger`);

    if(comboModificar = 0){
        let precioactualizado = prompt("Ingrese el precio actualizado: ");
        arrayDeCombos[0].precio = precioactualizado
        prompt("El precio actual es: $"+ precioactualizado);
    }else if(comboModificar = 1){
        let precioactualizado = prompt("Ingrese el precio actualizado: ");
        arrayDeCombos[1].precio = precioactualizado
        prompt("El precio actual es: $"+ precioactualizado);
    }else if(comboModificar = 2){
        let precioactualizado = prompt("Ingrese el precio actualizado: ");
        arrayDeCombos[2].precio = precioactualizado
        prompt("El precio actual es: $"+ precioactualizado);
    } else{
        prompt("Opcion no valida. ❌")
    }
}

function sumarCompra(){

    alert("Elija la cantidad de combos que va a desear llevar! 🍔🍟")
    let primercombo = parseInt(prompt("Ingrese la cantidad de combos Bigburger: "))
    let segundocombo = parseInt(prompt("Ingrese la cantidad de combos MegaBacon: "))
    let tercercombo = parseInt(prompt("Ingrese la cantidad de combos ChesseeBurger: "))

    let primertotal = (arrayDeCombos[0].precio * primercombo)
    let segundototal = (arrayDeCombos[1].precio * segundocombo)
    let tercertotal = (arrayDeCombos[2].precio * tercercombo)

    let total = (primertotal+segundototal+tercertotal)

    alert("El total a pagar es : $"+ total)
}

alert("Bienvenido a BurgerCompany! 😀")

let opcionElegida = parseInt(prompt(`Seleccione una opcion: 
    1. Modificar precios
    2. Comprar
    3. Salir`));

    if(opcionElegida === 1){
        modificarCombo()
    }
    else if(opcionElegida === 2){
        sumarCompra();
    }else if(opcionElegida === 3){
        alert("Nos vemos pronto!!! 🤞")
    }
    else{
        alert("Opcion no valida. ❌")
    }


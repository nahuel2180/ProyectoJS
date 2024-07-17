function calcularIva() {

    const iva = 0.21
    const descuento = 0.10
    let salir = false
    
    while (salir === false) {
        let producto = prompt("Ingrese el nombre del producto: ")
        let precio = parseFloat(prompt("Ingrese el precio del producto: "))
        if( precio > 1){
        let precioIva = precio + (precio * iva) 
        let precioDesc= precioIva - (precioIva * descuento)
        
        alert("El producto "+ producto +" tiene un valor de: "+ precio +".")
        alert("Su valor con IVA es: "+ precioIva +" Y su valor con el descuento de socio es: "+ precioDesc +".")

        salir = prompt("Si desea salir ingrese 'true'. En caso contrario ingrese 'false': ").toLowerCase
        }else{
            alert("Ingreso un precio menor a 1, vuelva a ingresar el precio")
        }
    }


}

calcularIva()


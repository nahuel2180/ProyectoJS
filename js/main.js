const carrito = JSON.parse(localStorage.getItem("carrito")) ||  [];


const productos = [
    {
        id: "Skyy Vodka Raspberry",
        titulo: "Skyy Vodka Raspberry",
        precio: 13000,
        img: "./img/skyy.png",
    },
    {
        id: "Don perignon",
        titulo: "Don perignon",
        precio: 43000,
        img: "./img/donperi.png",
    },
    {
        id: "Nuvo espumante",
        titulo: "Nuvo espumante",
        precio: 55000,
        img: "./img/nuvo.png",
    }
]

const contenedorProductos = document.querySelector("#productos");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total");
const vaciarCarrito = document.querySelector("#vaciar-carrito");


productos.forEach((producto) => {

    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img class="producto-img" src="${producto.img}" alt="">
        <h3>${producto.titulo}</h3>
        <p>$${producto.precio}</p>
    `;

    let button = document.createElement("button");
    button.classList.add("producto-btn");
    button.innerText = "Agregar al carrito";
    button.addEventListener("click", () => {
        agregarAlCarrito(producto);
    })

    let btninfo = document.createElement("button");
    btninfo.classList.add("producto-btn");
    btninfo.innerText = "Mas informacion";
    btninfo.addEventListener("click", () => {
        fetch("../data/descripcion.json")
            .then((resp) => resp.json())
            .then((data) => {
                const infoDiv = document.getElementById("info");
                infoDiv.innerHTML = "";
                data.forEach(item => {
                    const itemDiv = document.createElement("div");
                    itemDiv.innerHTML = `
                    <h2>${item.nombre}</h2>
                    <p>$${item.precio}</p>
                    <p>${item.descripcion}</p>
                    `;
                    infoDiv.appendChild(itemDiv);
                })
            })
    })

   

    div.append(button);
    div.append(btninfo);
    contenedorProductos.append(div);
});




const agregarAlCarrito = (producto) => {
    let productoEnCarrito = carrito.find((item) => item.id === producto.id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else{
        carrito.push({...producto, cantidad:1});
    }
    
    actualizarCarrito();
}

function actualizarCarrito() {
    if (carrito.length === 0) {
        carritoVacio.classList.remove("nada");
        carritoProductos.classList.add("nada");
        vaciarCarrito.classList.add("nada");
    } else {
        carritoVacio.classList.add("nada");
        carritoProductos.classList.remove("nada");
        vaciarCarrito.classList.remove("nada");

        carritoProductos.innerHTML = "";
        carrito.forEach((producto) => {
            let div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <h3>${producto.titulo}</h3>
                <p>$${producto.precio}</p>
                <p>${producto.cantidad}</p>
                <p>$${producto.precio * producto.cantidad}</p>
            `;

            let button = document.createElement("button");
            button.classList.add("carrito-producto-btn");
            button.innerText = "✖️";
            button.addEventListener("click", () => {
                borrarDelCarrito(producto);
            })

            div.append(button);
            carritoProductos.append(div);
        })
    }
    actualizarTotal();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}
actualizarCarrito();

function borrarDelCarrito(producto) {
    const indice = carrito.findIndex((item) => item.id === producto.id);
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function actualizarTotal() {
    const total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
    carritoTotal.innerText = "$" + total;
}

vaciarCarrito.addEventListener("click", () => {
    Swal.fire({
        title: "Has vaciado tu carrito!",
        Text:"Se ha vaciado el carrito de compras con exito!!",
        icon: "success",
        confirmButtonText:"OK!",
    });
    carrito.length = 0;
    actualizarCarrito();
})
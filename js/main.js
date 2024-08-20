const carrito = [];


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

    div.append(button);
    contenedorProductos.append(div);
});


const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    if (carrito.length === 0) {
        carritoVacio.classList.remove("nada");
        carritoProductos.classList.add("nada");
    } else {
        carritoVacio.classList.add("nada");
        carritoProductos.classList.remove("nada");

        carritoProductos.innerHTML = "";
        carrito.forEach((producto) => {
            let div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <h3>${producto.titulo}</h3>
                <p>$${producto.precio}</p>
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
}

function borrarDelCarrito(producto) {
    const indice = carrito.findIndex((item) => item.id === producto.id);
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function actualizarTotal() {
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    carritoTotal.innerText = "$" + total;
}
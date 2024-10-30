let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    // Agrega el producto al carrito y actualiza el total
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    // Muestra los productos en el carrito y el total actualizado
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; // Limpia la lista antes de mostrar los elementos

    carrito.forEach((producto) => {
        const item = document.createElement('li');
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(item);
    });
    document.getElementById('total').textContent = `Total: $${total}`;
}

function vaciarCarrito() {
    // Vacía el carrito y reinicia el total
    carrito = [];
    total = 0;
    actualizarCarrito();
}

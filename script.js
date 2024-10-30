// Simulación de agregar al carrito
let carrito = [];

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    alert(`Agregado al carrito: ${producto} - $${precio}`);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Mensaje enviado. ¡Gracias por contactarnos!");
});

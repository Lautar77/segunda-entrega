
function calcularPrecio(tipoArido, cantidad) {
    let precioUnitario;

    switch (tipoArido) {
        case "arena":
            precioUnitario = 12000; 
            break;
        case "ripio":
            precioUnitario = 10000; 
            break;
        case "piedra bola":
            precioUnitario = 20000; 
            break;
        default:
            precioUnitario = 0;
            break;
    }

    // Calcular el precio total
    const precioTotal = precioUnitario * cantidad;

    return precioTotal;
}

// Función para solicitar al usuario el tipo de árido y la cantidad
function solicitarDatosUsuario() {
    let tipoArido;
    let cantidad;

    do {
        tipoArido = prompt("Seleccione el tipo de árido: \narena. \nripio. \npiedra bola.").toLowerCase();
    } while (tipoArido !== "arena" && tipoArido !== "ripio" && tipoArido !== "piedra bola");

    do {
        cantidad = parseFloat(prompt("Ingrese la cantidad (en metros cúbicos):"));
    } while (isNaN(cantidad) || cantidad <= 0);

    const precio = calcularPrecio(tipoArido, cantidad);

    alert("Precio total: $" + precio);
}

// Llamar a la función para solicitar los datos al usuario
solicitarDatosUsuario();

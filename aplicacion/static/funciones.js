// Esperamos a que el usuario haga clic en el botón
document.getElementById('btnCalcular').addEventListener('click', function() {
    
    // 1. Capturamos los valores que el usuario escribió en los cuadros
    let tabla = parseInt(document.getElementById('numeroTabla').value);
    let limite = parseInt(document.getElementById('numeroLimite').value);
    let contenedorResultado = document.getElementById('resultadoTabla');
    
    // 2. Limpiamos el contenedor por si había un cálculo anterior
    contenedorResultado.innerHTML = "";

    // 3. Validación: Validamos que el usuario sí haya ingresado números
    if (isNaN(tabla) || isNaN(limite)) {
        contenedorResultado.innerHTML = "<p style='color: red;'>⚠️ Por favor, ingresa ambos números.</p>";
        return;
    }

    // 4. El ciclo (For): Generamos la tabla de multiplicar línea por línea
    let contenidoHTML = "<h3>Resultado:</h3>";
    for (let i = 1; i <= limite; i++) {
        let multiplicacion = tabla * i;
        // Vamos acumulando las líneas (Ej: 5 x 1 = 5)
        contenidoHTML += `<p>${tabla} x ${i} = <b>${multiplicacion}</b></p>`;
    }

    // 5. Inyectamos todo el texto matemático dentro de la página HTML
    contenedorResultado.innerHTML = contenidoHTML;
});
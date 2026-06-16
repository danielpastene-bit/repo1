function calcularSuma() {
    // Obtener los valores de los inputs por su ID
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const divResultado = document.getElementById('resultado');

    // Validar que ambos campos tengan números válidos
    if (isNaN(num1) || isNaN(num2)) {
        divResultado.innerText = "Por favor, ingresa ambos números.";
        return;
    }

    // Realizar la suma
    const suma = num1 + num2;

    // Mostrar el resultado en el DIV
    divResultado.innerText = "Resultado: " + suma;
}

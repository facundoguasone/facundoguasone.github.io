document.addEventListener("DOMContentLoaded", function() {
    let texto = "Hola, soy Facundo Guasone 🚀";
    let i = 0;
    let titulo = document.getElementById("titulo");

    // Asegurar que el h1 esté vacío antes de escribir
    titulo.innerText = "";

    function escribir() {
        if (i < texto.length) {
            // Usar innerText en vez de textContent para evitar doble escritura
            titulo.innerText = texto.substring(0, i + 1);
            i++;
            setTimeout(escribir, 100);
        }
    }
    escribir();
});

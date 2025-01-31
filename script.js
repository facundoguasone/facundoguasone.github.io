document.addEventListener("DOMContentLoaded", function() {
    let texto = "Hola, soy Facundo Guasone 🚀";
    let i = 0;
    let titulo = document.getElementById("titulo");
    
    titulo.textContent = ""; // Asegura que no haya texto previo
    
    function escribir() {
        if (i < texto.length) {
            titulo.textContent += texto[i];
            i++;
            setTimeout(escribir, 100);
        }
    }
    escribir();
});

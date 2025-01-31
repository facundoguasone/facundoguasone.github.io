document.addEventListener("DOMContentLoaded", function() {
    let texto = "Hola, soy Fakaneitor 🚀";
    let i = 0;
    function escribir() {
        if (i < texto.length) {
            document.getElementById("titulo").textContent += texto[i];
            i++;
            setTimeout(escribir, 100);
        }
    }
    escribir();
});

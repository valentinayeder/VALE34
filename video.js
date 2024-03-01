// Seleccionar todos los elementos con la clase "FELIZ" y almacenarlos en la variable "FELIZ"
let FELIZ = document.querySelectorAll(".FELIZ");

// Definir una funcion llamada "mostrarScroll" que se ejecutara cuando se haga scroll en la pagina 
function mostrarScroll() {
    // Obtener la posicion actual de srcoll vertical de la pagina 
    let scrolltop = document.documentElement.scrollTop;

    // Iterar sobre todos los elementos con la clase "animado"
    for (var i = 0; i < FELIZ.length; i++) {
        // Obtener la posicion vertical del elemento actual con respecto al borde superior del documento
        let alturaFELIZ = FELIZ[i].offsetTop;

        // Verificar si el elemento esta dentro del rango de visualizacion (700 pixeles antes de que el elemento)
        
    }
}

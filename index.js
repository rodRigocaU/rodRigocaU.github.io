// index.js



// Cree un nuevo elemento 'div' para contener el título y el subtítulo
var container = d3.select('body').append('div')
  .style('text-align', 'center');

// Añadir el título al contenedor
container.append('h1')
  .text('Projeto - Visualizacao Computacional');

// Añadir el subtítulo al contenedor con un espacio HTML para la línea en blanco
container.append('p')
  .html('Rodrigo Andre Cayro Cuadros (14120320) <br> Profa. Dra. Maria Cristina Ferreira de Oliveira');


//----------------------------------------------------------------------------------------------------------

//var archivos = ["parte1.csv","parte2.csv","parte3.csv","parte4.csv","parte5.csv"];  // Ajusta esto a tus archivos
//var datos = [];

//archivos.forEach(function(archivo) {
    //d3.csv(archivo).then(function(data) {
      //  datos.push(data);
       // console.log(data)
        // Aquí puedes agregar el código para visualizar los datos
    //});
//});

d3.csv("https://drive.google.com/uc?export=download&id=11NmmrZBkQpAvV7J0tO5bAGB9cREYx-XX").then(function(data) {
    console.log(data);
    // Aquí puedes agregar el código para visualizar los datos
});

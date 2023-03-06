/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: marcar favorito                        */
/* -------------------------------------------------------------------------- */
// - buscar el album por id en el array
// - cambiar el estado del like
// - volver a renderizar
function marcarFavorito() {
  const botonesLike = document.querySelectorAll(".fa-heart");
  console.log(botonesLike);

  botonesLike.forEach((boton) => {
    boton.addEventListener("click", function () {
      // console.log(this.id);
      // console.log(boton.id);
      let id = boton.id;

      // recorramos el listado de los albumos
      albumesFamosos.forEach((album) => {
        // si encontramos al elemento que conicide con el boton apretado, le cambiamos la propiedad like.
        if (album.id === boton.id) {
          album.like = !album.like;
        }

        console.log(album);
      });
      // post click debemos renderizar nuevamente las tarjetas al hacer click
      // console.log(boton.id);
      renderizarAlbumes(albumesFamosos);
      // agregegar un listener a cada boton
      marcarFavorito();
    });
  });
}

marcarFavorito();

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.

function eliminarAlbum() {
  // desarrollar la función 👇
}
eliminarAlbum();

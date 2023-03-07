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

      // recorramos el listado de los albumos
      albumesFamosos.forEach((album) => {
        // si encontramos al elemento que conicide con el boton apretado, le cambiamos la propiedad like.
        if (album.id === boton.id) {
          album.like = !album.like;
        }
        console.log(album);
      });
      // console.log(boton.id);
      //👇 Después de hacer click en el 💚  debemos renderizar nuevamente las tarjetas
      renderizarAlbumes(albumesFamosos);
      //👇 Despues de hacer click debemos agregar el listener a cada nuevo boton otra vez ya que el renderizado eliminó lo anterior
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

  // Es siempre buena práctica trabajar los eventos sobre una constante capturada, por eso asigno el evento al body
  const body = document.querySelector("body");

  body.addEventListener("keydown", (e) => {
    // console.log(e); // consulto el evento
    console.log(e.code); // la propiedad "code" me permite consultar sin distinguir entre mayúsculas o minúsculas
    if (e.code == "KeyF") {
      let albumAEliminar = prompt(
        "Ingresa el nombre del álbum que quieres borrar"
      ).toLowerCase();
      //   console.log(albumAEliminar);

      //   uso el método findIndex para encontrar el indice del objetivo a eliminar. del mismo modo que un filter()
      const indexObjetivo = albumesFamosos.findIndex(
        (album) => album.nombre.toLowerCase() == albumAEliminar
      );
      console.log(indexObjetivo); // observo que si encuentro el index, me devuelve el numero correspondiente; sino me devuelve -1

      // Si encuentro el parámetro me va a devolver un index, caso contrario me devuelve -1. Por eso pregunto si el indexObjetivo == -1 en el caso que no lo haya encontrado
      indexObjetivo == -1
        ? alert("Álbum no encontrado")
        : albumesFamosos.splice(indexObjetivo, 1); // El método splice() me elimina el index y en el segundo parámetro especifico cuantos elementos elimino despues de ese index 👉🏼 https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_splice2
    }
    renderizarAlbumes(albumesFamosos);
  });
}
eliminarAlbum();

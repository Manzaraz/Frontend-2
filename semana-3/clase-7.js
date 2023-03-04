/* --------------------------- listado de almbumes --------------------------- */
const albumesFamosos = [
  {
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true,
  },
  {
    id: "z789",
    nombre: "The wall",
    imagen:
      "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
    like: false,
  },
  {
    id: "y456",
    nombre: "Thriller",
    imagen:
      "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: true,
  },
  {
    id: "a987",
    nombre: "Abbey Road",
    imagen:
      "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false,
  },
  {
    id: "b654",
    nombre: "Origin of Symmetry",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false,
  },
  {
    id: "c321",
    nombre: "Back in Black",
    imagen:
      "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false,
  },
];

const nombreUsuario = document.getElementById("nombreUsuario");
const covers = document.querySelector(".covers");

/*                  [1] FUNCION: captar el nombre de usuario                  */

function obtenerUsuario() {
  let usuario = "";

  do {
    usuario = prompt("Ingrese nombre:");
  } while (
    usuario === null ||
    usuario === "" ||
    usuario.length < 4 ||
    !isNaN(usuario)
  );

  nombreUsuario.innerText = usuario.toUpperCase();
}
// obtenerUsuario();

/*                [2] FUNCION: renderizar tarjetas del almbumes               */
/* -------------------------------------------------------------------------- */
//forEach, template strings, innerHTML
function renderizarAlbumes(listado) {
  listado.forEach((album) => {
    /* ------------------------- Modo Template Literals ------------------------- */
    // covers.innerHTML += `
    //   <li data-id="${album.id}">
    //     <img src="${album.imagen}" alt="${album.nombre}">
    //     <p>${album.nombre}</p>
    //     <i id="123sds" class="fa fa-heart ${
    //       // (function () {
    //       //   if (album.like) return "favorito";
    //       // })() // pasando un if-else a través de una funcion autoinvocada como Callback
    //       // album.like ? "favorito" : "" // Usando Operador Ternario
    //       // album.like && "favorito"  || "" // Usando Operador de "cortocircuito" AND y OR
    //       album.like && "favorito" // Usando sólamente el AND
    //     } "></i>
    //   </li>
    // `;

    /* ------------------------- Modo Creación de Nodos ------------------------- */
    // // Creo los nodos (li es el padre, los demás serán los child de li)
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const i = document.createElement("i");

    // Cargo los Atributos a cada nodo
    li.classList.add(album.id);
    img.setAttribute("src", album.imagen);
    img.setAttribute("alt", album.nombre);
    p.textContent = album.nombre;

    // Agrego una clase usando setAttribute
    i.setAttribute(
      "class",
      album.like ? "fa fa-heart favorito" : "fa fa-heart"
    );
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(i);
    covers.appendChild(li);
  });
}

renderizarAlbumes(albumesFamosos);

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* 
/*                   [3] FUNCION: mostrar datos del usuario                   */

// Dentro del div '.perfil' tenemos un parrafo con 2 span en los que debemos colocar
// correctamente su contenido.
// Para eso debemos hacer ciertos calculos y colocar esa info en el HTML. Debemos:
// 1- contar la cantidad de albumes del array y pintarlo en el span correspondiente
// 2- contar la cantidad de favoritos y pintarlo en el span correspondiente
// 3- tener en cuenta: usar las palabra en plural o en singular, según cuando
// sea necesario ( es decir: 1 album, 1 favorito / 2 albumes, 3 favoritos )
function mostrarDatosEnPerfil(arr) {
  // desarrollar la función 👇

  /* ------------------------ Usando ForEach  (Por: JDiego Parula - Equipo 1)------------------------ */
  const cantAlbum = document.querySelector("#cant-albums");
  const cantfavorite = document.querySelector("#cant-favoritos");
  console.log(cantfavorite);

  console.log(cantAlbum);
  let totalAlbum = 0;
  let totalFav = 0;

  albumesFamosos.forEach((album) => {
    totalAlbum++;
    if (album.like === true) {
      totalFav++;
    }
    console.log(totalFav);
  });
  if (totalAlbum >= 1) {
    cantAlbum.textContent = totalAlbum + " álbumes";
  } else {
    cantAlbum.textContent = totalAlbum + " álbum";
  }
  if (totalFav >= 1) {
    cantfavorite.textContent = totalFav + " favoritos";
  } else {
    cantfavorite.textContent = totalFav + " favorito";
  }

  /* -------------------------- Final alternativo ------------------------- */
  // const albums = document.querySelector("#cant-albums");
  // const favoritos = document.querySelector("#cant-favoritos");

  // let cantAlbums = arr.length;
  // let cantFavoritos = arr.filter((a) => a.like == true).length; // Un enfoque diferente usando filter para crear un nuevo array con sólo los objetos que poseen la propiedad .like = true, finalizando con el .length para contar la cantidad de elementos del nuevo array
  // let albumsTxt = "";
  // let favoritosTxt = "";
  // cantAlbums == 1
  //   ? (albumsTxt = "1 álbum")
  //   : (albumsTxt = `${cantAlbums} álbumes`);
  // cantFavoritos == 1
  //   ? (favoritosTxt = "1 favorito")
  //   : (favoritosTxt = `${cantFavoritos} favoritos`);
  // albums.textContent = albumsTxt;
  // favoritos.textContent = favoritosTxt;
}

mostrarDatosEnPerfil(albumesFamosos);

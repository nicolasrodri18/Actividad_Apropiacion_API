// Solicitud 1: Realice una solicitud GETpara obtener la lista completa de usuarios disponibles
// en el servicio.
const ListaCompletaGet = async () => {
    const response = await fetch(`http://localhost:3000/users`);
    const data = await response.json();
    return data;
}

ListaCompletaGet().then(data => {
    console.log(data);
});

// Solicitud 2: Realice una solicitud GET para consultar la información de un usuario
// específico, utilizando su identificador.

const UsuarioEspecificoGet = async (id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const data = await response.json();
    return data;
}

UsuarioEspecificoGet(3).then(data => {
    console.log(data);
});

// Solicitud 3: Realice una solicitud GET para obtener todas las publicaciones (posts)
// asociadas a un usuario determinado.

const PublicacionesUsuarioGet = async (id) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    const data = await response.json();
    return data;
}

PublicacionesUsuarioGet(2).then(data => {
    console.log(data);
});
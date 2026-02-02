// Solicitud 9: Repita una solicitud GET sobre el recurso eliminado o modificado y analice la
// respuesta obtenida.

const ObtenerPublicacionGet = async (postId) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'GET'
    });
    const data = await response.json();
    return data;   
}

ObtenerPublicacionGet(1).then(data => {
    console.log(data);
});

// Solicitud 10: Realice una solicitud GET general y compare la estructura de la respuesta con
// las solicitudes anteriores, identificando cambios y comportamientos del servicio.

const ObtenerTodasPublicacionesGet = async () => {
    const response = await fetch('http://localhost:3000/posts', {
        method: 'GET'
    });
    const data = await response.json();
    return data;   
}

ObtenerTodasPublicacionesGet().then(data => {
    console.log(data);
});
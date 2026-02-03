// Solicitud 9: Repita una solicitud GET sobre el recurso eliminado o modificado y analice la
// respuesta obtenida.

const ObtenerPublicacionGet = async (postId) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'GET'
    });
    const data = await response.json();
    return data;   
}

// Analizando la respuesta de una publicación específica (por ejemplo, la publicación con ID 1)
// que previamente fue eliminada o modificada.
// nos damos cuenta de que si la publicación fue eliminada, la respuesta será un objeto vacío o un error 404,
// mientras que si fue modificada, la respuesta reflejará los cambios realizados.
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

// Luego de Analizar la respuesta general, podemos observar que la estructura de la respuesta es una lista de objetos,
// cada uno representando una publicación. Si una publicación fue eliminada, no aparecerá en esta lista.
// Si fue modificada, la lista reflejará los cambios realizados en esa publicación específica.
// Esto nos permite entender cómo el servicio maneja las operaciones de eliminación y modificación
// en comparación con las solicitudes GET individuales y generales.
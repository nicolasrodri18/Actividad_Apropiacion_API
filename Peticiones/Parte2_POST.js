// Solicitud 4: Realice una solicitud POST para crear una nueva publicación asociada a un
// usuario existente.

const CrearPublicacionPost = async (userId, title, body) => {
    const response = await fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: userId,
            title: title,
            body: body
        })
    });
    const data = await response.json();
    return data;
}

CrearPublicacionPost(1, 'Que es una API', 'Una API es una interfaz de programación de aplicaciones que permite la comunicación entre diferentes sistemas software.').then(data => {
    console.log(data);
});

// Solicitud 5: Realice una solicitud POST para registrar un nuevo comentario relacionado con
// una publicación.

const RegistrarComentarioPost = async (postId, name, body) => {
    const response = await fetch(`http://localhost:3000/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postId: postId,
            name: name,
            body: body
        })
    });
    const data = await response.json();
    return data;
}
RegistrarComentarioPost(1, 'Juan Perez', 'Buenas Practicas para la API').then(data => {
    console.log(data);
});
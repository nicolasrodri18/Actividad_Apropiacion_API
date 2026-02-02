// Solicitud 8: Realice una solicitud DELETE para eliminar una publicación existente.

const EliminarPublicacionDelete = async (postId) => {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
}

EliminarPublicacionDelete(3).then(data => {
    console.log(data);
}); 
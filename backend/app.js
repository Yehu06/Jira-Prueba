
const usuarios = [];

function crearUsuario(nombre, email) {
    const usuario = {
        id: usuarios.length + 1,
        nombre: nombre,
        email: email
    };

    usuarios.push(usuario);
    return usuario;
}

function listarUsuarios() {
    return usuarios;
}

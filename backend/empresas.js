
const empresas = [];

function crearEmpresa(nombre, cif) {
    const empresa = {
        id: empresas.length + 1,
        nombre: nombre,
        cif: cif
    };

    empresas.push(empresa);
    return empresa;
}

function listarEmpresas() {
    return empresas;
}

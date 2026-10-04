import { activoApi } from './activo.http.js';

const submitBtn = document.getElementById('registrarActivo');
const inputCategoria = document.getElementById('categoria');
const inputDescripcion = document.getElementById('descripcion');
const inputFotografia = document.getElementById('fotografia');
const inputEstado = document.getElementById('estado');
const inputPrecio = document.getElementById('precio');

submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const data = {
        idcategoria: inputCategoria.value,
        descripcion: inputDescripcion.value,
        fotografia: inputFotografia.value,
        estado: inputEstado.value,
        precio: inputPrecio.value
    };
    await registrarActivo(data);
});

async function registrarActivo(data) {
    try {
        await activoApi.crearActivo(data);
        console.log('Registro agregado: ', data);
    } catch (error) {
        console.log('Error al registrar: ', error.message);
    }
}

import { categoriaApi } from './categoria.http.js';

const submitBtn = document.getElementById('registrarCategoria');
const inputCategoria = document.getElementById('nombreCategoria');

submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const data = {
        categoria: inputCategoria.value
    };

    await registrarCategoria(data);
});

async function registrarCategoria(data) {
    try {
        await categoriaApi.crearCategoria(data);
        console.log('Registro agregado: ', data.categoria);
    } catch (error) {
        console.log('Error al registrar: ', error.message);
    }
}
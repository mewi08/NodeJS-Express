import { categoriaApi } from './categoria.http.js';

let categorias = [];

function renderTable(categorias, { onEdit, onDelete } = {}){
    const tbody = document.getElementById("categoria-tabla");
    if (!tbody) return;

    tbody.innerHTML = categorias.map( c => `
        <tr>
            <td>${c.categoria}</td>
            <td>
                <button data-action="edit" data-id="${c.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9e97a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-pen-icon lucide-user-round-pen"><path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/></svg>
                </button>
                <button data-action="delete" data-id="${c.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash preview-icon"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </td>
        </tr>
    `).join("");

    tbody.onclick = (a) => {
        const btn = a.target.closest('[data-action]');
        if(!btn) return;

        const id = btn.dataset.id;
        const action = btn.dataset.action;

        if(action == 'edit' && onEdit){
            onEdit(id);
        }

        if(action == 'delete' && onDelete){
            onDelete(id);
        }
    };
};

document.addEventListener("DOMContentLoaded", async(e) => {
    e.preventDefault();
    await cargarCategorias();
});

async function cargarCategorias() {
    try {
        categorias = await categoriaApi.obtenerCategorias();
        render();
    } catch(error) {
        console.log('Error cargando categorias: ', error.message);
    }
};

function render() {
    renderTable(categorias , {
        onEdit: editarCategoria,
        onDelete: eliminarCategoria
    });
};

async function editarCategoria(id) {
    console.log('Editando...', id);
};

async function eliminarCategoria(id) {
    console.log('Eliminando...', id);
};
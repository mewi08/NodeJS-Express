import { api } from '../shared/http.js';

export const categoriaApi = {
    async obtenerCategorias() {
        const res = await api.get('categorias');
        if(!res.success){
            throw new Error(res.message);
        }
        return res.data;
    },

    async crearCategoria(data){
        const res = await api.post('categorias', data);
        if(!res.success){
            throw new Error(res.message);
        }
        return res.data;
    },

}


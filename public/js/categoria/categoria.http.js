import { api } from '../shared/http.js';

export const categoriaApi = {
    async obtenerCategorias() {
        const res = await api.get('categorias');
        if(!res.success){
            throw new Error(res.message);
        }
        return res.data;
    },

}


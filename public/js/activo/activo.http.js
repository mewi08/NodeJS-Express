import { api } from '../shared/http.js';

export const activoApi = {
    async obtenerActivos() {
        const res = await api.get('activos');
        if(!res.success){
            throw new Error(res.message);
        }
        return res.data;
    },

    async crearActivo(data) {
        const res = await api.post('activos', data);
        if(!res.success){
            throw new Error(res.message);
        }
        return res.data;
    },

};
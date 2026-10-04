//Función para realizar solicitudes HTTP a la API
async function request(endpoint, options = {}) {
    const res = await fetch(`/api/${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await res.json();

    if (!res.ok) {
        const message = data.message || 'Error en la solicitud';
        throw new Error(message);
    }

    return data;
}

// Objeto que centraliza los métodos HTTP utilizados por la API
export const api = {
    get:    (url) => request(url),
    post:   (url, body) => request(url, { method: 'POST', body: JSON.stringify(body) }),
    put:    (url, body) => request(url, { method: 'PUT', body: JSON.stringify(body) }),
    delete: (url) => request(url, { method: 'DELETE' })
}
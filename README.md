# Aplicación NodeJS - Express
### Descripción
Aplicación Web que sirve API para gestionar datos de un sistema de Logística

### Requerimientos
- NodeJS
- Express
- MySQL2
- dotenv
- knex

### Despliegue
1. Clone el repositorio: 
```shell
  git clone https://github.com/usuario/mi-proyecto.git
```
2. Restaure node_modules:
```shell
npm install
```
3. Configure las variables de entorno:
```shell
copy .env.example .env
```
4. Restaure la BD, tabla y registros 
```shell
#Tablas
npx knex migrate:latest

#Semillas
npx knex seed:run
```

5. Ejecute el servidor local:
```shell
npm run dev
```

### API Rutas Categoria
| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/categorias` | Crea una categoría |
| PUT | `/categorias/:id` | Actualiza una categoría |
| DELETE | `/categorias/:id` | Elimina una categoría |
| GET | `/categorias` | Lista las categorías |
| GET | `/categorias/:id` | Buscar categoría por ID |

### API Rutas Activo
| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/activos` | Crea un activo |
| PUT | `/activos/:id` | Actualiza un activo |
| DELETE | `/activos/:id` | Elimina un activo |
| GET | `/activos` | Lista los activos |
| GET | `/activos/:id` | Buscar activo por ID |


### Migraciones y semillas

**Migraciones** (estructura de la BD)
- `categorias`: id, categoria
- `activos`: id, idcategoria, descripcion, fotografia, estado, precio

```shell
# crear una nueva
npx knex migrate:make nombre_migracion   

# aplicar todas
npx knex migrate:latest                  

```

**Semillas** (datos de ejemplo)
- `01_initial_data.js`: datos de ejemplo

```shell
# crear un archivo de semilla
npx knex seed:make 03_nombre_semilla     

# cargar los datos
npx knex seed:run                        
```

> Ejecuta primero las migraciones y luego las semillas.

### Observaciones
### Créditos
_Desarrollado por: **Melanie Tello**_
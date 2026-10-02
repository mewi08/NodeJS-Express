//Acceso a la BD
//Anteriormente...
//mysql_connect()  : sql
//poolConnection() : sql
//Ahora knex (responsabilidad conexión) 
const db = require("../database/db");

//En este archivo solo se crean métodos JS
//No se definen las rutas ni los verbos (GET, POST, PUT, DELETE)

//req(require) : solicitud o pedido (input)
//res(result)  : resultado o respuesta (output)
const obtenerCategorias = async(req, res) => {
  try {
    //Consulta > OMR
    const categorias = await db("categorias").select('*');
    return res
      .status(200)
      .json({ success: true, data: categorias });
  } catch(error) {
    console.log("Error al leer categorias: ", error); //Desarrollador (test)
    return res
      .status(500)
      .json({success: false, message: 'Error al obtener categorias'});
  }
};

const obtenerCategoriasPorId = async(req, res) => {
  try {
    const { id } = req.params;
    const categoria = await db('categorias').where({ id }).first();

    if(!categoria){
      return res.status(404).json({ success: false, message: 'No existe la categoria'});
    }

    return res.status(200).json({ success: true, data: categoria });
  } catch(error) {
    console.log("Error al buscar categoria: ", error);
    return res
      .status(500)
      .json({success: false, message: 'Error al buscar categoria'});
  }
};

const crearCategoria = async(req, res) => {
  try {
    const { categoria } = req.body;
    
    if(!categoria){
      res.status(400).json({ success: false, message: "El campo categoria es obligatorio" });
      return;
    }

    const [idGenerado] = await db("categorias").insert({ categoria });
  
    return res.status(201).json({
      success: true, 
      message: 'Categoria creada', 
      data: { id: idGenerado }
    });

  } catch(error) {
    console.error("Error al crear categoria: ", error);
    return res
      .status(500)
      .json({ success: false, message: "Error al crear categoria" });
  }
};

const actualizarCategoria = async(req, res) => {
  try {
    //url
    const { id } = req.params;
    
    //json
    const { categoria } = req.body;

    if(!categoria){
      return res.status(400).json({ success: false, message: 'El campo categoria es obligatorio' });
    };

    const filasAfectadas = await db("categorias").where({ id }).update({ categoria });
 
    if(!filasAfectadas){
      return res.status(404).json({ success: false, message: 'La categoria no existe' });
    }

    return res.status(200).json({ success: true, message: 'Categoria actualizada' });
    
  } catch(error) {
    console.log("Error al actualizar categoria: ", error);
    return res
      .status(500)
      .json({ success: false, message: 'Error al actualizar categoria' });
  }
};

const eliminarCategoria = async(req, res) => {
  try {
    const { id } = req.params;

    const filasAfectadas = await db("categorias").where({ id }).del();
    
    if(!filasAfectadas){
      return res.status(404).json({ success: false, message: 'La categoria no existe' });
    }

    return res.status(200).json({ success: true, message: 'Categoria eliminada' });
  } catch(error) {
    console.log("Error al eliminar categoria: ", error);
    return res
      .status(500)
      .json({success: false, message: 'Error al eliminar categoria'});
  }
};

//Estas acciones deben ser de utilidad (necesarias) para las rutas
module.exports = {
  obtenerCategorias,
  obtenerCategoriasPorId,
  crearCategoria,
  actualizarCategoria,
  eliminarCategoria,
}
const db = require('../database/db');

const obtenerActivos = async(req, res) => {
  try {
    const activos = await db("activos").select("*");
    return res.status(200).json({ success: true, data: activos });
  } catch(error) {
    console.log("Error al listar activos: ", error);
    return res
      .status(500)
      .json({success: false, message: 'Error al listar activos'});
  }
};

const obtenerActivoPorId = async(req, res) => {
  try {
    const { id } = req.params;
    const activo = await db("activos").where({ id }).first();

    if(!activo){
      return res.status(404).json({ success: false, message: 'No existe el activo'});
    }

    return res.status(200).json({ success: true, data: activo });

  } catch(error) {
    console.log("Error al buscar activo: ", error);
    return res
      .status(500)
      .json({success: false, message: 'Error al buscar activo'});
  }
};

const crearActivo = async(req, res) => {
  try {
    const { idcategoria, descripcion, fotografia, estado, precio } = req.body;

    if(!idcategoria){
      res.status(400).json({ success: false, message: 'Ingresa el id categoria' });
      return;
    }

    if(!descripcion){
      res.status(400).json({ success: false, message: 'Ingresa la descripcion' });
      return;
    }

    if(!estado){
      res.status(400).json({ success: false, message: 'Ingresa el estado' });
      return;
    }

    if(!precio){
      res.status(400).json({ success: false, message: 'Ingresa el precio' });
      return;
    }

    if(precio <=0){
      res.status(400).json({ success: false, message: 'El precio debe ser mayor a 0' });
      return;
    }

    const [idGenerado] = await db("activos").insert({ idcategoria, descripcion, fotografia, estado, precio});

    return res.status(201).json({ 
      success: true, 
      message: 'Activo creado',
      data: { id : idGenerado }
    });
    
  } catch(error) {
    console.log("Error al crear activo: ", error);
    return res
      .status(500)
      .json({success: false, message: 'Error al crear activo'});
  }
};

const actualizarActivo = async(req, res) => {
  try {
    const { id } = req.params;
    const { idcategoria, descripcion, fotografia, estado, precio } = req.body;

    
    if(!idcategoria){
      res.status(400).json({ success: false, message: 'Ingresa el id categoria' });
      return;
    }

    if(!descripcion){
      res.status(400).json({ success: false, message: 'Ingresa la descripcion' });
      return;
    }

    if(!estado){
      res.status(400).json({ success: false, message: 'Ingresa el estado' });
      return;
    }

    if(!precio){
      res.status(400).json({ success: false, message: 'Ingresa el precio' });
      return;
    }

    if(precio <=0){
      res.status(400).json({ success: false, message: 'El precio debe ser mayor a 0' });
      return;
    }

    const filasAfectadas = await db("activos").where({ id }).update({ idcategoria, descripcion, fotografia, estado, precio });

    if(!filasAfectadas){
      return res.status(404).json({ success: false, message: 'El activo no existe' });
    }
    
    return res.status(200).json({ success: true, message: 'Activo actualizado' });

  } catch(error) {
    console.log("Error al actualizar activo: ", error);
    return res
      .status(500)
      .json({success: false, message: 'Error al actualizar activo'});
  }
};

const eliminarActivo = async(req, res) => {
  try {
    const { id } = req.params;
    const filasAfectadas = await db("activos").where({ id }).del();

    if(!filasAfectadas){
      return res.status(404).json({ success: false, message: 'El activo no existe' });
    }

    return res.status(200).json({ success: true, message: 'Activo eliminado' });
  } catch(error) {
    console.log("Error al eliminar activo: ", error);
    return res
      .status(500)
      .json({success: false, message: 'Error al eliminar activo'});
  }
};

module.exports = {
  obtenerActivos,
  obtenerActivoPorId,
  crearActivo,
  actualizarActivo,
  eliminarActivo,
}
const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoria.controller');

//Endpoint
router.get('/', categoriasController.obtenerCategorias);
router.get('/:id', categoriasController.obtenerCategoriasPorId);
router.post('/', categoriasController.crearCategoria);
router.put('/:id', categoriasController.actualizarCategoria);
router.delete('/:id', categoriasController.eliminarCategoria);

module.exports = router;
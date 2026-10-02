const knex = require('knex');
const knexfile = require('../../knexfile');

//Seleccionamos el entorno (desarrollo o producción)
const environment = process.env.NODE_ENV || 'development';
const configOptions = knexfile[environment];

//Creamos la instancia
const db = knex(configOptions);

//Exportarlo para usarlo en otro entorno
module.exports = db;
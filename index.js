const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware ya que la comunicación se hace por JSON
app.use(express.json());

//Implementar rutas
app.use('/api/categorias', require('./src/routers/categoria.routes'));
app.use('/api/activos', require('./src/routers/activo.routes'));

app.get("/", (req, res) => {
  res.send("API de logistica funcionando correctamente")
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
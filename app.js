const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (como HTML)
app.use(express.static('public'));

// Rutas explícitas
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.get('/about', (req, res) => res.sendFile(__dirname + '/public/about.html'));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});

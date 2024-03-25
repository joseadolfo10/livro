const express = require('express');
const app = express();
const configuraServidor = require('./configuraserve');
const rotasLivros = require('./rotaslivros');

configuraServidor(app);
rotasLivros(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
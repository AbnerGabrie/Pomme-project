// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Porta do servidor

// Rota de exemplo
app.get('/api/products', (req, res) => {
  // Aqui você irá consultar o banco de dados MySQL para obter os produtos
  // e enviar os dados como uma resposta
  res.json([
    { id: 1, name: 'Produto 1', price: 10.99 },
    { id: 2, name: 'Produto 2', price: 20.99 },
    { id: 3, name: 'Produto 3', price: 30.99 }
  ]);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

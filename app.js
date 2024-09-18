const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '12345',
  database: 'estoque'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem sucedida ao banco de dados');
});

app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM produtos'; // Assumindo que a tabela se chama "produtos"
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }
    res.json(results);
  });
});

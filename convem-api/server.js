const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/verificar-resposta', (req, res) => {
  const resposta = req.body.resposta.toLowerCase();
  if (resposta === 'sim') {
    res.status(200).json('Sucesso');
  } else {
    res.status(400).json('Erro');
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});

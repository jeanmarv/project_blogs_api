const express = require('express');

const app = express();

const { Users } = require('./models'); 

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/users', async (_req, res) => {
  try {
  const users = await Users.findAll();
  
  return res.status(200).json(users);
  } catch (e) {
  console.log(e.message);
  res.status(500).json({ message: 'Ocorreu um erro' });
  }
  });
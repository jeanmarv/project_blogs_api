const express = require('express');
const bodyParser = require('body-parser');

const postRoutes = require('./Routes/postRoutes');
const loginRoutes = require('./Routes/loginRoutes');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', postRoutes);
app.use('/login', loginRoutes);
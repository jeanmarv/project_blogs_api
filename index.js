const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./Routes/userRoutes');
const loginRoutes = require('./Routes/loginRoutes');
const categoriesRoutes = require('./Routes/categoriesRoutes');
const postRoutes = require('./Routes/postRoutes');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);
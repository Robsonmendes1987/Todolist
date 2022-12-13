// const app = require('./app');

// const port = process.env.PORT || 3001
// require('dotenv').config();

// app.get('/', (_request, response) => {
//   response.send();
// });

// app.listen(port, () => console.log('ouvindo porta', port));

// src/server.js

require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
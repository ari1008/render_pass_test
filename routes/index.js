const express = require('express');
const app = express();

const userRouter = require('./user'); // Chemin vers votre fichier de routes

app.use('/', userRouter); // Montez le routeur sur le chemin '/'

// Autres configurations et middleware

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
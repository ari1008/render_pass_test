const express = require('express')
const router = express.Router()

const userRouter = require('user'); // Chemin vers votre fichier de routes

app.use('/users', userRouter); // Montez le routeur sur le chemin '/users'
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    content: 'Welcome to the home page!',
  })
})

module.exports = router

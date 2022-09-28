//requisições
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//teste para as requisições:
/*app.get('/', (req, res) => {
    res.send('O JOGO');
});*/

require('./controllers/autoControllers')(app);

//abrir na porta 3000
app.listen(3000);
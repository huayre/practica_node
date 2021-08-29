const express = require('express');
const app = express();
/* paquete para la gestion de variables de entorno*/
require('dotenv').config();
/* body parser */
const bodyParser = require('body-parser');
app.use(bodyParser.json({
    limit: '20mb'
}));
app.use(bodyParser.urlencoded({
    limit: '20mb',
    extended: true
}));
/* database init */
const initDatabase = require('./config/db')
initDatabase.connect();
app.get('/', (req, res) => {
    res.send({
        message: 'entrada principal'
    });
});
const userRouter = require('./app/routes/user');
const itemRouter = require('./app/routes/item');
app.use(userRouter);
app.use(itemRouter);


app.listen(process.env.PORT, () => {
    console.log('app succesfull port ' + process.env.PORT);
});
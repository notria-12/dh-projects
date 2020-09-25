const express = require('express')
const routesTest = require('./routes/routes')
const app = express();

app.use(routesTest);

app.listen(3003, () => {
    console.log('O servidor está rodando')
})
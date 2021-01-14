/**
 * Arquivo: server.js
 * descreção: arquivo responsável por a configuração do Back-End ('Employee')
 * data: 
 * author:
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Aplicação sendo executada na porta...: ', port);
});
const express = require('express');

const app = express();

app.use(express.json());

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET, POST, PUT, DELETE
  */

 /**
  * Tipos de parametro:
  * 
  * Query: parametros nomeados e enviados após a rota "?"
  * Route: parametro utilizado para identificar recursos
  * Request Body: corpo da requisição
  */
 
  /**
   * SQL: MySQL
   */

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'OmniSTACK RULEZ',
        aluno: 'Gabriel henrique'
    });
});

app.listen(3333);
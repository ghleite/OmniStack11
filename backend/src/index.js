const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

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
   * SQL: MySQL, SQLite, PostgreSQL, Oracle
   * NoSQL: MongoDB, CouuchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table(users).select('*').where()
    */



app.listen(3333);
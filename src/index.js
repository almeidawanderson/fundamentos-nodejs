const express = require ('express');

const app = express();

/**
 *  GET - Buscar uma informação dentro do servidor
 *  POST - Inserir uma informação no servidor
 *  PUT - Alterar uma informação no servidor
 *  PATCH - Alterar uma informação no servidor
 *  DELETE - Deletar uma informação no servidor
 */

app.get("/", (request, response) => {
  return response.json({message: "Hello World Ignite!"});
});

app.listen(5555);


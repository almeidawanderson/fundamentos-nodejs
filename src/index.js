const express = require ('express');

const app = express();

// localhost:5555

app.get("/", (request, response) => {
  return response.json({message: "Hello World Ignite!"});
});

app.listen(5555);


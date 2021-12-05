const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({
    message: "Hello Ignite",
  });
});

const port = 3333;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

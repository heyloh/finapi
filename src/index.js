const express = require("express");

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

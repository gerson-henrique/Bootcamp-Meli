const express = require("express");
const app = express();
const port = 3000;
let api = []; //Stub

app.use(express.json());

app.post("/", (req, res) => {
  const { products } = req.body;
  products.forEach((product) => {
    api.push(product);
  });
  res.status(201).send(products);
});

app.put("/", (req, res) => {
  const { payload, id } = req.body;
  api.forEach((product, index) => {
    if (product.id === id) {
      api[index] = payload;
    }
  });
  res.status(201).end();
});

app.delete("/", (req, res) => {
  const { payload, id } = req.body;
  const newApi = api.filter((product) => product.id === id);
  const api = newApi;
  res.status(201).end();
});

app.get("/", (req, res) => res.json(api));
app.listen(port, () => console.log(` listening on port ${port}!`));

var express = require('express');
var router = express.Router();
let api = require("./users");

app.get("/", (req, res) => res.json(api));
app.get("/:id", (req, res) => res.json(api.find((procut)=> product.id === req.params.id)));


router.post("/", (req, res) => {
  const { user } = req.body;
    api.push(user);

  res.status(201).send(user);
});

router.put("/:id", (req, res) => {
  const { user } = req.body;
  const { id } = req.params;
  api.forEach((product, index) => {
    if (product.id === id) {
      api[index] = payload;
    }
  });
  res.status(201).end();
});

router.delete("/", (req, res) => {
  const { id } = req.id;
  const newApi = api.filter((product) => product.id === id);
  const api = newApi;
  res.status(201).end();
});

module.exports = router;

const express = require("express");
const productRouter = require("./routers/router");

app.use(express.json());
app.use("/api/products", productRouter);

app.listen(port, () => console.log(` listening on port ${port}!`));
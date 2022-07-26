const express = require("express");
const userRouter = require("./routers/router");

app.use(express.json());
app.use("/user", userRouter);

app.listen(port, () => console.log(` listening on port ${port}!`));
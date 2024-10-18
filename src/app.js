const express = require("express");
const userRouter = require("./routes/user");
const showRouter = require("./routes/shows");
const app = express();

app.use("/user", userRouter);
app.use("/shows", showRouter);



module.exports = app;
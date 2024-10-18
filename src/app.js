// const express = require("express");
// const userRouter = require("./routes/user");
// const showRouter = require("./routes/shows");
// const app = express();

// app.use(express.json());

// app.use("/user", userRouter);
// app.use("/shows", showRouter);



// module.exports = app;

// const express = require("express");
// const app = express();
// const Restaurant = require("../models/index")
// const db = require("../db/connection");
// const router = require("./routes/restaurants");

// module.exports = app;
const express = require("express");
const app = express();
const showRouter = require("../routes/shows")
const userRouter = require("../routes/users")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/shows", showRouter);
app.use("/users", userRouter);

module.exports = app;
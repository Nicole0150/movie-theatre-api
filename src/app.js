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

const userRouter = require('./routes/user');
const showRouter = require('./routes/shows');

app.use(express.json());
app.use(express.urlencoded());
app.use('/users', userRouter);
app.use('/shows', showRouter);

module.exports = app;
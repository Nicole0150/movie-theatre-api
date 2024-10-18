// const app = require("./src/app")
// const port = 3000;
// const{db} = require("./db/connection")

// app.listen(port, ()=>{
//     db.sync();
//     console.log(`Listening at http://localhost:${port}`)
// })

// const app = require("./src/app")
// const db = require("./db/connection");
// const port = 3000;

// //TODO: Create your GET Request Route Below: 


// app.listen(port, () => {
//     db.sync();
//     console.log(`Listening at http://localhost:${port}/restaurants`);
// })

const express = require('express');
const app = express();
const PORT = 3000;
const {db} = require("./db/connection")


app.listen(PORT, () => {
    db.sync();
    console.log(`Server is running on http://localhost:${PORT}`);
});
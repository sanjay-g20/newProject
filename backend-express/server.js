const express = require('express');
const dotenv = require("dotenv").config();
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());

connectDb();
app.use(express.json())
const port = process.env.PORT || 5000;
app.use("/api/projects",require("./routes/projects"))
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(port);
})

console.log("server started");
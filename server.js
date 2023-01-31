const express = require ("express");
const cors = require("cors");
const connect = require('./config/db');
const { playlistRoutes, songRoutes, userRoutes, artistRoutes} = require("./routes");
require('dotenv').config()

const app = express();

const port = process.env.PORT || 8000

connect();

app.use(cors());
app.use(express.json());

app.use(playlistRoutes);
app.use(songRoutes);
app.use(userRoutes);
app.use(artistRoutes);


app.get('/',(_req, res) =>{
    res.send("Hello world");
})



app.listen(port, () =>{
    console.log("serverrunning at:", port)
})
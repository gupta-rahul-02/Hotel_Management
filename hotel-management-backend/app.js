const { urlencoded } = require('express');
const express = require('express');
const {connect,sql} = require('./database-connection');
require("dotenv").config();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",async (req,res) =>{
res.send('test route')
})

const room = require('./routes/room.route')

app.use('/api/v1/room',room)

module.exports = app;
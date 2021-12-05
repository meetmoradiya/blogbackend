const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')
const path = require("path");
const bodyParser = require('body-parser')
const postRouter = require('./routes/Post')
app.use(bodyParser.json())
const cors = require('cors')
app.use("/public", express.static("uploads"));
const PORT = process.env.PORT || 3000;

const  registerRouter = require('./routes/Register')
const loginRouter = require('./routes/Login')

app.use(cors())
app.use('/api/v1', postRouter)
app.use('/api/v1/register' , registerRouter)
app.use('/api/v1/login' , )
app.get('/', (req, res) => {
    res.send("mmo here")
})



mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to the mongodb database")
})
app.listen(PORT, () => {
    console.log(`app running on ${PORT}`)
})
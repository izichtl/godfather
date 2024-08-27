// @ts-nocheck
import express from 'express'
import bodyParser from 'body-parser'
import testRouter from './router/base-router'
import godfather from './router/godfather'
import children, { clearChildren } from './router/children'
import path from 'path';
import connectDB from './database/mongo';




const app = express()


// conection with mongo
connectDB();
require("dotenv").config()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// serves public data if you need
const publicDirPath = path.join(__dirname, 'public');
app.use(express.static(publicDirPath));

// clear children
// must be removed to dev or prod
clearChildren()

// router
app.use('/godfather', godfather)
app.use('/children', children)

// test route
app.use('/test', testRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
  console.log(`Servidor rodando na porta ${PORT}`)
  console.log(`Servidor rodando na porta ${PORT}`)
  console.log(`Servidor rodando na porta ${PORT}`)
});


import express from 'express'
import api from './api'
import bodyParser from 'body-parser'
import cors from 'cors'

const App =express();

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));

App.use(cors())
App.use("/api", api)

App.listen(3001)
console.log('dd')
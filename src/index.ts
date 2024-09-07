require('dotenv').config();
import path from 'node:path'
import http from 'node:http'
import express from 'express'
import mongoose from 'mongoose'
import { router } from './router'
import { Server } from 'socket.io'
import cors from 'cors'

const connectDB = process.env.MONGODB_CONNECT_URI

if (!connectDB) {
  throw new Error('The MONGODB_CONNECT_URI environment variable is not set.');
}

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 8080
export const io = new Server(server)

mongoose.connect(connectDB)
.then(() => {
  app.use(cors({
    origin: '*'
  }));
  app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
  app.use(express.json())
  app.use(router)

  server.listen(port, () => {
    console.log('🟢 mongo is connect')
    console.log(`🟢 Server is running on http://localhost:${port}`)
  })
})
.catch((error) => console.log('🔴 mongo is not connect', error))

require('dotenv').config();
import path from 'node:path'
import express from 'express'
import mongoose from 'mongoose'
import { router } from './router'
import cors from 'cors'

const connectDB = process.env.MONGODB_CONNECT_URI

if (!connectDB) {
  throw new Error('The MONGODB_CONNECT_URI environment variable is not set.');
}

mongoose.connect(connectDB)
.then(() => {
  const app = express()
  const port = process.env.PORT || 8080

  app.use(cors({
    origin: '*'
  }));
  app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
  app.use(express.json())
  app.use(router)

  app.listen(port, () => {
    console.log('🟢 mongo is connect')
    console.log(`🟢 Server is running on http://localhost:${port}`)
  })
})
.catch((error) => console.log('🔴 mongo is not connect', error))

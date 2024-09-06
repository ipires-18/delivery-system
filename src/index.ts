require('dotenv').config();
import path from 'node:path'
import express from 'express'
import mongoose from 'mongoose'
import { router } from './router'
import cors from 'cors'

const connectDB = process.env.DB_HOST

if (!connectDB) {
  throw new Error('The DB_HOST environment variable is not set.');
}

mongoose.connect(connectDB)
.then(() => {
  const app = express()
  const port = process.env.PORT

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
.catch(() => console.log('🔴 mongo is not connect'))

import {  Request, Response } from 'express'

import { Product } from '../../models/Product'

export async function createProduct(req:Request, res:Response){
  try {
    const imagePath = req.file?.filename;
    const {
      name,
      description,
      price,
      ingredients,
      category
    } = req.body

    const products = await Product.create({
      name,
      description,
      price:Number(price),
      imagePath,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      category
    })

    return res.status(201).json(products)
  } catch (error){
    console.error(error)
    res.sendStatus(500)
  }
}



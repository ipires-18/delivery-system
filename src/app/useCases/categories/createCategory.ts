import {  Request, Response } from 'express'

import { Category } from '../../models/Category'

export async function createCategory(req:Request, res:Response){
  try {
    const { name, icon } = req.body
    const categories = await Category.create({
      name,
      icon
    })

    return res.status(201).json(categories)
  } catch (error){
    console.error(error)
    res.sendStatus(500)
  }
}

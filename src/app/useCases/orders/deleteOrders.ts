import {  Request, Response } from 'express'

import { Order } from '../../models/Order'

export async function deleteOrders(req:Request, res:Response){
  try {

    const { orderId } = req.params

    await Order.findByIdAndDelete(orderId)

    return res.status(204).send()

  } catch (error){
    console.error(error)
    res.sendStatus(500)
  }
}



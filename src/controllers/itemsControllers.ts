import knex from '../database/connection'
import {Request, Response} from 'express'

class ItemsController{

  async create(request: Request, response: Response) {
    const {title, image} = request.body

    await knex('items').insert({title,image})

    return response.status(200).json({title,image})
  }
  
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*')
  
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`
      }
    })

  return response.json(serializedItems)
  }

}

export default ItemsController
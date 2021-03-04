import express from 'express'
import ItemsController from './controllers/itemsControllers'
import PointsController from './controllers/pointsController'


const routes = express.Router()

const pointsController = new PointsController()
const itemsController = new ItemsController()

routes.get('/items', itemsController.index)
routes.post('/items', itemsController.create)

routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)
routes.post('/points', pointsController.create)


export default routes

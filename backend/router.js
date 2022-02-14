import Router from 'express'
import BoardController from './BoardController.js'

const router = new Router()

router.post('/boards', BoardController.create)
router.get('/boards', BoardController.getAll)
router.put('/boards', BoardController.update)
router.delete('/boards/:id', BoardController.delete)

export default router